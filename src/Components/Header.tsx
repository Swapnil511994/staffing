import { useState } from "react";
import Logo from "../assets/logo-white.png";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { Dialog, DialogPanel } from "@headlessui/react";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };

  return (
    <div
      id="header"
      className="sticky top-0 z-10 shadow-headerShadow m-0 pb-5 md:pb-10 bg-black rounded-none"
    >
      <div className="flex justify-between  lg:hidden xl:hidden w-full p-2 rounded-none">
        <a href="#home">
          <img src={Logo} alt="Logo" width="150" />
        </a>

        <button
          type="button"
          onClick={open}
          className="text-greyOpaque hover:text-gray mr-2"
        >
          <Bars3Icon className="w-8 h-8 text-white" />
        </button>
      </div>

      <div className="hidden md:flex justify-around text-[18px] font-semibold items-center pt-2">
        <a
          href="#about"
          className="text-white hover:text-gray-400 text-xl text-[32px] mt-5"
        >
          About
        </a>
        <a
          href="#services"
          className="text-white hover:text-gray-400 text-xl text-[32px] mt-5"
        >
          Services
        </a>
        <a
          href="#work"
          className="text-white hover:text-gray-400 text-xl text-[32px] mt-5"
        >
          Work
        </a>
        <a
          href="#home"
          className="text-white hover:text-gray-400 text-xl text-[32px] mt-5"
        >
          <img src={Logo} alt="Logo" width="150" />
        </a>

        <a
          href="#think"
          className="text-white hover:text-gray-400 text-xl text-[32px] mt-5"
        >
          Think
        </a>
        <a
          href="#culture"
          className="text-white hover:text-gray-400 text-xl text-[32px] mt-5"
        >
          Culture
        </a>
        <a
          href="#contact"
          className="text-white hover:text-gray-400 text-xl text-[32px] mt-5"
        >
          Get In Touch
        </a>
      </div>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none h-full p-0 rounded-none	"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen h-screen p-0 rounded-none	">
          <div className="flex items-center justify-center p-0  w-screen h-screen rounded-none	">
            <DialogPanel
              transition
              className="w-full max-w-md 
               bg-white/5 
               rounded-none	
               backdrop-blur-2xl 
               duration-1000
               ease-out 
               data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 "
            >
              <div className="flex h-screen w-screen flex-col ">
                <div className="flex justify-between lg:hidden xl:hidden w-full p-2 shadow-headerPopupShadow pb-5 md:pb-10">
                  <a href="#home">
                    <img src={Logo} alt="Logo" width="150" />
                  </a>

                  <button
                    type="button"
                    onClick={close}
                    className="text-greyOpaque hover:text-gray mr-2"
                  >
                    <XMarkIcon className="w-8 h-8 text-white" />
                  </button>
                </div>
                <div className="flex flex-col items-start p-3 ">
                  <a
                    href="#about"
                    className="text-white hover:text-gray-400 text-xl text-[32px] mt-2"
                  >
                    About
                  </a>
                  <a
                    href="#services"
                    className="text-white hover:text-gray-400 text-xl text-[32px] mt-5"
                  >
                    Services
                  </a>
                  <a
                    href="#work"
                    className="text-white hover:text-gray-400 text-xl text-[32px] mt-5"
                  >
                    Work
                  </a>
                  <a
                    href="#think"
                    className="text-white hover:text-gray-400 text-xl text-[32px] mt-5"
                  >
                    Think
                  </a>
                  <a
                    href="#culture"
                    className="text-white hover:text-gray-400 text-xl text-[32px] mt-5"
                  >
                    Culture
                  </a>
                  <a
                    href="#contact"
                    className="text-white hover:text-gray-400 text-xl text-[32px] mt-5"
                  >
                    Get In Touch
                  </a>
                </div>
                <div className="flex items-start mr-2"></div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Header;
