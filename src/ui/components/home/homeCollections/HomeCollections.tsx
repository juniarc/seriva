"use client";

import "../../../styles/home/homeCollection.css";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import Image from "next/image";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import { Controller, Navigation } from "swiper/modules";
import { bebasNue } from "@/ui/styles/fonts";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { CollectionItemType } from "@/type/types";

gsap.registerPlugin(useGSAP);

interface HomeCollectionsType {
    collections: CollectionItemType[];
}

export default function HomeCollections({ collections }: HomeCollectionsType) {
    const [thumbSwiper, setThumbSwiper] = useState<SwiperType | null>(null);
    const [productSwiper, setProductSwiper] = useState<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setMobile] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const handleResize = () => {
                setMobile(window.innerWidth <= 768);
            };
            handleResize();
            window.addEventListener("resize", handleResize);

            return () => {
                window.removeEventListener("resize", handleResize);
            };
        }
    }, []);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".collections-section",
                start: "20% 10%",
                end: "bottom top",
                scrub: true,
            },
        });

        tl.to(".collections__main-img", {
            yPercent: 25,
            ease: "none",
        });
        tl.to(".collection__thumb__text", {
            yPercent: 30,
            ease: "none",
        });
    });

    const handleCategoryTitleChange = () => {
        if (thumbSwiper) {
            console.log("thumbs");
            const slides = thumbSwiper.slides;
            const tl = gsap.timeline();
            tl.fromTo(
                slides[thumbSwiper.activeIndex].querySelector(".collection__thumb__category"),
                { yPercent: 25 },
                {
                    yPercent: 1,
                    opacity: 1,
                    duration: 0.45,
                },
            )
                .to(slides[thumbSwiper.activeIndex].querySelector(".collection__thumb__category"), {
                    opacity: 1,
                    duration: 0.25,
                })
                .to(slides[thumbSwiper.previousIndex].querySelector(".collection__thumb__category"), {
                    opacity: 0,
                    duration: 0.01,
                });
        }
    };

    const handleCategoryChange = (swiper: SwiperType) => {
        const tl = gsap.timeline();
        tl.to(".collections__desc-wrapper", {
            opacity: 0.5,
            duration: 0.25,
            delay: 0.3,
        })
            .to(".collections__desc-wrapper", {
                opacity: 0,
                yPercent: 25,
                duration: 0.25,
                onComplete: () => {
                    setActiveIndex(swiper.activeIndex);
                    if (!isMobile) handleCategoryTitleChange();
                },
            })
            .to(".collections__desc-wrapper", {
                opacity: 1,
                yPercent: 0,
                duration: 0.5,
            });
    };
    return (
        <div className="w-full h-full px-10 mobile:px-3 py-10 mobile:pt-8 mobile:pb-0 pr-36 mobile:pr-3">
            <div className="flex justify-between">
                <div>
                    <h2 className={`${bebasNue.className} text-3xl mobile:text-xl`}>Collections</h2>
                </div>
                <div className="flex items-center gap-16 mobile:gap-10">
                    <p className="text-base mobile:text-xs">View All</p>
                    <div className="flex items-center gap-16 mobile:gap-7">
                        <button
                            onClick={() => productSwiper?.slidePrev()}
                            className={`swiper__prev ${activeIndex === 0 ? "text-gray-400 pointer-events-none" : ""}`}
                        >
                            <FaArrowLeftLong />
                        </button>
                        <button
                            onClick={() => productSwiper?.slideNext()}
                            className={`swiper__next ${activeIndex === collections.length - 1 ? "text-gray-400 pointer-events-none" : ""}`}
                        >
                            <FaArrowRightLong />
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-10 mobile:mt-5 flex gap-10 justify-between h-[850px] mobile:h-auto">
                {!isMobile && (
                    <Swiper
                        modules={[Controller]}
                        slidesPerView={1}
                        className="w-3/5 rounded-lg h-full"
                        speed={700}
                        onSwiper={setThumbSwiper}
                        controller={{ control: productSwiper }}
                    >
                        {collections.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative w-full h-full overflow-hidden">
                                    <div className="collections__main-img w-full h-full rounded-lg relative left-0 top-0 overflow-hidden">
                                        <Image
                                            src={`${item.thumbImage}`}
                                            width={500}
                                            height={1000}
                                            alt="Collections Image"
                                            className="w-full min-h-full object-cover object-center rounded-lg"
                                        />
                                    </div>
                                    <div className="collection__thumb__text w-full h-full absolute top-0 left-0 rounded-lg flex justify-center items-center">
                                        <h4
                                            className={`collection__thumb__category ${bebasNue.className} text-white text-center break-words text-8xl max-w-[70%] ${index !== 0 ? "opacity-0" : ""}`}
                                        >
                                            {item.category}
                                        </h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
                <div className="w-5/12 h-full mobile:w-full">
                    <Swiper
                        onSlideChange={handleCategoryChange}
                        modules={[Controller]}
                        slidesPerView={1}
                        speed={700}
                        className="rounded-lg"
                        onSwiper={setProductSwiper}
                        controller={{ control: thumbSwiper }}
                    >
                        {collections.map((item, index) => (
                            <SwiperSlide key={index} className="rounded-lg">
                                <div className="collections__sec-img h-[358px] mobile:h-64 w-full rounded-lg overflow-hidden bg-off-white">
                                    <Image
                                        src={`${item.image}`}
                                        width={500}
                                        height={100}
                                        alt="Collections Image"
                                        className="w-full h-full object-contain object-center rounded-lg mix-blend-multiply"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="collections__desc-wrapper">
                        <div className="mt-10">
                            <h4 className={`${bebasNue.className} text-5xl mobile:text-3xl`}>{collections[activeIndex].title}</h4>
                            <p className="max-h-[30%] text-base mt-6 overflow-hidden text-ellipsis">{collections[activeIndex].description}</p>
                        </div>
                        <div className="flex mt-6 gap-2">
                            <div className="collections__shop-button bg-red-pink py-1 px-2 rounded-lg flex items-center">
                                <Link href="*" className={`${bebasNue.className}  text-off-white tracking-widest text-2xl text-center`}>
                                    SHOP
                                </Link>
                            </div>
                            <div className="collections__learn-button py-1 px-2 h-fit rounded-lg border-solid border-dark-gray border-[1px] flex items-center">
                                <Link
                                    href="*"
                                    className={`${bebasNue.className} text-dark-gray hover:text-off-white text-2xl tracking-widest text-center `}
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
