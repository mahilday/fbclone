import { useContext } from "react";
import { MainContext } from "../contexts/MainContext";
import { XIcon } from "@heroicons/react/outline";
const Modal = ({ id, title, description }) => {
  const { status, CloseModal, deletePost } = useContext(MainContext);
  return (
    <div className="z-50">
      <div
        className={`modal ${status.modal.modalOpen? 'opacity-100': 'opacity-0 pointer-events-none'}  fixed w-full h-full top-0 left-0 flex items-center justify-center`}
      >
        <div className="modal-overlay absolute w-full h-full bg-gray-600 opacity-40"></div>

        <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">

          {/* <!-- Add margin if you want to see some of the overlay behind the modal--> */}
          <div className="modal-content py-4 text-left px-6">
            {/* <!--Title--> */}
            <div className="flex justify-between items-center pb-3">
              <p className="text-2xl font-bold">{title}</p>
              <div onClick={CloseModal} className="focus:outline-none cursor-pointer">
                <svg
                  className="fill-current text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                </svg>
              </div>
            </div>

            {/* <!--Body--> */}
            <p>{description}</p>

            {/* <!--Footer--> */}
            <div className="flex justify-center pt-2 mt-5 divider">
              <button
                onClick={() => deletePost(id)}
                className=" w-40 cursor-pointer focus:outline-none bg-blue-500 p-2 rounded-full text-white hover:bg-blue-400 hover:text-white mr-3"
              >
                Yes
              </button>
              <button
                onClick={CloseModal}
                className="modal-close focus:outline-none w-40 cursor-pointer border-2 border-blue-500 bg-transparent p-2 rounded-full text-blue-500 hover:border-blue-400 hover:bg-blue-400 hover:text-white"
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
