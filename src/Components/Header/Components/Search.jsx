import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { data } from "../../../Datas/data";
import { Link } from "react-router-dom";

export default function Search({ isOpen, setIsOpen }) {
  const [value, setValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const searchData = data.filter((item) =>
    item.title.toLowerCase().includes(value.toLowerCase())
  );

  function closeModal() {
    setIsOpen(false);
  }

  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  function openModal() {
    setIsOpen(true);
  }

  function handleInputChange(e) {
    const inputValue = e.target.value;
    setValue(inputValue);
    setSearchResults(searchData);
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
                  <div className="">
                    <div className="flex items-center px-10 gap-6">
                      <div className="border-2 border-gray-600 p-2 flex items-center justify-between min-w-[308px] lg:w-[740px]">
                        <input
                          className="outline-none w-full bg-transparent"
                          placeholder="Search"
                          type="text"
                          value={value}
                          onChange={handleInputChange}
                        />
                        <i className="fa-solid fa-magnifying-glass"></i>
                      </div>
                      <button type="button" className="" onClick={closeModal}>
                        <i className="fa-solid fa-xmark text-[24px]"></i>
                      </button>
                    </div>
                    {searchResults.length ? (
                      <div className="w-full flex items-center justify-center">
                        <div className="bg-white w-[350px] text-start border-b pt-5 p-3 lg:w-[740px] h-[300px] overflow-y-scroll">
                          <h1 className="text-sm text-gray-500">Products</h1>
                          <ul className="flex flex-col">
                            {searchResults.map((item) => (
                              <button onClick={handleClose}>
                                <Link to={`/product/${item.id}`} key={item.id}>
                                  <li className="flex items-center gap-3 p-2 hover:bg-gray-200">
                                    <img
                                      src={item.img}
                                      alt="product"
                                      className="w-[50px] object-contain"
                                    />
                                    <h2 className="text-sm hover:underline">
                                      {item.title}
                                    </h2>
                                  </li>
                                </Link>
                              </button>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
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
