import { useState } from "react";
import Logo from "../assets/logo-white.png";
import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="flex justify-between  lg:hidden xl:hidden w-full p-2">
        <a href="/">
          <img src={Logo} alt="Logo" width="150" />
        </a>

        <button
          type="button"
          onClick={open}
          className="text-greyOpaque hover:text-gray mr-2"
        >
          <Bars3BottomLeftIcon className="w-8 h-8 text-white" />
        </button>
      </div>

      <div className="hidden md:flex justify-around text-[18px] font-semibold items-center">
        <a href="/" className="text-greyOpaque hover:text-gray">
          About
        </a>
        <a href="/" className="text-greyOpaque hover:text-gray">
          Services
        </a>
        <a href="/" className="text-greyOpaque hover:text-gray">
          Work
        </a>

        <a href="/">
          <img src={Logo} width="150"></img>
        </a>

        <a href="/" className="text-greyOpaque hover:text-gray">
          Think
        </a>
        <a href="/" className="text-greyOpaque hover:text-gray">
          Culture
        </a>
        <a href="/" className="text-greyOpaque hover:text-gray">
          Get in touch
        </a>
      </div>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none h-full p-0"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen h-screen p-0">
          <div className="flex items-center justify-center p-0  w-screen h-screen">
            <DialogPanel
              transition
              className="w-full max-w-md 
              rounded-xl
               bg-white/5 
               backdrop-blur-2xl 
               duration-1000
               ease-out 
               data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <div className="flex h-screen w-screen flex-col">
                <div className="flex justify-between lg:hidden xl:hidden w-full p-2">
                  <a href="/">
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
                    href="/"
                    className="text-white hover:text-gray-400 text-xl text-[32px] mt-5"
                  >
                    About
                  </a>
                  <a
                    href="/"
                    className="text-white hover:text-gray-400 text-xl text-[32px] mt-5"
                  >
                    Services
                  </a>
                  <a
                    href="/"
                    className="text-white hover:text-gray-400 text-xl text-[32px] mt-5"
                  >
                    Work
                  </a>
                  <a
                    href="/"
                    className="text-white hover:text-gray-400 text-xl text-[32px] mt-5"
                  >
                    Think
                  </a>
                  <a
                    href="/"
                    className="text-white hover:text-gray-400 text-xl text-[32px] mt-5"
                  >
                    Culture
                  </a>
                  <a
                    href="/"
                    className="text-white hover:text-gray-400 text-xl text-[32px] mt-5"
                  >
                    Get in touch
                  </a>
                </div>
                <div className="flex items-start mr-2"></div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default Header;
