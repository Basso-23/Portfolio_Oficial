import React, { useState, useEffect, useRef, Component } from "react";
import Head from "next/head";
import { motion as m, AnimatePresence } from "framer-motion";
import { projects_en } from "@/components/projects_en";
import { projects_es } from "@/components/projects_es";
import { Link, animateScroll as scroll } from "react-scroll";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import copy from "copy-text-to-clipboard";
import { Slant as Hamburger } from "hamburger-react";
import { IoIosArrowUp } from "react-icons/io";

const Inicio = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState(true);
  const [filtered, setFiltered] = useState(projects_es);
  const [copyText, setCopyText] = useState("Correo electrónico copiado");
  const [pageTitle, setPageTitle] = useState("Portafolio - Carlos Baso");
  const [mtPixels, setMtPixels] = useState("mt-[115px]");
  const [resume, setResume] = useState(
    "https://drive.google.com/file/d/1xK_8f4Jdlcjvw8a87wCpgfKEqfCBmR3O/view"
  );

  const notify = () => {
    toast.success(copyText, {
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
    toast.success(copyText, {
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

  useEffect(() => {
    if (language) {
      setFiltered(projects_es);
      setCopyText("Correo electrónico copiado");
      setPageTitle("Portafolio - Carlos Baso");
      setResume(
        "https://drive.google.com/file/d/1xK_8f4Jdlcjvw8a87wCpgfKEqfCBmR3O/view"
      );
      setMtPixels("mt-[115px]");
    } else {
      setFiltered(projects_en);
      setCopyText("Email copied");
      setPageTitle("Portfolio - Carlos Baso");
      setResume(
        "https://drive.google.com/file/d/1O2gmqslUaGKqcvuj-d_cBgdJP1XEpCw4/view"
      );
      setMtPixels("mt-[160px]");
    }
  }, [language]);

  const [setscroll, setScroll] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  const refresh = () => {
    window.scrollTo(0, 0);
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
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="Portafolio - Carlos Baso Ing. de Software, JavaScript, React JS, Next JS. ¡Echa un vistazo a mis proyectos!"
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
            className="sm:w-[50px] sm:h-[50px]  w-[48px] h-[48px] fixed sm:bottom-4  sm:right-3 bottom-2 right-2 bg-black sm:text-[25px] text-[23px] z-[60] text-white flex justify-center items-center cursor-pointer"
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
                {language ? <div>Correo electrónico</div> : <div>Email</div>}
              </div>
              <div className="focus-content2 absolute sm:flex hidden justify-center flex-col tracking-wide w-[250px] roboto-light">
                <div className="h-[10px] w-full"></div>

                <div
                  onClick={notify}
                  className=" bg-[#101010] normal-case text-[15px] px-8 py-5 border-b-[1px] border-[#333333] flex gap-2 cursor-pointer "
                >
                  <div className="relative flex">
                    {language ? (
                      <div>Copiar al portapapeles</div>
                    ) : (
                      <div>Copy to clipboard</div>
                    )}
                    <div className="  absolute -right-8 ">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        height="20px"
                        width="20px"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z"></path>
                      </svg>
                    </div>{" "}
                  </div>
                </div>

                <a
                  href="mailto:carlos.baso23@gmail.com"
                  className=" bg-[#101010] normal-case text-[15px] px-8 py-5 border-b-[1px] border-[#333333] flex gap-2 cursor-pointer "
                >
                  <div className="relative flex">
                    {language ? (
                      <div>Enviar correo</div>
                    ) : (
                      <div>Send email</div>
                    )}
                    <div className="  absolute -right-8 ">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        height="22px"
                        width="22px"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.6378 15.529L15.052 16.9432L20.0018 11.9934L15.052 7.0437L13.6378 8.45791L16.1363 10.9564H7.99823C5.78909 10.9564 3.99823 12.7472 3.99823 14.9564V16.9564H5.99823V14.9564C5.99823 13.8518 6.89366 12.9564 7.99823 12.9564H16.2104L13.6378 15.529Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>{" "}
                  </div>
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
            <a target="_blank" href={resume} className=" cursor-pointer">
              {language ? <div>Currículum</div> : <div>Resume</div>}
            </a>
            <div>
              <div className="cursor-default focus w-full h-full relative">
                {language ? <div>Idioma</div> : <div>Language</div>}
              </div>
              <div className="focus-content3 absolute sm:flex hidden justify-center flex-col tracking-wide w-[250px] roboto-light">
                <div className="h-[10px] w-full"></div>

                <div
                  onClick={() => {
                    setLanguage(true);
                    refresh();
                  }}
                  className=" bg-[#101010] normal-case text-[15px] px-8 py-5 border-b-[1px] border-[#333333] flex gap-2 cursor-pointer "
                >
                  <div className="relative flex">
                    Español
                    <div className=" -mt-[4px] absolute -right-8 ">
                      {language ? (
                        <div>
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 512 512"
                            height="28px"
                            width="28px"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M362.6 192.9L345 174.8c-.7-.8-1.8-1.2-2.8-1.2-1.1 0-2.1.4-2.8 1.2l-122 122.9-44.4-44.4c-.8-.8-1.8-1.2-2.8-1.2-1 0-2 .4-2.8 1.2l-17.8 17.8c-1.6 1.6-1.6 4.1 0 5.7l56 56c3.6 3.6 8 5.7 11.7 5.7 5.3 0 9.9-3.9 11.6-5.5h.1l133.7-134.4c1.4-1.7 1.4-4.2-.1-5.7z"></path>
                          </svg>
                        </div>
                      ) : null}
                    </div>{" "}
                  </div>
                </div>

                <div
                  onClick={() => {
                    setLanguage(false);
                    refresh();
                  }}
                  className=" bg-[#101010] normal-case text-[15px] px-8 py-5 border-b-[1px] border-[#333333] flex gap-2 cursor-pointer "
                >
                  <div className="relative flex">
                    English
                    <div className=" -mt-[4px] absolute -right-8 ">
                      {language ? null : (
                        <div>
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 512 512"
                            height="28px"
                            width="28px"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M362.6 192.9L345 174.8c-.7-.8-1.8-1.2-2.8-1.2-1.1 0-2.1.4-2.8 1.2l-122 122.9-44.4-44.4c-.8-.8-1.8-1.2-2.8-1.2-1 0-2 .4-2.8 1.2l-17.8 17.8c-1.6 1.6-1.6 4.1 0 5.7l56 56c3.6 3.6 8 5.7 11.7 5.7 5.3 0 9.9-3.9 11.6-5.5h.1l133.7-134.4c1.4-1.7 1.4-4.2-.1-5.7z"></path>
                          </svg>
                        </div>
                      )}
                    </div>{" "}
                  </div>
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
                className="lg:hidden flex absolute w-full sm:mt-[500px] mt-[400px] bg-[#101010] flex-col text-white uppercase roboto-500 z-[60] sm:text-[15px] text-[12px]"
              >
                <a
                  onClick={() => {
                    notify_mobile();
                    setIsOpen(false);
                  }}
                  className="cursor-pointer px-8 sm:py-5 py-4 border-b-[1px] border-[#333333] hover:text-[#7b7b7b] transition-all"
                >
                  {language ? <div>Correo electrónico</div> : <div>Email</div>}
                </a>
                <a
                  target="_blank"
                  href="https://github.com/Basso-23"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className="cursor-pointer px-8 sm:py-5 py-4 border-b-[1px] border-[#333333] hover:text-[#7b7b7b] transition-all"
                >
                  Github
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/carlosbaso/"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className="cursor-pointer px-8 sm:py-5 py-4 border-b-[1px] border-[#333333] hover:text-[#7b7b7b] transition-all"
                >
                  Linkedin
                </a>
                <a
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className="cursor-pointer px-8 sm:py-5 py-4 border-b-[1px] border-[#333333] hover:text-[#7b7b7b] transition-all"
                >
                  {language ? <div>Currículum</div> : <div>Resume</div>}
                </a>
                <div
                  onClick={() => {
                    setIsOpen(false);
                    setLanguage(true);
                    refresh();
                  }}
                  className="cursor-pointer px-8 sm:py-5 py-4 border-b-[1px] border-[#333333] hover:text-[#7b7b7b] transition-all flex "
                >
                  <div className="flex relative">
                    Español{" "}
                    <div className=" sm:-mt-[4px] -mt-[6px]  absolute -right-8 ">
                      {language ? (
                        <div>
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 512 512"
                            height="28px"
                            width="28px"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M362.6 192.9L345 174.8c-.7-.8-1.8-1.2-2.8-1.2-1.1 0-2.1.4-2.8 1.2l-122 122.9-44.4-44.4c-.8-.8-1.8-1.2-2.8-1.2-1 0-2 .4-2.8 1.2l-17.8 17.8c-1.6 1.6-1.6 4.1 0 5.7l56 56c3.6 3.6 8 5.7 11.7 5.7 5.3 0 9.9-3.9 11.6-5.5h.1l133.7-134.4c1.4-1.7 1.4-4.2-.1-5.7z"></path>
                          </svg>
                        </div>
                      ) : null}
                    </div>{" "}
                  </div>
                </div>
                <div
                  onClick={() => {
                    setIsOpen(false);
                    setLanguage(false);
                    refresh();
                  }}
                  className="cursor-pointer px-8 sm:py-5 py-4 border-b-[1px] border-[#333333] hover:text-[#7b7b7b] transition-all flex"
                >
                  <div className="flex relative">
                    English{" "}
                    <div className=" sm:-mt-[4px] -mt-[6px]  absolute -right-8 ">
                      {language ? null : (
                        <div>
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 512 512"
                            height="28px"
                            width="28px"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M362.6 192.9L345 174.8c-.7-.8-1.8-1.2-2.8-1.2-1.1 0-2.1.4-2.8 1.2l-122 122.9-44.4-44.4c-.8-.8-1.8-1.2-2.8-1.2-1 0-2 .4-2.8 1.2l-17.8 17.8c-1.6 1.6-1.6 4.1 0 5.7l56 56c3.6 3.6 8 5.7 11.7 5.7 5.3 0 9.9-3.9 11.6-5.5h.1l133.7-134.4c1.4-1.7 1.4-4.2-.1-5.7z"></path>
                          </svg>
                        </div>
                      )}
                    </div>{" "}
                  </div>
                </div>
              </m.div>
            ) : null}
          </AnimatePresence>
        </section>
        <section>
          <div className="text-[18px] w-10">
            <ToastContainer />
          </div>
          <div className=" roboto-500 max-w-[1000px] text-[30px] sm:text-[55px] mt-10 sm:mt-[80px] sm:leading-[73px] leading-[45px]">
            {language ? (
              <div>
                ¡Bienvenido a mi portafolio de proyectos! Aquí encontrarás una
                muestra de mi trabajo.
              </div>
            ) : (
              <div className="sm:max-w-[900px]">
                Welcome to my project portfolio! Here you'll find a sample of my
                work.
              </div>
            )}
          </div>
        </section>
        <section>
          <div className=" hidden sm:flex mt-10 sm:mt-[66px] sm:gap-5 gap-4 text-[17px] sm:text-[19px] sm:justify-start justify-center">
            {language ? <div>Proyectos</div> : <div> Projects</div>}
            <div>/</div>
            {language ? <div>Diseños</div> : <div> Designs</div>}
            <div>/</div>
            {language ? <div>Sitios Web</div> : <div> Websites</div>}
            <div>/</div>
            {language ? <div>Desarrollo</div> : <div> Development</div>}
          </div>
        </section>

        <section>
          <div
            className={
              isOpen
                ? `grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-9 sm:mt-[30px] ${mtPixels} transition-all duration-500`
                : `grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-9 sm:mt-[30px] mt-[30px] transition-all duration-500`
            }
          >
            {filtered
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
            {language ? <div>Correo electrónico</div> : <div>Email</div>}
          </div>
          <a target="_blank" href="https://github.com/Basso-23">
            Github
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/carlosbaso/">
            LinkedIn
          </a>
          <a target="_blank" href={resume} className=" cursor-pointer">
            {language ? <div>Currículum</div> : <div>Resume</div>}
          </a>
          <div
            onClick={() => {
              setLanguage(true);
              refresh();
            }}
            className=" cursor-pointer"
          >
            ES
          </div>
          <div
            onClick={() => {
              setLanguage(false);
              refresh();
            }}
            className=" cursor-pointer"
          >
            EN
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inicio;
