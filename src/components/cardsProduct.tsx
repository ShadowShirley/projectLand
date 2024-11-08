import Image from "next/image";
import "../app/globals.css";
interface cardsProps {
    description: string,
    btn: string,
    icon: string,
}


export default function CardsProd({description, btn, icon}: cardsProps) {
    return (
        <div
            className="h-auto rounded-4xl px-10 py-8 flex flex-col bg-gradient-to-r from-violet-bright_dark
             to-indigo-default text-white drop-shadow-card">
            <Image src={icon} alt={'svg'} width={'64'} height={'64'}/>
            <p className="py-1 font-medium text-xl h-[110px] flex flex-col justify-center">{description}</p>
            <a href=""
               className="group 1920:px-12 1200:px-6 1024:px-12 768:px-4 320:px-9 py-6px font-medium text-xl
               w-fit leading-12 rounded-48 bg-transparent
               hover:bg-white
               border-white border">
                <span className="group-hover:text-transparent group-hover:bg-gradient-to-r from-violet-bright_dark
                to-indigo-default group-hover:bg-clip-text text-white text-center text-nowrap">{btn}</span>
            </a>
        </div>
    )
}