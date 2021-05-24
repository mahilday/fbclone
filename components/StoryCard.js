import Image from "next/image";
const StoryCard = ({ name, src, profile }) => {
  return (
    <div
      className="relative h-14 w-14 md:h-20 md:w-20 lg:w-32 lg:h-56 cursor-pointer overflow-x p-3 
            transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse"
    >
      <div className="absolute h-10 w-10 ring-4 ring-blue-500 p-5 opacity-0 lg:opacity-100 rounded-full z-20 top-3">
        <Image
        className="rounded-full"
        src={profile}
        objectFit="cover"
        layout="fill"
      />
      </div>
      <Image
        className="object-cover filter brightness-75 rounded-full lg:rounded-3xl"
        src={src}
        layout="fill"
      />
      <p className=" absolute opacity-0 lg:opacity-100 bottom-4 w-5/6 text-white text-sm font-bold truncate">
        {name}
      </p>
    </div>
  );
};

export default StoryCard;
