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

const Inicio = () => {
  return (
    <div>
      <Head>
        <title>Portafolio - Carlos Baso</title>
        <meta
          name="description"
          content="  Portafolio | Carlos Baso Ing. de Software, JavaScript, React JS, Next JS. ¡Echa un vistazo a mis proyectos!"
        />
      </Head>

      <main className="min-h-screen  max-w-[1500px] mx-auto pt-10 sm:pt-[65px] px-3 sm:px-10">
        <section className=" flex justify-between items-center">
          <div className="roboto-bold sm:text-[38px] text-[34px] border-[4px] border-black sm:w-[63px] sm:h-[60px] w-[59px] h-[56px] roboto-500 flex items-center text-center justify-center">
            P
          </div>
          <div className=" lg:flex hidden gap-14 roboto-500 text-[15px] tracking-wide uppercase">
            <a className=" cursor-pointer">Correo electrónico</a>
            <a className=" cursor-pointer">Github</a>
            <a className=" cursor-pointer">Linkedin</a>
            <a className=" cursor-pointer">Currículum</a>
            <a className=" cursor-pointer">Idioma</a>
          </div>
        </section>
        <section>
          <div className=" roboto-500 max-w-[1000px] text-[30px] sm:text-[55px] mt-12 sm:mt-[103px] sm:leading-[73px]">
            We combine strategy & technology to solve complex business
            challenges in the design industry.
          </div>
        </section>
        <section>
          <div className=" flex mt-10 sm:mt-[66px] sm:gap-5 gap-4 text-[17px] sm:text-[19px] sm:justify-start justify-center">
            <div>All</div>
            <div>/</div>
            <div>Branding</div>
            <div>/</div>
            <div>Illustration</div>
            <div>/</div>
            <div>Logo</div>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-9 mt-[30px]">
            {projects_es
              .map((item) => (
                <div
                  key={item.id}
                  className={`${item.image}   w-full h-[350px] sm:h-[500px] lg:h-[400px] border-[1px] border-[#e2e2e2] mouse relative`}
                >
                  <div className="focus w-full h-full relative">
                    <a
                      target="_blank"
                      href={item.url}
                      className="w-full h-full z-50 absolute"
                    ></a>
                  </div>
                  <div className="subtitle sm:flex hidden justify-center flex-col gap-1 pl-10 tracking-wide">
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
        <div className="min-h-screen "></div>
      </main>
    </div>
  );
};

export default Inicio;
