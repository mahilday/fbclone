import Image from "next/image"

const Contact = ({src, name}) => {
    return ( 
    <div className="flex my-4 items-center space-x-3 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl">
        <Image
            className="rounded-full"
            objectFit="cover"
            src={src}
            width={50}
            height={50}
            layout="fixed"
        />
        <p className="font-medium">{name}</p>
        <div className="absolute bottom-2 left-8 bg-green-400 h-2 w-2 rounded-full animate-bounce shadow-md"></div>
    </div>
    );
}
 
export default Contact;