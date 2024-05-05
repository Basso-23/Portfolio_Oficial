import React, { useState, useEffect } from "react";
import { motion as m, AnimatePresence } from "framer-motion";
import { projects_en } from "@/json/projects_en";
import { projects_es } from "@/json/projects_es";
import { Link, animateScroll as scroll } from "react-scroll";
import { IoIosArrowUp } from "react-icons/io";
import Navbar from "@/sections/Navbar";
import Footer from "@/components/Footer";
import Slider from "react-infinite-logo-slider";
import Skills from "@/sections/Skills";

const App = () => {
  const [scrollTop, setScrollTop] = useState(false);
  const [projects, setProjects] = useState(projects_es);

  //FUNCTION: Para el botton de scroll to top
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  const scrollTopButton = () => {
    if (window.scrollY >= 200) {
      setScrollTop(true);
    } else {
      setScrollTop(false);
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", scrollTopButton);
  }

  return (
    <main>
      <div className="pageSize sm:pt-10 pt-4">
        <Navbar />

        {/*//* Title */}
        <div className="text-[30px] font-medium mt-10 leading-tight">
          Hola soy Carlos Baso un Ing. de Software. <br />
          Bienvenido a mi portafolio
        </div>

        <Skills />

        {/* Partners--------------------------------------------------------------------------------------------------------------------------------------------- */}
        <section className="mt-6 py-4 pb-9 border-t border-b">
          <div className="text-[25px] text-black">
            {/* Titulo */}
            <div className="  font-medium">
              <div>Experiencia</div>
            </div>

            <div className="text-[15px] text-[#808080]">
              <div>Algunas de las empresas con las que he podido trabajar.</div>
            </div>
          </div>
          <Slider
            width="300px"
            duration={40}
            pauseOnHover={false}
            blurBorders={true}
            blurBoderColor={"#fff"}
          >
            <Slider.Slide>
              <div className=" bg-[#f9f9f9] w-[90%] h-[67%] flex mx-auto">
                <div className="hks aspect-square w-[200px] saturate-0 mx-auto"></div>
              </div>
            </Slider.Slide>
            <Slider.Slide>
              <div className=" bg-[#f9f9f9] w-[90%] h-[67%] flex mx-auto">
                <div className="firma aspect-square w-[200px] saturate-0 mx-auto"></div>
              </div>
            </Slider.Slide>
            <Slider.Slide>
              <div className=" bg-[#f9f9f9] w-[90%] h-[67%] flex mx-auto">
                <div className="escritorios aspect-square w-[70px] saturate-0 mx-auto"></div>
              </div>
            </Slider.Slide>
            <Slider.Slide>
              <div className=" bg-[#f9f9f9] w-[90%] h-[67%] flex mx-auto">
                <div className="metas aspect-square w-[80px] saturate-0 mx-auto"></div>
              </div>
            </Slider.Slide>
          </Slider>
        </section>

        {/* Projects container--------------------------------------------------------------------------------------------------------------------------------------------- */}
        <section className="mt-6 py-4 pb-9 border-t border-b">
          {/* Projects */}
          <div className="text-[25px] text-black">
            {/* Titulo */}
            <div className="  font-medium">
              {" "}
              <div>Proyectos</div>
            </div>

            <div className="text-[15px] text-[#808080]">
              <div>Mis trabajos mas recientes.</div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-9 mt-7">
            {projects
              .map((item) => (
                <div
                  key={item.id}
                  className="flex w-full flex-col aspect-square max-h-[325px]"
                >
                  <div
                    className={`${item.image} w-full aspect-square max-h-[325px] border-[1px] border-[#e2e2e2] relative mx-auto`}
                  >
                    {/* Anchor */}
                    <div className="focus w-full h-full relative">
                      <a
                        target="_blank"
                        href={item.url}
                        className="w-full h-full z-50 absolute"
                      ></a>
                    </div>
                    {/* Tag desktop */}
                    <div className="focus-content sm:flex hidden justify-center flex-col gap-0 pl-10 tracking-wide max-w-[350px]">
                      <div className="text-[18px] roboto-light">
                        {item.title}
                      </div>
                      <div className="text-[13px] text-[#b0b0b0]">
                        {item.category}
                      </div>
                    </div>
                  </div>
                  <div className=" grid grid-cols-2 text-sm">
                    <div className="w-full bg-[#101010] text-white flex py-[12px] relative justify-center cursor-pointer border">
                      <div className=" absolute left-5">L</div>
                      <div className="ml-1">Ver demo</div>
                    </div>
                    <div className="w-full bg-[#101010] text-white flex  py-[12px] relative justify-center cursor-pointer border">
                      <div className=" absolute left-5">L</div>
                      <div className="ml-1">Github</div>
                    </div>
                  </div>
                </div>
              ))
              .reverse()}
          </div>
        </section>
      </div>

      {/* Separador entre main y footer--------------------------------------------------------------------------------------------------------------------------------------------- */}
      <section className="bg-[#eeeeee] h-[0.9px] w-full sm:mt-32 mt-20"></section>

      {/* Footer--------------------------------------------------------------------------------------------------------------------------------------------- */}
      <Footer />

      {/* Boton de scroll to top */}
      <AnimatePresence>
        {scrollTop && (
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
    </main>
  );
};

export default App;
