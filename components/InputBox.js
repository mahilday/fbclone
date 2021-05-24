import Image from "next/image";
import { useSession } from "next-auth/client";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { useContext } from "react";
import { db } from "../firebase";
import firebase from "firebase";
import { MainContext } from "../contexts/MainContext";

const InputBox = () => {
  const [session, loading] = useSession();

  const { sendPost, refs, addImageToPost, removeImage, status } =
    useContext(MainContext);

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6 ">
      <div className="flex space-x-4 p-4 items-center">
        <Image
          src={session.user.image}
          className="rounded-full cursor-pointer"
          width="40"
          height="40"
          layout="fixed"
        />
        <form className="flex flex-1" onSubmit={sendPost}>
          <input
            type="text"
            ref={refs.inputRef}
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
            placeholder={`What's on your mind, ${session.user.name}?`}
          />
          <button hidden type="submit">
            Submit
          </button>
        </form>
        {status.image.imageToPost && (
          <div
            onClick={removeImage}
            className="flex flex-col filter hover:brightness-110 
                transition duration-150 transform hover:scale-105 cursor-pointer"
          >
            <img
              className="h-10 object-contain"
              src={status.image.imageToPost}
              alt=""
            />
            <p className="text-xs text-center text-red-500">Remove</p>
          </div>
        )}
      </div>
      <div className="flex flex-grow justify-evenly items-center p-4">
        <div className="inputIcon">
          <VideoCameraIcon className="h-6 text-red-500 mr-1" />
          <p className="hidden sm:flex dtext-xs sm:text-sm xl:text-base">
            Live Video
          </p>
        </div>
        <div
          onClick={() => {
            refs.filepickerRef.current.click();
          }}
          className="inputIcon"
        >
          <CameraIcon className="h-6 text-green-500 mr-1" />
          <p className=" hidden sm:flex  text-xs sm:text-sm xl:text-base">
            Photo/Video
          </p>
          <input
            hidden
            type="file"
            ref={refs.filepickerRef}
            onChange={addImageToPost}
          />
        </div>
        <div className="inputIcon">
          <EmojiHappyIcon className="h-6 text-yellow-300 mr-1" />
          <p className="hidden sm:flex text-xs sm:text-sm xl:text-base">
            Feeling/Activity
          </p>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
