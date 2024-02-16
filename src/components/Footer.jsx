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
          className="font-medium flex md:justify-end justify-center w-full fixed bottom-0 gap-10 glass px-10 py-4 border-[#3b3a38] border-t-[1px] text-sm z-50 tracking-wide"
        >
          <div className=" transition-all cursor-pointer hover:underline hover:underline-offset-2 hover:text-white">
            {language ? <div>Contacto</div> : <div>Contact</div>}
          </div>
          <div
            onClick={() => {
              setLanguage(true);
              setIsOpen(false);
              window.scrollTo(0, 0);
            }}
            className={
              language
                ? " underline underline-offset-2 transition-all pointer-events-none"
                : "text-[#7e7e7e] transition-all cursor-pointer hover:underline hover:underline-offset-2 hover:text-white "
            }
          >
            Español
          </div>
          <div
            onClick={() => {
              setLanguage(false);
              setIsOpen(false);
              window.scrollTo(0, 0);
            }}
            className={
              language
                ? "text-[#7e7e7e] transition-all cursor-pointer hover:underline hover:underline-offset-2 hover:text-white"
                : " underline underline-offset-2 transition-all pointer-events-none"
            }
          >
            English
          </div>

          <div className=" absolute left-10 fixedCenterY md:flex hidden font-normal">
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
