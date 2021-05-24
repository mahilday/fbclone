import { useState, useRef, createContext } from "react";
import { db, storage } from "../firebase";
import { useSession } from "next-auth/client";
import firebase from "firebase";

export const MainContext = createContext();
const MainProvider = ({ children }) => {
  const [imageToPost, setImageToPost] = useState(null);
  const [posts, setPosts] = useState(null);
  const [modalOpen, setModalOpen] = useState(false)
  const inputRef = useRef(null);
  const filepickerRef = useRef(null);
  const [session] = useSession();

  // contacts
  const storiesDiff = [
    {
      name: "Math Imado",
      src: "https://links.papareact.com/zof",
      profile: "https://links.papareact.com/l4v",
    },
    {
      name: "Elon Musk",
      src: "https://links.papareact.com/4zn",
      profile: "https://links.papareact.com/kxk",
    },
    {
      name: "Jeff Bezos",
      src: "https://links.papareact.com/k2j",
      profile: "https://links.papareact.com/f0p",
    },
    {
      name: "Mark Zuckerberg",
      src: "https://links.papareact.com/xql",
      profile: "https://links.papareact.com/snf",
    },
    {
      name: "Bill Gates",
      src: "https://links.papareact.com/4u4",
      profile: "https://links.papareact.com/zvy",
    },
  ];
  //
  //
  const deletePost = (id) => {
    if (confirm("Are you sure you want to delete this post?")) {
      db.collection("posts")
        .doc(id)
        .delete()
        .then(() => {
          storage.ref(`posts/${id}`).delete();
          console.log("doc deleted");
        })
        .catch((err) => {
          console.error(err);
        });
    }
    return null;
  };
  const sendPost = (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;
    db.collection("posts")
      .add({
        message: inputRef.current.value,
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((doc) => {
        if (imageToPost) {
          const uploadTask = storage
            .ref(`posts/${doc.id}`)
            .putString(imageToPost, "data_url");
          removeImage();

          uploadTask.on(
            "state_change",
            null,
            (error) => console.error(error),
            () => {
              storage
                .ref("posts")
                .child(doc.id)
                .getDownloadURL()
                .then((url) => {
                  db.collection("posts").doc(doc.id).set(
                    {
                      postImage: url,
                    },
                    {
                      merge: true,
                    }
                  );
                });
            }
          );
        }
      });
    inputRef.current.value = "";
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };
  const saveDoc = (data) => {
    setPosts(data);
  };
  const removeImage = () => {
    setImageToPost(null);
  };
  const contextVal = {
    status: {
      image: {
        imageToPost,
        setImageToPost,
      },
      postContext: {
        posts,
        setPosts,
      },
      modal:{
          modalOpen,
          setModalOpen
      }
    },
    sendPost,
    addImageToPost,
    removeImage,
    saveDoc,
    deletePost,
    data: {
      storiesDiff,
    },
    refs: {
      inputRef,
      filepickerRef,
    },
  };
  return (
    <MainContext.Provider value={contextVal}>{children}</MainContext.Provider>
  );
};

export default MainProvider;
