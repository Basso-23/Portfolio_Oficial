import Check from "@/assets/Icons/Check";
import { motion as m, AnimatePresence } from "framer-motion";

const Menu_mobile = ({
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

      {isOpen ? (
        <div className="sm:hidden flex w-full mt-[20px] bg-[#101010] flex-col text-white uppercase roboto-500 sm:text-[12px] text-[12px] border-l-[1px] border-r-[1px] border-white">
          <a
            onClick={() => {
              notify_mobile();
              setIsOpen(false);
            }}
            className="cursor-pointer px-8 sm:py-4 py-4 border-b-[1px] border-[#333333] hover:text-[#7b7b7b] transition-all"
          >
            {language ? <div>Correo electrónico</div> : <div>Email</div>}
          </a>
          <a
            target="_blank"
            href="https://github.com/Basso-23"
            onClick={() => {
              setIsOpen(false);
            }}
            className="cursor-pointer px-8 sm:py-4 py-4 border-b-[1px] border-[#333333] hover:text-[#7b7b7b] transition-all"
          >
            Github
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/carlosbaso/"
            onClick={() => {
              setIsOpen(false);
            }}
            className="cursor-pointer px-8 sm:py-4 py-4 border-b-[1px] border-[#333333] hover:text-[#7b7b7b] transition-all"
          >
            Linkedin
          </a>
          <a
            target="_blank"
            href={resume}
            onClick={() => {
              setIsOpen(false);
            }}
            className="cursor-pointer px-8 sm:py-4 py-4 border-b-[1px] border-[#333333] hover:text-[#7b7b7b] transition-all"
          >
            {language ? <div>Currículum</div> : <div>Resume</div>}
          </a>
          <div
            onClick={() => {
              setIsOpen(false);
              setLanguage(true);
              refresh();
            }}
            className="cursor-pointer px-8 sm:py-4 py-4 border-b-[1px] border-[#333333] hover:text-[#7b7b7b] transition-all flex "
          >
            <div className="flex relative">
              Español{" "}
              <div className=" sm:-mt-[4px] -mt-[3px]  absolute -right-6 ">
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
            className="cursor-pointer px-8 sm:py-4 py-4 border-b-[1px] border-[#333333] hover:text-[#7b7b7b] transition-all flex"
          >
            <div className="flex relative">
              English{" "}
              <div className=" sm:-mt-[4px] -mt-[3px]  absolute -right-6 ">
                {language ? null : <Check />}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Menu_mobile;
