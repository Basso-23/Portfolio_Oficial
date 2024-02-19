import React, { useState, useEffect, useRef, Component } from "react";
import Head from "next/head";
import { motion as m, AnimatePresence } from "framer-motion";
import { projects_en } from "@/components/projects_en";
import { projects_es } from "@/components/projects_es";
import Tilt from "react-parallax-tilt";
import { RxExternalLink } from "react-icons/rx";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { HiArrowDown } from "react-icons/hi2";
import "react-image-gallery/styles/css/image-gallery.css";
import { Link, animateScroll as scroll } from "react-scroll";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import copy from "copy-text-to-clipboard";
import { Slant as Hamburger } from "hamburger-react";
import { IoIosArrowUp } from "react-icons/io";

const Inicio = () => {
  const [isOpen, setIsOpen] = useState(false);

  const notify = () => {
    toast.success("Correo electrónico copiado", {
      position: "top-right",
      autoClose: 3500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Slide,
    });
    copy("carlos.baso23@gmail.com");
  };

  const notify_mobile = () => {
    toast.success("Correo electrónico copiado", {
      position: "bottom-center",
      autoClose: 3500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Slide,
    });
    copy("carlos.baso23@gmail.com");
  };

  const [setscroll, setScroll] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const scrollTopButton = () => {
    if (window.scrollY >= 200) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", scrollTopButton);
  }

  return (
    <div>
      <Head>
        <title>Portafolio - Carlos Baso</title>
        <meta
          name="description"
          content="  Portafolio - Carlos Baso Ing. de Software, JavaScript, React JS, Next JS. ¡Echa un vistazo a mis proyectos!"
        />
      </Head>
      <AnimatePresence>
        {setscroll && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.25,
            }}
            onClick={() => {
              scrollToTop();
            }}
            className="sm:w-[50px] sm:h-[50px]  w-[48px] h-[48px] fixed sm:bottom-4  sm:right-3 bottom-2 right-2 bg-[#e9e9e9] sm:text-[25px] text-[23px] z-[60] text-black flex justify-center items-center cursor-pointer"
          >
            <IoIosArrowUp />
          </m.div>
        )}
      </AnimatePresence>

      <main className="min-h-screen  max-w-[1500px] px-3 sm:px-8 mx-auto pt-10 sm:pt-[65px]">
        <section className=" flex justify-between items-center relative ">
          <div className="roboto-bold sm:text-[38px] text-[34px] border-[4px]  border-black sm:w-[63px] sm:h-[60px] w-[59px] h-[56px] roboto-500 flex items-center text-center justify-center">
            P
          </div>

          <div className=" lg:flex hidden gap-14 roboto-500 text-[15px] tracking-wide uppercase">
            <div>
              <div className=" cursor-default focus w-full h-full relative">
                Correo electrónico
              </div>
              <div className="focus-content2 absolute sm:flex hidden justify-center flex-col tracking-wide w-[250px] roboto-light">
                <div className="h-[10px] w-full"></div>

                <a
                  onClick={notify}
                  className=" bg-[#101010] normal-case text-[15px] px-8 py-5 border-b-[1px] border-[#333333] flex gap-3 cursor-pointer"
                >
                  <div>Copiar al portapapeles </div>
                </a>

                <a
                  href="mailto:hoshicreative.studio@gmail.com"
                  className=" bg-[#101010] normal-case text-[15px] px-8 py-5 border-b-[1px] border-[#333333] flex gap-3 cursor-pointer"
                >
                  <div>Enviar correo </div>
                </a>
              </div>
            </div>

            <a
              target="_blank"
              href="https://github.com/Basso-23"
              className=" cursor-pointer"
            >
              Github
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/carlosbaso/"
              className=" cursor-pointer"
            >
              Linkedin
            </a>
            <a className=" cursor-pointer">Currículum</a>
            <div>
              <div className="cursor-default focus w-full h-full relative">
                Idioma
              </div>
              <div className="focus-content3 absolute sm:flex hidden justify-center flex-col tracking-wide w-[250px] roboto-light">
                <div className="h-[10px] w-full"></div>

                <div className=" bg-[#101010] normal-case text-[15px] px-8 py-5 border-b-[1px] border-[#333333] flex gap-3 cursor-pointer">
                  <div>Español </div>
                </div>

                <div className=" bg-[#101010] normal-case text-[15px] px-8 py-5 border-b-[1px] border-[#333333] flex gap-3 cursor-pointer">
                  <div>English </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:hidden flex">
            <Hamburger toggled={isOpen} toggle={setIsOpen} size={35} />
          </div>
          <AnimatePresence>
            {isOpen ? (
              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 0,
                }}
                exit={{ opacity: 0 }}
                className="lg:hidden flex absolute w-full sm:mt-[540px] mt-[500px] bg-[#101010] flex-col text-white uppercase roboto-500 z-[60] sm:text-[15px] text-[13px]"
              >
                <a
                  onClick={() => {
                    notify_mobile();
                    setIsOpen(false);
                  }}
                  className="cursor-pointer px-8 py-5 border-b-[1px] border-[#333333] hover:text-[#7b7b7b] transition-all"
                >
                  Correo electrónico
                </a>
                <a
                  target="_blank"
                  href="https://github.com/Basso-23"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className="cursor-pointer px-8 py-5 border-b-[1px] border-[#333333] hover:text-[#7b7b7b] transition-all"
                >
                  Github
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/carlosbaso/"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className="cursor-pointer px-8 py-5 border-b-[1px] border-[#333333] hover:text-[#7b7b7b] transition-all"
                >
                  Linkedin
                </a>
                <a
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className="cursor-pointer px-8 py-5 border-b-[1px] border-[#333333] hover:text-[#7b7b7b] transition-all"
                >
                  Currículum
                </a>
                <div className=" pointer-events-none py-2 transition-all border-b-[1px] border-[#333333] text-center text-black bg-white ">
                  cambiar idioma
                </div>
                <div
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className="cursor-pointer px-8 py-5 border-b-[1px] border-[#333333] hover:text-[#7b7b7b] transition-all"
                >
                  Español
                </div>
                <div
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className="cursor-pointer px-8 py-5 border-b-[1px] border-[#333333] hover:text-[#7b7b7b] transition-all"
                >
                  English
                </div>
              </m.div>
            ) : null}
          </AnimatePresence>
        </section>
        <section>
          <div className="text-[18px] w-10">
            <ToastContainer />
          </div>
          <div className=" roboto-500 max-w-[1000px] text-[30px] sm:text-[55px] mt-12 sm:mt-[80px] sm:leading-[73px]">
            We combine strategy & technology to solve complex business
            challenges in the design industry.
          </div>
        </section>
        <section>
          <div className=" hidden sm:flex mt-10 sm:mt-[66px] sm:gap-5 gap-4 text-[17px] sm:text-[19px] sm:justify-start justify-center">
            <div>Projects</div>
            <div>/</div>
            <div>Designs</div>
            <div>/</div>
            <div>Websites</div>
            <div>/</div>
            <div>Branding</div>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-9 mt-[30px]">
            {projects_es
              .map((item) => (
                <div
                  key={item.id}
                  className={`${item.image}   w-full h-[350px] sm:h-[500px] lg:h-[400px] border-[1px] border-[#e2e2e2] relative`}
                >
                  <div className="focus w-full h-full relative">
                    <a
                      target="_blank"
                      href={item.url}
                      className="w-full h-full z-50 absolute"
                    ></a>
                  </div>
                  <div className="focus-content sm:flex hidden justify-center flex-col gap-1 pl-10 tracking-wide">
                    <div className="text-[22px] roboto-light">{item.title}</div>
                    <div className="text-[16px] text-[#b0b0b0]">
                      {item.category}
                    </div>
                  </div>
                </div>
              ))
              .reverse()}
          </div>
        </section>
      </main>
      <section className="bg-[#ededed] h-[1px] w-full sm:mt-32 mt-20"></section>
      <section className="sm:py-12 py-7 flex sm:justify-between text-[#707070] max-w-[1500px] px-3 sm:px-8 mx-auto flex-wrap gap-4">
        <div> © 2024 CarlosBaso</div>
        <div className="sm:flex hidden gap-5">
          <div onClick={notify} className=" cursor-pointer">
            Correo electrónico
          </div>
          <a target="_blank" href="https://github.com/Basso-23">
            Github
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/carlosbaso/">
            LinkedIn
          </a>
          <div className=" cursor-pointer">Currículum</div>
          <div className=" cursor-pointer">ES</div>
          <div className=" cursor-pointer">EN</div>
        </div>
      </section>
    </div>
  );
};

export default Inicio;
