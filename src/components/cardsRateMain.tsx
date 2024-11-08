
import "../app/globals.css";
interface cardsProps {
    title: string,
    year: string
    price: string,
    oldPrice: string,
}

export default function CardsRateMain({title, year, price, oldPrice}: cardsProps) {
    return (
        <div
            className="1200:w-1/3 768:w-full rounded-4xl 1200:pt-34px 1200:pb-5 768:py-34px 320:pt-34px 320:pb-5 flex
            320:flex-col 768:flex-row 1200:flex-col bg-gradient-to-r from-violet-bright_dark
             to-violet-light text-white justify-between text-nowrap 320:px-5 768:px-0">
            <div className="768:pl-5 1200:px-5">
                <p className="font-medium text-xl mb-3.5 text-nowrap">{title}</p>
                <p className="font-normal text-base 1200:mb-16 768:mb-8 320:mb-8">{year}</p>
            </div>
            <div className="flex flex-col 768:pl-5 1200:px-5 1200:pb-20px 768:justify-end 320:pb-3">
                <p className="px-2.5 rounded-3xl w-fit bg-orange mb-7px"><span className="bg-gradient-to-r from-violet-bright_dark to-violet-light w-fit
                 text-base text-transparent bg-clip-text">Выгодно</span></p>
                <p className="font-medium text-2xl flex flex-col justify-center text-nowrap">{price}</p>
                <p className="font-medium text-base leading-8 text-pink-grey line-through text-nowrap">{oldPrice}</p>
            </div>
            <a href=""
               className="group 1200:px-9 1200:mx-5 768:mx-5 320:w-full 768:w-fit 768:px-9 320:px-9
                   text-base bg-white hover:bg-transparent rounded-48
                   border-white border group-hover:bg-clip-text py-19px text-center place-self-center">
                <span className="text-transparent text-nowrap bg-gradient-to-r from-violet-bright_dark
                to-violet-light bg-clip-text group-hover:text-white">
                    Попробовать бесплатно
                </span>
            </a>
        </div>
)
}