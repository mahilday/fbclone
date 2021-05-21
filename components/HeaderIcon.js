import Link from 'next/link'
import {useRouter} from 'next/router'

const HeaderIcon = ({ Icon, linkto, stats, active }) => {
    const router =useRouter()
    
  return (
    <div className="flex items-center rounded-xl md:px-10 
        cursor-pointer sm:h-14 
        md:hover:bg-gray-100 
        active:border-b
        active:border-blue-500 group">
    
      <Icon  className={` h-5 text-gray-500 text-center sm:h-7 mx-auto group-hover:text-blue-500 ${active && "text-blue-500"}`} />
      
    </div>
  );
};

export default HeaderIcon;
