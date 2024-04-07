import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function Search({ isOpen, setIsOpen }) {
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="">
        <button type="button" onClick={openModal} className="">
          <i className="fa-solid fa-magnifying-glass text-xl"></i>
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0">
            <div className="flex pt-10 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full transform overflow-hidden bg-white p-6 flex items-center justify-center shadow-xl">
                  <div className="flex items-center px-10 gap-6">
                    <div className="border-2 border-gray-600 p-2 flex items-center justify-between min-w-[308px] lg:w-[740px]">
                      <input
                        className="outline-none w-full"
                        placeholder="Search"
                        type="text"
                      />
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <button type="button" className="" onClick={closeModal}>
                      <i className="fa-solid fa-xmark text-[24px]"></i>
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
