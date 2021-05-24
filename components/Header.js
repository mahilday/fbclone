import { useContext } from "react";
import { HeaderContext } from "../contexts/HeaderContext";
import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";
import { signOut, useSession } from "next-auth/client";

const Header = () => {
  const { status } = useContext(HeaderContext);
  const [session] = useSession()
  return (
    <div className="sticky top-0 bg-white z-50 flex items-center p-2 lg:px-5 shadow-md">
      {/* header left */}
      <div className="flex items-center">
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none flex-shrink placeholder-gray-500"
            type="text"
            placeholder="Search facebook"
          />
        </div>
      </div>
      {/* header center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon stats={status} active Icon={HomeIcon} linkto="/" />
          <HeaderIcon stats={status} Icon={FlagIcon} linkto="/nationality" />
          <HeaderIcon stats={status} Icon={PlayIcon} linkto="/play" />
          <HeaderIcon stats={status} Icon={ShoppingCartIcon} linkto="/buy" />
          <HeaderIcon stats={status} Icon={UserGroupIcon} linkto="/groups" />
        </div>
      </div>
      {/* header right */}
      <div className="flex sm:space-x-2 justify-end items-center ">
        <Image
          onClick={signOut}
          src={session.user.image}
          className="rounded-full cursor-pointer"
          width="40"
          height="40"
          layout="fixed"
        />
        <p className="hidden lg:inline-flex whitespace-nowrap pr-3 font-semibold">
          {session.user.name}
        </p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
};

export default Header;
