import {SearchIcon} from '@heroicons/react/outline'
import {DotsHorizontalIcon, VideoCameraIcon} from "@heroicons/react/solid"
import {MainContext} from '../contexts/MainContext'
import {useContext} from 'react'
import {Contact} from './index'
const Widgets = () => {
    const {data} = useContext(MainContext)
    return ( 
        <div className="hidden lg:flex flex-col  w-60 p-2 mt-5">
            <div className="flex justify-between items-center text-gray-500 mb-5">
                <h2 className="text-xl">Contacts</h2>
                <div className="flex space-x-2">
                    <VideoCameraIcon  className="h-6"/>
                    <SearchIcon className="h-6"/>
                    <DotsHorizontalIcon className="h-6" />
                </div>
            </div>
            {data.storiesDiff.map(contact=>(
                <Contact key={contact.src} src ={contact.src} name={contact.name}/>
            ))}
        </div>
     );
}
 
export default Widgets;
