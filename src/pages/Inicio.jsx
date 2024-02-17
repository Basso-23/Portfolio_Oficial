import React, { useState, useEffect, useRef, Component } from "react";
import Head from "next/head";
import { motion as m, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import { projects_en } from "@/components/projects_en";
import { projects_es } from "@/components/projects_es";
import Tilt from "react-parallax-tilt";
import { RxExternalLink } from "react-icons/rx";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { HiArrowDown } from "react-icons/hi2";
import "react-image-gallery/styles/css/image-gallery.css";
import Footer from "@/components/Footer";
import { Link, animateScroll as scroll } from "react-scroll";

const Inicio = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [language, setLanguage] = useState(true);
  const [projects, setProjects] = useState(projects_en);
  const [filtered, setFiltered] = useState(projects);

  useEffect(() => {
    if (language) {
      setProjects(projects_es);
    } else {
      setProjects(projects_en);
    }
  }, [language]);

  const indexLast = projects_en.length;

  useEffect(() => {
    var filtered = projects.filter(function (atribute) {
      return atribute.id == indexLast;
    });
    setFiltered(filtered);
  }, []);

  const filterProject = (item) => {
    var filtered = projects.filter(function (atribute) {
      return atribute.id == item;
    });
    setFiltered(filtered);
  };

  return (
    <div className="min-h-screen w-full relative scrollbar2">
      <Head>
        <title>
          {language ? (
            <>Carlos Baso | Portafolio</>
          ) : (
            <>Carlos Baso | Portfolio</>
          )}
        </title>
        <meta
          name="description"
          content="  Portafolio | Carlos Baso Ing. de Software, JavaScript, React JS, Next JS. ¡Echa un vistazo a mis proyectos!"
        />
      </Head>

      <main className=" pb-32">
        {/* HEADER----------------------------------------------- */}
        <Header language={language} isOpen={isOpen} />
        <div name="project" className="mb-0"></div>
        {/*MODAL----------------------------------------------- */}
        <AnimatePresence>
          {isOpen ? (
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.2,
                delay: 0,
              }}
              exit={{ opacity: 0 }}
              className="w-full z-50 bg-[#161616] relative mt-0 "
            >
              {filtered.map((item, index) => (
                <div key={item.id}>
                  <div className="sm:mt-8 mt-10 1xl:flex 1xl:flex-row flex flex-col-reverse xl:px-20 sm:px-5 px-3 gap-24 relative w-full">
                    <div className="animate-fade-right animate-delay-200 2xl:w-[50%] xl:mt-0 -mt-20 w-full flex flex-col  text-lg 2xl:text-[0.85vw] xl:text-start text-center">
                      <div className="border-[#3b3a38] border-b-[1px] flex flex-col py-4">
                        <h1 className="  font-bold">
                          {language ? <>Proyecto</> : <>Project</>}
                        </h1>
                        <p className="text-[#99958D]">{item.title}</p>
                      </div>
                      <div className="border-[#3b3a38] border-b-[1px] flex flex-col py-5">
                        <h1 className="  font-bold">
                          {language ? <>Categoría</> : <>Category</>}
                        </h1>
                        <p className="text-[#99958D]">{item.category}</p>
                      </div>
                      <div className="border-[#3b3a38] border-b-[1px] flex flex-col py-5">
                        <h1 className="  font-bold">
                          {language ? (
                            <>Fecha de creación</>
                          ) : (
                            <>Date of creation</>
                          )}
                        </h1>
                        <p className="text-[#99958D]">{item.date}</p>
                      </div>
                      <div className="border-[#3b3a38] border-b-[1px] flex flex-col py-5">
                        <h1 className="  font-bold">Info</h1>
                        <p className="text-[#99958D] ">{item.info}</p>
                      </div>
                      <div className=" py-6 flex">
                        <a
                          href={item.url}
                          target="_blank"
                          className="text-[18px] font-medium flex gap-1 text-black bg-[#FFF7E9] border-[#FFF7E9] px-20 py-3 xl:mx-0 mx-auto mt-1 hover:bg-transparent border-[1.5px] hover:text-[#FFF7E9] transition-all sm:cursor-pointer active:scale-[0.95]"
                        >
                          <div className=" my-auto 2xl:text-[0.85vw]">
                            {language ? <>Ver página</> : <>Live demo</>}
                          </div>
                          <div className=" my-auto">
                            <RxExternalLink />
                          </div>
                        </a>
                      </div>
                      <div className=" flex justify-between pt-8">
                        {indexLast != item.id ? (
                          <Link
                            to="project"
                            smooth={true}
                            duration={700}
                            onClick={() => {
                              filterProject(item.id + 1);
                            }}
                            className="flex items-center gap-2 border-b cursor-pointer 2xl:text-[0.85vw]"
                          >
                            <div className=" rotate-90">
                              <HiArrowDown />
                            </div>

                            {language ? (
                              <div>Anterior</div>
                            ) : (
                              <div>Previous</div>
                            )}
                          </Link>
                        ) : (
                          <div></div>
                        )}
                        {item.id != 1 ? (
                          <Link
                            to="project"
                            smooth={true}
                            duration={700}
                            onClick={() => {
                              filterProject(item.id - 1);
                            }}
                            className="flex items-center gap-2 border-b cursor-pointer 2xl:text-[0.85vw]"
                          >
                            {language ? <div>Siguiente</div> : <div>Next</div>}
                            <div className=" -rotate-90">
                              <HiArrowDown />
                            </div>
                          </Link>
                        ) : (
                          <div></div>
                        )}
                      </div>
                    </div>

                    <div className="2xl:w-[50%] w-full relative">
                      <div
                        className={`relative w-full border-[#3b3a38] border-[1px] animate-fade-down animate-delay-500 ${item.project_bg} md:min-h-[575px] min-h-[350px]`}
                      >
                        <div className="1xl:flex hidden absolute w-[4.2vw] h-[4.2vw] min-h-[70px]  min-w-[70px] esquina -top-[2.5vw] -left-[3.2vw] z-50 flip"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </m.div>
          ) : null}
        </AnimatePresence>

        {/* CONTENT----------------------------------------------- */}
        <div className="xl:px-20 sm:px-5 px-3 ">
          {/* TITLE----------------------------------------------- */}
          <section
            name="work"
            className="mt-20 text-[#99958D] text-xl 2xl:text-[1vw] mb-10 md:text-start text-center"
          >
            {language ? (
              <div className="relative">Últimos proyectos </div>
            ) : (
              <div>Latest projects</div>
            )}
          </section>

          {/* PROJECTS CONTAINER----------------------------------------------- */}
          <section className=" hidden sm:grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 sm:gap-[3.3vw] gap-8">
            {projects
              .map((item) => (
                <Tilt
                  scale={1.04}
                  transitionSpeed={2500}
                  tiltMaxAngleX={1.1}
                  tiltMaxAngleY={1.1}
                  className=" cursor-pointer"
                  key={item.id}
                >
                  <Link
                    to="project"
                    onClick={() => {
                      setIsOpen(true);
                      filterProject(item.id);
                    }}
                    className={`  containerCard animate-fade-left ${item.delay}  flex flex-col  w-full border-[#3b3a38] border-[1px] lg:pb-[4.7vw] pb-20 lg:max-w-[100vw] max-w-[450px] h-[40vw] lg:min-h-[525px] sm:min-h-[650px] min-h-[400px]  mx-auto relative overflow-hidden`}
                  >
                    {/* PROJECT BG----------------------------------------------- */}
                    <div
                      className={`${item.card_bg}  w-full h-full absolute z-30 transition-all`}
                    >
                      <div className="hidden absolute z-10 bottom-0 top-0 w-full h-full bg-gradient-to-b from-transparent via-black/10 to-black/50 transition-all"></div>
                    </div>
                  </Link>
                </Tilt>
              ))
              .reverse()}
          </section>
          {/* PROJECTS CONTAINER MOBILE----------------------------------------------- */}
          <section className=" sm:hidden grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 sm:gap-[3.3vw] gap-8">
            {projects
              .map((item) => (
                <div className=" cursor-pointer" key={item.id}>
                  <Link
                    to="project"
                    onClick={() => {
                      setIsOpen(true);
                      filterProject(item.id);
                    }}
                    className={`  containerCard animate-fade-left ${item.delay}  flex flex-col  w-full border-[#3b3a38] border-[1px] lg:pb-[4.7vw] pb-20 lg:max-w-[100vw] max-w-[450px] h-[40vw] lg:min-h-[525px] sm:min-h-[650px] min-h-[400px]  mx-auto relative overflow-hidden`}
                  >
                    {/* PROJECT BG----------------------------------------------- */}
                    <div
                      className={`${item.card_bg}  w-full h-full absolute z-30 transition-all`}
                    >
                      <div className="hidden absolute z-10 bottom-0 top-0 w-full h-full bg-gradient-to-b from-transparent via-black/10 to-black/50 transition-all"></div>
                    </div>
                  </Link>
                </div>
              ))
              .reverse()}
          </section>
        </div>
        <Footer
          language={language}
          setLanguage={setLanguage}
          setIsOpen={setIsOpen}
        />
      </main>
    </div>
  );
};

export default Inicio;
