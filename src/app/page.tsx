import "./globals.css";
import Image from "next/image";

import React from 'react';

import gsap from "gsap";



// Как их занести всех в импортСвг и оттуда забирать ?
import svgDoubleBig from '../../public/svg/Attention_double_big.svg'
import svgDoubleSmall from '../../public/svg/Attention_double_small.svg'
import svgUnderNote from '../../public/svg/Attention_under_note.svg'
import svgRightSmall from '../../public/svg/Checkbox_right_small.svg'
import svgRightBig from '../../public/svg/Checkbox_right_big.svg'
import svgTop from '../../public/svg/Attention.svg'
import EllipseBL from '../../public/svg/ellipse_background_bottom_left.svg'
import EllipseLM from '../../public/svg/ellipse_background_left_mid.svg'
import EllipseTR from '../../public/svg/ellipse_background_top.svg'
import svgLine from '../../public/svg/Vector 591line.svg'
import logo from '../../public/svg/logo.svg'
import card1 from '../../public/svg/cards/package-svgrepo-com 1.svg'
import card2 from '../../public/svg/cards/card2.svg'
import card3 from '../../public/svg/cards/card3.svg'
import card4 from '../../public/svg/cards/card4.svg'
import card5 from '../../public/svg/cards/card5.svg'
import card6 from '../../public/svg/cards/card6.svg'
import CardsProd from '../components/cardsProduct'
import CardsRate from '../components/cardsRate'
import CardsRateMain from "../components/cardsRateMain"
import bgArrow from "../../public/svg/bgArrow.svg"
import arrow from "../../public/svg/Arrow - Down 2arrow.svg"
import logoPanda from "../../public/svg/Logopanda.svg"
import telegram from "../../public/svg/Vectortelegram.svg"
import phone from "../../public/svg/Subtractphone.svg"
import whatsapp from "../../public/svg/whatsapp.svg"
import mac from "../../public/mac.png"
import caruselFirst from "../../public/svg/carusel/Rectangle1car.svg"
import caruselSecond from "../../public/svg/carusel/Rectangle2car.svg"
import caruselThird from "../../public/svg/carusel/Rectangle3car.svg"
import caruselFourth from "../../public/svg/carusel/Rectangle4car.svg"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel"

