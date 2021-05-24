import Image from "next/image";
import { ChatAltIcon, ShareIcon, ThumbUpIcon, TrashIcon } from "@heroicons/react/outline";
import {useContext} from 'react'
import {MainContext} from '../contexts/MainContext'

const Post = ({ name,id, message, email, image, postImage, timestamp }) => {
    const {deletePost} = useContext(MainContext)
  return (
    <div className="flex flex-col">
      <div className="p-5 mt-5 bg-white rounded-t-2xl shadow-sm">
        <div className="flex justify-between items-center space-x-2">
            <div className="flex items-center space-x-2">
          <img
            className="rounded-full"
            width={40}
            height={40}
            src={image}
            alt="profpic"
          />
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-xs text-gray-400">
              {timestamp
                ? new Date(timestamp?.toDate()).toLocaleString()
                : "Loading..."}
            </p>
          </div>
          </div>
          <div onClick={()=>{deletePost(id)}} className="bg-gray-200 rounded-full p-2 hover:bg-gray-300 cursor-pointer"><TrashIcon className="h-4 text-red-500" /></div>
        </div>
        <p className="pt-4">{message}</p>
      </div>
      {postImage && (
        <div className="relative h-64 md:h-96 bg-white">
          <Image src={postImage} objectFit="cover" layout="fill" />
        </div>
      )}
      <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
        <div className="inputIcon rounded-none rounded-bl-2xl">
          <ThumbUpIcon className="h-4" />
          <p className="text-xs sm:text-base">Like</p>
        </div>
        <div className="inputIcon rounded-none">
          <ChatAltIcon className="h-4" />
          <p className="text-xs sm:text-base">Comment</p>
        </div>
        <div className="inputIcon rounded-none rounded-br-2xl">
          <ShareIcon className="h-4" />
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
