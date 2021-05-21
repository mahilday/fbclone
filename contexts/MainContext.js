import {useState, useRef, createContext} from 'react'

export const MainContext = createContext()
const MainProvider = ({children}) => {
    const [imageToPost, setImageToPost] = useState(null)
    const inputRef = useRef(null)
    const filepickerRef = useRef(null)


    const sendPost = (e) => {
        e.preventDefault();
        if (!inputRef.current.value) return;
        db.collection("posts").add({
          message: inputRef.current.value,
          name: session.user.name,
          email: session.user.email,
          image: session.user.image,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        inputRef.current.value = "";
      };

      const addImageToPost = (e) =>{
          const reader = new FileReader()
          if(e.target.files[0]){
              reader.readAsDataURL(e.target.files[0])
          }
          reader.onload =(readerEvent) =>{
              setImageToPost(readerEvent.target.result)
          }
      }
    const removeImage =()=>{
        setImageToPost(null);
    }
    const contextVal={
        status:{
            image:{
                imageToPost,
                setImageToPost
            }
        },
        sendPost,
        addImageToPost,
        removeImage,
        refs:{
            inputRef,
            filepickerRef
        }
    }
    return ( 
        <MainContext.Provider value={contextVal}>
            {children}
        </MainContext.Provider>
     );
}
 
export default MainProvider;