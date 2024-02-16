import React, { useState, useEffect, useRef } from "react";
import { TbAsterisk } from "react-icons/tb";
import { HiArrowDown } from "react-icons/hi2";
import { Link, animateScroll as scroll } from "react-scroll";

const Header = ({ language, isOpen }) => {
  return (
    <section
      className={
        isOpen
          ? "w-full relative text-[#FFF7E9] sm:pb-20"
          : "w-full relative text-[#FFF7E9] sm:pb-0"
      }
    >
      {/* TITLE----------------------------------------------- */}
      <h1 className=" gap-x-12 tracking-wide animate-fade-up sm:text-[16vw] text-[22.5vw] text-center abril leading-none pt-20 flex flex-wrap gap-[6px] justify-center xl:px-0 sm:px-5 px-3">
        {language ? (
          <>
            <div>diseños</div>
            <div>web</div>
          </>
        ) : (
          <>
            <div>web</div>
            <div>designs</div>
          </>
        )}
      </h1>
      {/* CONTAINER ----------------------------------------------- */}
      <div className=" xl:px-20 sm:px-5 px-3 w-full  lg:mt-40 mt-16 mb-0">
        {/* SUBTITLE ----------------------------------------------- */}
        <div className="animate-fade-up animate-delay-200 dmserif relative flex lg:justify-start justify-center">
          <div className=" relative pb-4 text-[min(10.5vw,60px)] ">
            {language ? <>Portafolio Personal</> : <>Personal Portfolio</>}
            <div className="hidden absolute lg:top-2 -top-2 -right-6 text-2xl">
              <TbAsterisk />
            </div>
          </div>
        </div>
        {/* 2 COL GRID ----------------------------------------------- */}
        <div className=" w-full border-[#3b3a38] border-b-[1px] border-t-[1px] relative lg:py-6 py-12 tracking-wide lg:text-start text-center grid lg:grid-cols-2 grid-cols-1 gap-10">
          {/* INFO ----------------------------------------------- */}
          <div className=" animate-fade-up animate-delay-500 my-auto max-w-[500px] lg:mx-0 mx-auto">
            {language ? (
              <>
                Creando sitios web excepcionales con diseños increíbles de
                UI/UX. ¡Creemos algo juntos!
              </>
            ) : (
              <>
                Creating outstanding websites with amazing UI/UX designs.
                Let&apos;s create something together!
              </>
            )}
          </div>
          {/* BUTTON AND RATE CONTAINER ----------------------------------------------- */}
          <div className="animate-fade-up animate-delay-700 flex lg:justify-end justify-center">
            {/* BUTTON ----------------------------------------------- */}
            <div className="flex gap-5   sm:pr-8">
              <Link
                to="work"
                smooth={true}
                offset={-50}
                duration={700}
                className=" h-14 w-14 text-black bg-[#FFF7E9] border-[#FFF7E9] rounded-full my-auto border-[1.5px] justify-center items-center flex text-3xl hover:bg-transparent hover:text-[#DCDCDC] transition-all sm:cursor-pointer active:scale-[0.95] "
              >
                <HiArrowDown />
              </Link>
              <div className=" flex flex-col my-auto gap-1 text-start">
                {language ? (
                  <>
                    <div className=" text-3xl">Trabajos</div>
                    <div>Desplázate Hacia Abajo para Ver</div>
                  </>
                ) : (
                  <>
                    <div className=" text-3xl">Work</div>
                    <div>Scroll Down to View</div>
                  </>
                )}
              </div>
            </div>
            {/* RATE ----------------------------------------------- */}
            <div className=" sm:flex hidden flex-col my-auto pl-8 border-[#3b3a38] sm:border-l-[1px]">
              <div className=" font-medium text-3xl -tracking-wider">100%</div>

              {language ? (
                <>
                  <div>Calidad Garantizada</div>
                </>
              ) : (
                <div>Guaranteed Quality</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
