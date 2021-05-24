import { useContext } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { MainContext } from "../contexts/MainContext";
import { db } from "../firebase";
import Modal from "./Modal";
import Post from "./Post";

const Posts = ({ posts }) => {
  //   const { status } = useContext(MainContext);
  const [allposts] = useCollection(
    db.collection("posts").orderBy("timestamp", "desc")
  );
  return (
    <div>
      {allposts
        ? allposts?.docs.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              name={post.data().name}
              message={post.data().message}
              email={post.data().email}
              timestamp={post.data().timestamp}
              image={post.data().image}
              postImage={post.data().postImage}

            />
          ))
        : posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              name={post.name}
              message={post.message}
              email={post.email}
              timestamp={post.timestamp}
              image={post.image}
              postImage={post.postImage}
            />
          ))}
    </div>
  );
};

export default Posts;
