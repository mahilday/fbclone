import { StoryCard } from "./index";
import { useContext } from "react";
import { MainContext } from "../contexts/MainContext";

const Stories = () => {
  const { data } = useContext(MainContext);
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {data.storiesDiff.map((story) => (
        <StoryCard
          key={story.src}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
};

export default Stories;
