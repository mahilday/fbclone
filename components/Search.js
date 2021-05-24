import { ArrowLeftIcon } from "@heroicons/react/outline";
const Search = ({setSearchOpen}) => {
  return (
    <div className="flex w-80 space-x-2 items-center">
      <ArrowLeftIcon onClick={()=> setSearchOpen(false)} className="h-6 cursor-pointer animate-pulse text-gray-600" />
      <div className="flex ml-2 flex-grow items-center rounded-full bg-gray-100 p-2">
        <input
          className="flex-grow md:inline-flex ml-2 items-center bg-transparent outline-none flex-shrink placeholder-gray-500"
          type="text"
          placeholder="Search facebook"
          autoFocus
        />
      </div>
    </div>
  );
};

export default Search;