import {
    Dialog,
    DialogContent,
    DialogClose,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import {
    DialogCom,
    DialogContentCom,
    DialogDescriptionCom, DialogFooterCom,
    DialogHeaderCom,
    DialogTitleCom,
    DialogTriggerCom,
} from "@/components/ui/dialogComplete";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {Button} from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


export default function Home() {
    return (
        <section className="relative font-geometria">

            <section className="relative bg-[#F6F6F8] overflow-hidden 768:h-[110vh] 320:h-screen">
                <Image className={"absolute bottom-auto 320:pb-0 1200:pb-3.5 z-10 1200:right-[30%] 1920:right-[30%]" +
                    " 320:h-fit 320:top-auto 320:bottom-1/3  320:right-1/2 320:translate-y-1/2 320:scale-150 320:scale-y-175 " +
                    "768:h-auto 768:scale-100 768:top-1/2 768:right-1/3 1200:h-full translate-x-1/2 top-1/2 " +
                    "768:-translate-y-1/2 1920:scale-100 1920:scale-y-102 1200:scale-100 1200:scale-y-105"}
                       src={mac} alt={'mac'} decoding="sync"/>
                {/*SVG static*/}
                <div className="select-none">
                    <Image className="absolute top-auto 320:bottom-1/2 768:bottom-1/4" src={svgLine} alt={'svg'}/>
                    <Image className="absolute right-0 top-0" src={EllipseTR} alt={'svg'}/>
                    <Image className="absolute left-0 top-0" src={EllipseLM} alt={'svg'}/>
                    <Image className="absolute left-0 bottom-0" src={EllipseBL} alt={'svg'}/>
                </div>
                {/*SVG animation*/}
                <div className="select-none">
                    <Image
                        className="absolute 768:right-[5%] 320:right-1/4 768:animate-[svgMove_1s_ease-out_.4s_backwards]"
                        src={svgTop} alt={"svg"}/>
                    <Image
                        className="absolute 768:right-[7%] 768:top-[45%] 320:top-1/2 320:right-[5%] 768:animate-[svgMoveRightBot_1s_ease-out_.8s_backwards]"
                        src={svgRightSmall} alt={'svg'} decoding="sync"/>
                    <Image
                        className="absolute 1920:right-[5%] 1920:top-[55%] 1200:right-[4%] 1200:top-[50%] 1024:right-0
                        1024:top-[55%] 768:top-[53%] 768:right-[0] 320:top-[60%] 320:right-[1%]
                         768:animate-[svgMoveRightUp_1s_ease-out_1.2s_backwards]"
                        src={svgRightBig} alt={'svg'} decoding="sync"/>
                    <Image className=" absolute 768:left-[53%] 768:top-[15%] bottom-auto 320:top-auto 320:bottom-1/4
                    768:animate-[svgMoveLeftUp_1s_ease-out_1.4s_backwards]"
                           src={svgDoubleSmall} alt={'svg'} decoding="sync"/>
                    <Image
                        className="absolute 768:left-[50%] 768:top-[10%] 320:top-1/3 768:animate-[svgMoveLeftUp_.8s_ease_1.2s_backwards]"
                        src={svgDoubleBig} alt={'svg'} decoding="sync"/>
                </div>

                {/*<section className="select-none absolute h-[115%] w-[100%] top-[-5%] right-[-20%]">*/}
                {/*    <div*/}
                {/*        className="bg-[url('../../public/mac.png')] bg-center bg-contain h-full bg-no-repeat z-40 animate-[note_.6s_ease-in]">*/}
                {/*    </div>*/}
                {/*</section>*/}

                <div className="1920:mx-1920m 1200:mx-1200m 1024:mx-1024m 768:mx-768m 320:mx-320m">
                    <header
                        className="flex items-center 1920:justify-between 1200:justify-evenly 1024:justify-between 768:justify-evenly 320:justify-between pt-8">
                        <a href="" className="w-fit z-10 h-fit select-none">
                            <Image src={logo} alt={"logoMain"} decoding={"async"} className={"select-none"}/>
                        </a>
                        <span className="320:hidden 768:table 768:z-10 1024:text-sm/[1.125rem] 768:text-xxs uppercase font-bold
                         tracking-[.038em] text-[#667085]">
                        <span className="1920:mx-8 1200:mx-6 1024:mx-4 768:mx-hvw"><a
                            href="#forWhom"
                            className="text-[#667085] hover:text-[#7F56D9]">для кого</a></span>
                        <span className="1920:mx-8 1200:mx-6 1024:mx-4 768:mx-hvw"><a href="#cardsProd"
                                                                                      className="text-[#667085] hover:text-[#7F56D9]">модули</a></span>
                        <span className="1920:mx-8 1200:mx-6 1024:mx-4 768:mx-hvw"><a href="#"
                                                                                      className="text-[#667085] hover:text-[#7F56D9]">преимущества</a></span>
                        <span className="1920:mx-8 1200:mx-6 1024:mx-4 768:mx-hvw"><a href="#rateCards"
                                                                                      className="text-[#667085] hover:text-[#7F56D9]">тарифы</a></span>
                        <span className="1920:mx-8 1200:mx-6 1024:mx-4 768:mx-hvw"><a href="#faq"
                                                                                      className="text-[#667085] hover:text-[#7F56D9]">FAQ</a></span>
                    </span>
                        <a href="#"
                           className="320:text-nowrap z-10 header__btn bg-[#7F56D9] text-[#FFFFFF] 768:text-xxs
                           320:text-xs 1024:text-base/[14px] p-3 font-medium rounded-[6rem]">
                            +7 (906) 171 02-00</a>
                    </header>
                </div>
                <section className="h-screen overflow-y-hidden z-0 main">
                    <main className="1920:mx-1920m h-full 1200:mx-1200m 1024:mx-1024m 768:mx-768m 320:mx-320m">
                        <div className=" flex flex-col h-full 320:pt-16 768:pt-0
                        768:justify-center 768:items-start 320:justify-start 320:items-center">
                            <h1 className="z-10 w-full 320:flex 320:flex-col 320:items-center 768:items-start">
                                <div
                                    className="title_animated__first 320:text-center font-bold 320:font-extrabold
                                     1024:text-[64px] 768:text-[54px] 320:text-3xl
                                    leading-[72px] text-[#344054] 768:mb-7 320:mb-3 text-left w-fit">
                                    Ystaff - CRM
                                </div>
                                <div
                                    className="title_animated__secondary 320:hidden 768:block font-medium 1024:text-[16px] 768:text-[14px]
                                    leading-[24px] text-[#344054] 320:text-l mb-[34px] 768:w-fit ">Экономьте
                                    время и деньги<br/> при работе с исполнителями
                                </div>
                                <div
                                    className="title_animated__secondary 768:hidden font-medium 1024:text-[16px] 768:text-[14px]
                                    leading-[24px] text-[#344054] 320:text-l mb-[34px] 768:w-fit w-full text-center">Экономьте
                                    время и деньги при работе с исполнителями
                                </div>
                            </h1>
                            <Dialog>
                                <DialogTrigger className="select-none z-10 main__button_animation w-fit 1024:text-xl/[48px]
                               768:text-m/[36px] 320:text-s text-white font-semibold rounded-[48px] flex flex-row items-center
                               768:p-1.5 768:pl-9 320:pl-5 320:p-1 justify-between bg-gradient-to-r from-violet-bright_dark to-violet-light">Попробовать
                                    бесплатно
                                    <div
                                        className="main__button_circle bg-[#FFFFFF] rounded-[50%]
                                        768:h-[62px] 768:w-[62px] 320:h-[52px] 320:w-[52px]
                                        flex items-center justify-center ml-[26px] 320:ml-2">
                                        <svg className="arrow" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M13.0024 4.74399C12.6839 5.06949 12.6839 5.59538 13.0046 5.91866L16.645 9.59768L16.729 9.672C17.0505 9.91963 17.5093 9.89384 17.8013 9.59546C17.9606 9.43271 18.0403 9.22125 18.0403 9.00979C18.0403 8.79611 17.9606 8.58354 17.7992 8.42079L14.1599 4.74177L14.0758 4.66771C13.7542 4.42092 13.2944 4.44663 13.0024 4.74399ZM3.7156 11.176C3.31232 11.2272 3 11.5767 3 11.9998C3 12.4582 3.36655 12.8302 3.81818 12.8302H18.2007L13.0047 18.0813L12.9312 18.1661C12.6862 18.4909 12.7105 18.9576 13.0025 19.256C13.3211 19.5804 13.8393 19.5815 14.1589 19.2582L20.7589 12.5877L20.8317 12.5042C20.9424 12.3581 21 12.1797 21 11.9998C21 11.8924 20.9793 11.785 20.9378 11.6832C20.8113 11.3721 20.5135 11.1695 20.1818 11.1695H3.81818L3.7156 11.176Z"
                                                  fill="#344054"/>
                                        </svg>
                                    </div>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Оставьте заявку</DialogTitle>
                                        <DialogDescription>
                                            Наш менеджер свяжется с вами в ближайшее время
                                        </DialogDescription>
                                    </DialogHeader>
                                    <Label htmlFor="name">Ваше имя</Label>
                                    <Input type="text" id="name" placeholder=""/>
                                    <Label htmlFor="number">Номер телефона</Label>
                                    <Input type="tel" id="number" placeholder=""/>
                                    <span className="text-center text-xs text-grey-dark pt-20px pb-24px">
                                            <p>Отправляя форму, Вы соглашаетесь<br/>
                                            с <a href="#"
                                                 className="text-violet-Default underline hover:no-underline
                                                 hover:text-violet-dark">политикой конфиденциальности
                                                </a>
                                            </p>
                                    </span>
                                    <DialogFooter>
                                        <Dialog>
                                            <DialogTriggerCom>
                                                <Button className="w-full bg-gradient-to-r from-violet-bright_dark
                                                to-violet-light text-white rounded-4xl">
                                                    <span className="">
                                                        Отправить
                                                    </span>
                                                </Button>
                                            </DialogTriggerCom>
                                            <DialogContent>
                                                <Image className="absolute z-50 768:left-[50%] 768:top-[25%] 768:translate-x-[-50%] 768:translate-y-[-50%]
                                                320:left-[50%] 320:top-[27%] 320:translate-x-[-50%] 320:translate-y-[-50%]"
                                                       src={arrow} alt={''}/>
                                                <Image className="absolute z-40 768:left-[50%] 768:top-[10%] 768:translate-x-[-50%]
                                                320:left-[50%] 320:top-[10%] 320:translate-x-[-50%]" src={bgArrow} alt={''} />
                                                <DialogHeader>
                                                    <DialogTitleCom>
                                                        Спасибо за заявку!
                                                    </DialogTitleCom>
                                                    <DialogDescription>
                                                        Наш менеджер свяжется с вами в ближайшее время
                                                    </DialogDescription>
                                                </DialogHeader>
                                                <DialogFooterCom>
                                                    <DialogClose className="w-full">
                                                        <Button className="max-w-screen-320 w-full bg-gradient-to-r from-violet-bright_dark
                                                    to-violet-light text-white rounded-4xl mt-5">
                                                        <span className="">
                                                            Закрыть
                                                        </span>
                                                        </Button>
                                                    </DialogClose>
                                                </DialogFooterCom>
                                            </DialogContent>
                                        </Dialog>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>

                            {/*<a href="#"*/}
                            {/*   className="select-none z-10 main__button_style main__button_animation w-fit 1024:text-xl/[48px]*/}
                            {/*   768:text-m/[36px] text-[#FFFFFF] font-semibold rounded-[48px] flex flex-row items-center*/}
                            {/*   p-[0.375rem] pl-9 justify-between ">*/}
                            {/*    Попробовать бесплатно*/}
                            {/*    <div*/}
                            {/*        className="main__button_circle bg-[#FFFFFF] rounded-[50%] h-[62px] w-[62px]  flex items-center justify-center ml-[26px] 320:ml-2">*/}
                            {/*        <svg className="arrow" width="24" height="24" viewBox="0 0 24 24" fill="none"*/}
                            {/*             xmlns="http://www.w3.org/2000/svg">*/}
                            {/*            <path fillRule="evenodd" clipRule="evenodd"*/}
                            {/*                  d="M13.0024 4.74399C12.6839 5.06949 12.6839 5.59538 13.0046 5.91866L16.645 9.59768L16.729 9.672C17.0505 9.91963 17.5093 9.89384 17.8013 9.59546C17.9606 9.43271 18.0403 9.22125 18.0403 9.00979C18.0403 8.79611 17.9606 8.58354 17.7992 8.42079L14.1599 4.74177L14.0758 4.66771C13.7542 4.42092 13.2944 4.44663 13.0024 4.74399ZM3.7156 11.176C3.31232 11.2272 3 11.5767 3 11.9998C3 12.4582 3.36655 12.8302 3.81818 12.8302H18.2007L13.0047 18.0813L12.9312 18.1661C12.6862 18.4909 12.7105 18.9576 13.0025 19.256C13.3211 19.5804 13.8393 19.5815 14.1589 19.2582L20.7589 12.5877L20.8317 12.5042C20.9424 12.3581 21 12.1797 21 11.9998C21 11.8924 20.9793 11.785 20.9378 11.6832C20.8113 11.3721 20.5135 11.1695 20.1818 11.1695H3.81818L3.7156 11.176Z"*/}
                            {/*                  fill="#344054"/>*/}
                            {/*        </svg>*/}
                            {/*    </div>*/}
                            {/*</a>*/}
                        </div>
                    </main>
                </section>
            </section>
            {/*<Image className="absolute left-[42%] top-[40%] z-10 " src={svgUnderNote}/>*/}
            <section id={"forWhom"} className="bg-white flex flex-col justify-center ">
                <div
                    className="1920:mx-1920m pt-28 320:py-12 flex-col 1200:mx-1200m 1024:mx-1024m 768:mx-768m 320:mx-320m
                    1920:pb-14 1200:pb-12 768:pb-8">
                    <h2 className="font-normal leading-14 1200:text-5xl 768:text-4xl 320:text-3xl 1920:pb-14 1200:pb-12 768:pb-8 320:pb-6 ">Ystaff
                        - Уникальный Продукт На Рынке</h2>
                    <div className="grid 1920:grid-cols-3 1920:gap-7 1024:gap-5 1200:grid-cols-3 1024:grid-cols-2
                    768:grid-cols-2 768:gap-3 320:grid-cols-1 320:gap-3 ">
                        <CardsProd description={'Коробочное решение'} btn={'Оставить заявку'} icon={card1}></CardsProd>
                        <CardsProd description={'Помощь в настройке продукта'} btn={'Оставить заявку'}
                                   icon={card2}></CardsProd>
                        <CardsProd description={'Простота использования продукта'} btn={'Оставить заявку'}
                                   icon={card3}></CardsProd>
                        <CardsProd description={'Онлайн-чат тех.поддержки'} btn={'Оставить заявку'}
                                   icon={card4}></CardsProd>
                        <CardsProd description={'Первая CRM для аутсорсинговых компаний'} btn={'Оставить заявку'}
                                   icon={card5}></CardsProd>
                        <CardsProd description={'Активное развивающийся проект'} btn={'Оставить заявку'}
                                   icon={card6}></CardsProd>
                    </div>
                </div>
            </section>
            <section id={"rateCards"} className="bg-white flex 1920:mx-1920m 1200:mx-1200m 768:mx-768m 320:mx-320m">
                <div className=" flex flex-col w-full">
                    <h2 className="font-normal 768:leading-14 1920:text-5xl 1200:text-5xl 768:text-4xl 1920:pb-14
                    1200:pb-12 768:pb-8 320:pb-6 1200:pt-4 320:text-3xl text-violet-darker">
                        Тарифы Ystaff</h2>
                    <h3 className="font-normal 768:text-xl 320:text-base 1200:pb-12 768:pb-8 320:pb-6 text-black-light_black">Воспользуйтесь
                        нашим специальным
                        предложением<br/>
                        и приобретите годовую лицензию на выгодных условиях:</h3>

                    <div
                        className="flex 1200:flex-row 768:flex-col 320:flex-col w-full 1200:gap-x-7 768:gap-y-3
                         1200:mb-109 768:mb-14 320:mb-10 768:h-full 320:gap-y-2">
                        <CardsRateMain title={'июль-сентябрь'} year={"2024 г."} price={'59,000 ₽/год'}
                                       oldPrice={'159,000 ₽/год'}></CardsRateMain>
                        <div
                            className="flex flex-col 1200:gap-y-7 768:gap-y-3 768:h-full w-full 1200:m-auto justify-between 320:gap-y-2">
                            <div
                                className="flex 768:flex-row 320:flex-col w-full h-full 1200:gap-x-7 768:gap-x-3 320:gap-y-2">
                                <CardsRate title={'октябрь-декабрь'} year={"2024 г."} price={'89,000 ₽/год'}
                                           oldPrice={'159,000 ₽/год'}></CardsRate>
                                <CardsRate title={'январь-март'} year={"2024 г."} price={'119,000 ₽/год'}
                                           oldPrice={'159,000 ₽/год'}></CardsRate>
                                <CardsRate title={'апрель-'} year={"2025 - ...г."} price={'159,000 ₽/год'}
                                           oldPrice={'-'}></CardsRate>
                            </div>
                            <p className="border-2 rounded-20 border-pink-dark font-medium text-base text-center py-4">Релиз
                                системы в июле 2024 года</p>
                        </div>
                    </div>
                    <span
                        className="place-self-center text-center font-normal text-4xl 1200:text-3xl 768:text-2xl 320:text-xl 320:leading-6 relative text-black-light_black">
                        <span>Продление лицензии</span><br/>
                        <span className="1200:pr-72px 320:pr-12">осуществляется по цене</span>
                        <span className="bg-yellow-bright rounded-full 1200:py-3.5 768:py-2.5 320:py-2 absolute 1200:right-5
                        1200:bottom-7 768:bottom-6 343:bottom-4 343:right-4 320:bottom-9 320:right-2  font-black 1200:text-3xl 768:text-2xl 320:text-xl text-white">40%</span><br/>
                        <span>от текущей стоимости лицензии.</span>
                    </span>
                </div>
            </section>

            {/*Testing*/}

            <section className={"h-screen 1920:mx-1920m 1200:mx-1200m 768:mx-768m 320:mx-320m"}>
                <div className={"pt-10"}>
                    <h2 className={"font-normal text-5xl text-violet-darker"}>Ystaff состоит из</h2>
                    <h2 className={"font-normal text-5xl text-violet-bright_light"}>4 ключевых модулей</h2>
                </div>
                <div className={"flex justify-between"}>
                    <button>Модуль исполнителей</button>
                    <button>Модуль объектов</button>
                    <button>Модуль заявок</button>
                    <button>Модуль компаний</button>
                </div>
                <Carousel>
                    <CarouselContent>
                        <CarouselItem>
                            <Image src={caruselFirst} alt={''} width={'572'}
                                             height={'512'}></Image>
                            <div className={"hidden 1200:block leading-none text-4xl font-extrabold"}>01</div>
                            <div className={"text-black-light_black font-normal flex flex-col justify-center"}>
                                <p className={"text-4xl mb-5"}>База исполнителей</p>
                                <ul className={"list-disc list-inside text-xl"}>
                                    <li>История выхода на объекты</li>
                                    <li>Фильтры по исполнителям</li>
                                    <li>Контакты и комментарии</li>
                                </ul>
                            </div></CarouselItem>
                        <CarouselItem><Image src={caruselSecond} alt={''} width={'572'}
                                             height={'512'}></Image>
                            <div className={"hidden 1200:block leading-none text-4xl font-extrabold"}>02</div>
                            <div className={"text-black-light_black font-normal flex flex-col justify-center"}>
                                <p className={"text-4xl mb-5"}>База объектов</p>
                                <ul className={"list-disc list-inside text-xl"}>
                                    <li>Привязка профессий к объекту</li>
                                    <li>Привязка заявок к объекту</li>
                                    <li>Полные данные объекта и контактных лиц</li>
                                </ul>
                            </div>
                        </CarouselItem>
                        <CarouselItem><Image src={caruselThird} alt={''} width={'572'}
                                             height={'512'}></Image>
                            <div className={"hidden 1200:block leading-none text-4xl font-extrabold"}>03</div>
                            <div className={"text-black-light_black font-normal flex flex-col justify-center"}>
                                <p className={"text-4xl mb-5"}>База заявок</p>
                                <ul className={"list-disc list-inside text-xl"}>
                                    <li>История выхода на объекты</li>
                                    <li>Фильтры по заявкам</li>
                                    <li>Статистка по статусам привязанных исполнителей</li>
                                </ul>
                            </div>
                        </CarouselItem>
                        <CarouselItem><Image src={caruselFourth} alt={''} width={'572'}
                                             height={'512'}></Image>
                            <div className={"hidden 1200:block leading-none text-4xl font-extrabold"}>04</div>
                            <div className={"text-black-light_black font-normal flex flex-col justify-center"}>
                                <p className={"text-4xl mb-5"}>База компаний</p>
                                <ul className={"list-disc list-inside text-xl"}>
                                    <li>Данные о компаниях, подразделениях, объектах</li>
                                    <li>Фильтры по компаниям</li>
                                    <li>Контактные лица компании</li>
                                </ul>
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious/>
                    <CarouselNext/>
                </Carousel>
            </section>

            {/*Accordion*/}

            <section id={"faq"} className="bg-white pt-12 flex flex-col justify-center
            mb-72px 1920:mx-1920m 1200:mx-1200m 768:mx-768m 320:mx-320m">
                <h2 className="text-violet-darker 1920:text-5xl 1920:leading-14 1200:text-5xl 768:text-4xl 320:text-3xl 1920:pb-72px
                font-normal 1200:pb-12 768:pb-8 320:pb-6">Ответы на ваши вопросы</h2>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Сколько нужно времени, чтобы настроить Ystaff?</AccordionTrigger>
                        <AccordionContent>
                            Настройка Ystaff занимает несколько часов.
                            Мы удаленно покажем продукт и поможем в нем разобраться, а также поможем с настройкой.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Я могу самостоятельно настроить Ystaff?</AccordionTrigger>
                        <AccordionContent>
                            -
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Могут ли данные моих исполнителей попасть к конкурентам?</AccordionTrigger>
                        <AccordionContent>
                            -
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>Можете ли вы разработать какой-то функционал лично под нас?</AccordionTrigger>
                        <AccordionContent>
                            -
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>Как оплатить Ystaff?</AccordionTrigger>
                        <AccordionContent>
                            -
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>
            <div className="border-t-3 mt-60 320:mt-10 "></div>

            {/*Footer*/}

            <section className="">
                <div
                    className="h-full 320:my-12 768:my-0 768:mb-28 768:mt-12 1920:mx-1920m 1200:mx-1200m 768:mx-768m 320:mx-320m">
                    <div className="flex 768:flex-row h-fit  320:flex-col justify-evenly">
                        <a href="" className="w-fit z-10 h-fit"><Image src={logo} alt={logo}/></a>
                        <div className="320:py-10 768:py-0 flex flex-col 768:items-center 320:items-start text-grey-dark
                    1920:mx-1920m 1200:mx-1200m 768:mx-768m 320:mx-320m">
                            <div className="flex flex-col w-fit 768:text-base font-medium 320:text-lg">
                                <p className="text-xs 320:text-sm font-normal pb-14px">Поддержка</p>
                                <span className="flex-row flex pb-14px 320:pb-6 gap-x-3">
                            <Image src={phone} alt={logo}/>
                            <a href="" className="hover:text-violet-dark">+7 (906) 171 02-00</a>
                        </span>
                                <span className="flex-row flex pb-14px 320:pb-6 gap-x-3">
                            <Image src={whatsapp} alt={logo}/>
                            <a href="" className="hover:text-violet-dark">Whatsapp</a>
                        </span>
                                <span className="flex-row flex gap-x-3">
                            <Image src={telegram} alt={logo}/>
                            <a href="" className={"hover:text-violet-dark"}>Telegram</a>
                        </span>
                            </div>
                        </div>
                        <a href="" className="text-grey-dark h-fit
                    z-10 underline hover:no-underline hover:text-violet-dark">Политика конфиденциальности</a>
                    </div>
                </div>
                <div className="border-t-2"></div>
                <div className="1920:mx-1920m 1200:mx-1200m 768:mx-768m 320:mx-320m">
                    <div
                        className="flex 768:flex-row 320:flex-col justify-between text-sm text-grey-dark items-center py-3.5">
                        <span className="768:pb-0 320:pb-2">© 2009–2022, Ystaff, официальный сайт</span>
                        <span className="flex flex-row items-center ">Разработано: <Image src={logoPanda} alt={"panda"}
                                                                                          className="320:ml-3 768:ml-6"/></span>
                    </div>
                </div>
            </section>
        </section>
    );
}
