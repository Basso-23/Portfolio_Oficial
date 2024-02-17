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
      <h1 className=" gap-x-12 tracking-wide animate-fade-up sm:text-[15vw] xl:text-[14.3vw] text-[22.5vw] text-center abril leading-none pt-20 flex flex-wrap gap-[6px] justify-center xl:px-0 sm:px-5 px-3">
        {language ? (
          <>
            <div className="relative flex">
              D{" "}
              <strong className="relative font-normal">
                i{" "}
                <div className="xl:flex hidden corazones absolute w-[10vw] h-[10vw] min-h-[150px] min-w-[150px] -top-14 -left-16 2xl:-top-[3vw] 2xl:-left-[3.5vw]"></div>
              </strong>
              seños{" "}
            </div>
            <div className="relative">
              Web
              <div className="sm:flex hidden mancha absolute w-full h-[130px] 2xl:h-[6.3vw] 2xl:-bottom-[4vw] -bottom-20 right-0"></div>
            </div>
          </>
        ) : (
          <>
            <div>Web</div>
            <div className="relative flex">
              Des{" "}
              <strong className="relative font-normal">
                i{" "}
                <div className="xl:flex hidden corazones absolute w-[10vw] h-[10vw] min-h-[150px] min-w-[150px] -top-14 -left-16 2xl:-top-[3vw] 2xl:-left-[3.5vw]"></div>
              </strong>
              gns{" "}
            </div>
          </>
        )}
      </h1>
      {/* CONTAINER ----------------------------------------------- */}
      <div className=" xl:px-20 sm:px-5 px-3 w-full  lg:mt-20 xl:mt-40 mt-16 mb-0">
        {/* SUBTITLE ----------------------------------------------- */}
        <div className="animate-fade-up animate-delay-200 dmserif relative flex lg:justify-start justify-center">
          <div className=" relative pb-4 text-[min(9vw,45px)] 2xl:text-[2.93vw] sm:pt-10 xl:pt-0 ">
            {language ? (
              <div className="flex relative">
                <div className="w-[min(6vw,35px)] h-[min(6vw,35px)] 2xl:w-[2vw] 2xl:h-[2vw] comillas absolute left-0 -top-0"></div>
                <div className=" px-[8.5vw] sm:px-14 2xl:px-[3vw]">
                  Portafolio Personal
                </div>
                <div className="w-[min(6vw,35px)] h-[min(6vw,35px)] 2xl:w-[2vw] 2xl:h-[2vw] comillas flip absolute right-0 -top-0"></div>
              </div>
            ) : (
              <div className="flex relative">
                <div className="w-[min(6vw,35px)] h-[min(6vw,35px)] 2xl:w-[2vw] 2xl:h-[2vw] comillas absolute left-0 -top-0"></div>
                <div className=" px-[8.5vw] sm:px-14 2xl:px-[3vw]">
                  Personal Portfolio
                </div>
                <div className="w-[min(6vw,35px)] h-[min(6vw,35px)] 2xl:w-[2vw] 2xl:h-[2vw] comillas flip absolute right-0 -top-0"></div>
              </div>
            )}

            <div className="hidden absolute lg:top-2 -top-2 -right-6 text-2xl">
              <TbAsterisk />
            </div>
          </div>
        </div>
        {/* 2 COL GRID ----------------------------------------------- */}
        <div className="2xl:text-[0.8vw] w-full border-[#3b3a38] border-b-[1px] border-t-[1px] relative lg:py-6 sm:py-12 pt-8 pb-12 tracking-wide lg:text-start text-center grid lg:grid-cols-2 grid-cols-1 gap-10">
          {/* INFO ----------------------------------------------- */}
          <div className=" animate-fade-up animate-delay-500 my-auto max-w-[500px] lg:mx-0 mx-auto">
            {language ? (
              <div>
                Creando sitios web excepcionales con diseños increíbles de
                UI/UX.{" "}
                <strong className="relative">
                  ¡Creemos algo juntos!{" "}
                  <div className="sm:flex hidden raya absolute w-full h-16 top-0 right-0"></div>
                </strong>
              </div>
            ) : (
              <div>
                Creating outstanding websites with amazing UI/UX designs.{" "}
                <strong className="relative">
                  Let&apos;s create something together!
                  <div className="sm:flex hidden raya absolute w-full h-16 top-0 right-0"></div>
                </strong>
              </div>
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
            <div className=" sm:flex hidden flex-col my-auto px-8 border-[#3b3a38] sm:border-l-[1px]">
              <a
                href={"https://beacons.ai/carlosbaso"}
                target="_blank"
                className=" bg-[#FFF7E9] text-black font-medium px-6 py-2 text-lg 2xl:text-[0.85vw] hover:bg-transparent hover:text-[#FFF7E9] border-[#FFF7E9]  border-[1.5px] transition-all"
              >
                {language ? <div>Contacto</div> : <div>Contact</div>}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
