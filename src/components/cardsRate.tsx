import Image from "next/image";
import "../app/globals.css";
interface cardsProps {
    title: string,
    year: string
    price: string,
    oldPrice: string,
}

export default function CardsRate({title, year, price, oldPrice}: cardsProps) {
    return (
        <div className="w-full rounded-20 bg-gradient-to-r from-violet-bright_dark
             to-violet-light p-0.5 flex-col h-full">
            <div
                className="h-full rounded-20 flex flex-col bg-white hover:bg-opacity-80 cursor-pointer 1200:p-5 768:pl-5 768:pb-5
                1200:pt-34px 768:pt-34px 320:pl-5 320:pb-5 320:pt-34px 1200:justify-between w-full">
                <div>
                    <p className="768:font-black 1200:font-bold text-xl text-black-light_black pb-3.5">{title}</p>
                    <p className="font-normal text-base text-grey-dark pb-9">{year}</p>
                </div>
                <div>
                    <p className="font-semibold text-2xl text-black-light_black">{price}</p>
                    <p className="font-medium text-base leading-8 text-grey-dark line-through">{oldPrice}</p>
                </div>

            </div>
        </div>
    )
}
