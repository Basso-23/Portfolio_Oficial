import React, { useState, useEffect } from "react";
import Head from "next/head";
import { motion as m, AnimatePresence } from "framer-motion";
import { projects_en } from "@/json/projects_en";
import { projects_es } from "@/json/projects_es";
import { Link, animateScroll as scroll } from "react-scroll";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import copy from "copy-text-to-clipboard";
import { Slant as Hamburger } from "hamburger-react";
import { IoIosArrowUp } from "react-icons/io";
import Navbar from "@/components/Navbar";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import Slider from "react-infinite-logo-slider";
import Menu_mobile from "@/components/Menu_mobile";

const Inicio = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState(true);
  const [filtered, setFiltered] = useState(projects_es);
  const [copyText, setCopyText] = useState("Correo electrónico copiado");
  const [pageTitle, setPageTitle] = useState("Portafolio - Carlos Baso");
  const [resume, setResume] = useState(
    "https://drive.google.com/file/d/1xK_8f4Jdlcjvw8a87wCpgfKEqfCBmR3O/view"
  );

  {
    /* Notificacion correo copiado */
  }
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

  {
    /* Notificacion correo copiado (mobile */
  }
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

  {
    /* Variables de cambio de idioma */
  }
  useEffect(() => {
    if (language) {
      setFiltered(projects_es);
      setCopyText("Correo electrónico copiado");
      setPageTitle("Portafolio - Carlos Baso");
      setResume(
        "https://drive.google.com/file/d/1xK_8f4Jdlcjvw8a87wCpgfKEqfCBmR3O/view"
      );
    } else {
      setFiltered(projects_en);
      setCopyText("Email copied");
      setPageTitle("Portfolio - Carlos Baso");
      setResume(
        "https://drive.google.com/file/d/1O2gmqslUaGKqcvuj-d_cBgdJP1XEpCw4/view"
      );
    }
  }, [language]);

  {
    /* Scroll inicio de la pagina */
  }
  const refresh = () => {
    window.scrollTo(0, 0);
  };

  {
    /* Para el boton de scroll to top de abajo a la derecha */
  }
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
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="Portafolio - Carlos Baso Ing. de Software, JavaScript, React JS, Next JS. ¡Echa un vistazo a mis proyectos!"
        />
      </Head>

      <main className="min-h-screen  max-w-[1300px] px-3 sm:px-[26px] mx-auto pt-10 sm:pt-[52px]">
        {/* Navbar container--------------------------------------------------------------------------------------------------------------------------------------------- */}
        <section className=" flex justify-between items-center relative ">
          <Navbar
            language={language}
            setLanguage={setLanguage}
            notify={notify}
            refresh={refresh}
            resume={resume}
          />

          {/* Menu icon */}
          <div className="lg:hidden flex">
            <Hamburger toggled={isOpen} toggle={setIsOpen} size={35} />
          </div>
          {/* Menu desktop */}
          <Menu
            language={language}
            setLanguage={setLanguage}
            notify_mobile={notify_mobile}
            refresh={refresh}
            resume={resume}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </section>

        {/* Title container--------------------------------------------------------------------------------------------------------------------------------------------- */}
        <section>
          {/* Container de la notificacion de correo copiado */}
          <div className="text-[15px]">
            <ToastContainer />
          </div>
          {/* Title desktop*/}
          <div className=" sm:flex hidden roboto-500 lg:max-w-[1000px] max-w-[600px] text-[27px] sm:text-[36px] lg:text-[43px] mt-8 sm:mt-[60px] md:leading-[60px] sm:leading-[50px] leading-[40px]">
            {language ? (
              <div>
                Hola soy Carlos Baso un Ing. de Software. Bienvenido a mi
                portafolio de proyectos.
              </div>
            ) : (
              <div>
                Hello I&apos;m Carlos Baso a Software Engineer. Welcome to my
                project portfolio.
              </div>
            )}
          </div>
          {/* Title mobile */}
          {isOpen ? null : (
            <div className="sm:hidden flex roboto-500 lg:max-w-[1000px] max-w-[600px] text-[27px] sm:text-[36px] lg:text-[43px] mt-8 sm:mt-[60px] md:leading-[60px] sm:leading-[50px] leading-[40px]">
              {language ? (
                <div>
                  Hola soy Carlos Baso un Ing. de Software. Bienvenido a mi
                  portafolio de proyectos.
                </div>
              ) : (
                <div>
                  Hello I&apos;m Carlos Baso a Software Engineer. Welcome to my
                  project portfolio.
                </div>
              )}
            </div>
          )}
        </section>
        {/* Menu mobile */}
        <Menu_mobile
          language={language}
          setLanguage={setLanguage}
          notify_mobile={notify_mobile}
          refresh={refresh}
          resume={resume}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />

        {/* Tipos de trabajos--------------------------------------------------------------------------------------------------------------------------------------------- */}
        <section>
          <div className=" hidden md:flex mt-10 sm:mt-[50px] gap-4 text-[17px] sm:text-[15px] sm:justify-start justify-center text-[#808080]">
            <div>JavaScript</div>
            <div>/</div>
            <div>React JS</div>
            <div>/</div>
            <div>Next JS</div>
            <div>/</div>
            <div>Tailwind CSS</div>
            <div>/</div>
            <div>Astro</div>
            <div>/</div>
            <div>Git</div>
          </div>
        </section>

        {/* Projects container--------------------------------------------------------------------------------------------------------------------------------------------- */}
        <section>
          {/* Projects */}

          <div
            className={
              isOpen
                ? `grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-9 md:mt-[35px] sm:mt-[135px] mt-[20px] transition-all duration-500`
                : `grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-9 md:mt-[35px] sm:mt-[25px] mt-[20px] transition-all duration-500`
            }
          >
            {filtered
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
                  {/* Tag mobile */}
                  <div className=" sm: sm:hidden bg-[#101010] text-white text-center py-2 border-[1px] border-white">
                    <div className="text-[18px] roboto-light">{item.title}</div>
                    <div className="text-[13px] text-[#b0b0b0]">
                      {item.category}
                    </div>
                  </div>
                </div>
              ))
              .reverse()}
          </div>
        </section>
        {/* Partners--------------------------------------------------------------------------------------------------------------------------------------------- */}
        <section className="mt-12 md:block hidden text-center">
          <div className="flex flex-col -mb-4   ">
            <div className=" w-[250px] mx-auto  h-[1px] bg-[#e0e0e0] mb-8 mt-0"></div>

            <h1 className="text-[35px]  text-black roboto-500 ">
              {/* Titulo */}
              {language ? <div>Experiencia</div> : <div>Experience</div>}
            </h1>
            <h2 className="max-w-[500px] mx-auto mt-2 text-[#808080] mb-10 text-[15px]">
              {/* Subtitulo */}
              {language ? (
                <div>
                  Algunas de las empresas con las que he podido trabajar,
                  siempre comprometido a proporcionar resultados del más alto
                  nivel.
                </div>
              ) : (
                <div>
                  Some of the companies I have been able to work with, always
                  committed to providing top-level results.
                </div>
              )}
            </h2>
          </div>
          <Slider
            width="300px"
            duration={40}
            pauseOnHover={false}
            blurBorders={true}
            blurBoderColor={"#fff"}
          >
            <Slider.Slide>
              <div className=" bg-[#f3f3f3] w-[90%] h-[67%] flex mx-auto">
                <div className="hks aspect-square w-[200px] saturate-0 mx-auto"></div>
              </div>
            </Slider.Slide>
            <Slider.Slide>
              <div className=" bg-[#f3f3f3] w-[90%] h-[67%] flex mx-auto">
                <div className="firma aspect-square w-[200px] saturate-0 mx-auto"></div>
              </div>
            </Slider.Slide>
            <Slider.Slide>
              <div className=" bg-[#f3f3f3] w-[90%] h-[67%] flex mx-auto">
                <div className="escritorios aspect-square w-[60px] saturate-0 mx-auto"></div>
              </div>
            </Slider.Slide>
          </Slider>
        </section>
      </main>

      {/* Separador entre main y footer--------------------------------------------------------------------------------------------------------------------------------------------- */}
      <section className="bg-[#e0e0e0] h-[0.9px] w-full sm:mt-32 mt-20"></section>

      {/* Footer--------------------------------------------------------------------------------------------------------------------------------------------- */}
      <Footer
        language={language}
        setLanguage={setLanguage}
        notify={notify}
        refresh={refresh}
        resume={resume}
      />

      {/* Boton de scroll to top */}
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
    </div>
  );
};

export default Inicio;
