import React, { useState, useEffect, useRef } from "react";
import { motion as m, AnimatePresence } from "framer-motion";

const Footer = ({ language, setLanguage, setIsOpen }) => {
  const [setscroll, setScroll] = useState(false);
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
    <AnimatePresence>
      {setscroll && (
        <m.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{
            duration: 0.35,
          }}
          className="text-[#858585] items-center flex md:justify-end justify-center w-full fixed bottom-0 gap-12 sm:gap-8 glass px-10 py-4 border-[#3b3a38] border-t-[1px] text-sm 2xl:text-[0.7vw] z-50 tracking-wide"
        >
          <div
            onClick={() => {
              setLanguage(true);

              window.scrollTo(0, 0);
            }}
            className={
              language
                ? "text-white transition-all pointer-events-none"
                : "transition-all cursor-pointer"
            }
          >
            Español
          </div>

          <div
            onClick={() => {
              setLanguage(false);

              window.scrollTo(0, 0);
            }}
            className={
              language
                ? "  transition-all cursor-pointer"
                : "  text-white transition-all pointer-events-none "
            }
          >
            English
          </div>
          <a
            href={"https://beacons.ai/carlosbaso"}
            target="_blank"
            className=" transition-all cursor-pointer "
          >
            {language ? <div>Contacto</div> : <div>Contact</div>}
          </a>

          <div className=" absolute left-10 fixedCenterY md:flex hidden font-normal 2xl:text-[0.7vw]">
            {language ? (
              <div>©2024 CarlosBaso. Todos los derechos reservados.</div>
            ) : (
              <div>©2024 CarlosBaso. All rights reserved.</div>
            )}
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
};

export default Footer;
