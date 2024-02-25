import Check from "@/assets/Check";
import { motion as m, AnimatePresence } from "framer-motion";

const Menu = ({
  language,
  setLanguage,
  notify_mobile,
  refresh,
  resume,
  isOpen,
  setIsOpen,
}) => {
  return (
    <>
      {/* Menu content----------------------------------------------- */}
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
            className="lg:hidden flex absolute w-full sm:mt-[500px] mt-[400px] bg-[#101010] flex-col text-white uppercase roboto-500 z-[60] sm:text-[12px] text-[12px]"
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
              target="_blank"
              href={resume}
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
                  {language ? <Check /> : null}
                </div>
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
                  {language ? null : <Check />}
                </div>
              </div>
            </div>
          </m.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default Menu;
