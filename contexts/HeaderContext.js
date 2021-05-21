import {useState, createContext} from 'react'
import {useRouter} from 'next/router'

export const HeaderContext = createContext()
const HeaderProvider = ({children}) => {
    const router = useRouter()
    const [active, setActive] =useState("")
     const checkActive =(link)=>{
         setActive("active") 
     }
    
    const contextVal ={
        status:{
            active, 
            checkActive
        }
    }
    return ( 
        <HeaderContext.Provider value={contextVal}>
            {children}
        </HeaderContext.Provider>
     );
}
 
export default HeaderProvider;