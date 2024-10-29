import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "../../styles/header/header.css";
import { inter } from "@/ui/styles/fonts";

gsap.registerPlugin(useGSAP);

export default function Header() {
    useGSAP(() => {
        gsap.fromTo(".header__wrapper", { xPercent: 100 }, { xPercent: 0, duration: 1.3, ease: "power3.out" }).delay(1);
    });
    return (
        <header className="header__wrapper bg-white h-screen w-[90px] z-10">
            <div className="w-full h-full flex flex-col justify-between items-center py-4">
                <div className="w-fit h-fit">
                    <button className="w-16 h-16 flex justify-center justify-items-center">
                        <svg className="icon-burger w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 12H18" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M6 15.5H18" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M6 8.5H18" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
                <div className="rotate-90 flex gap-5 w-[460px]">
                    <p className="text-nowrap">Free Shipping</p>
                    <p className="text-wrap">West Java 60$+ | East Java 100$+ | Outside Java 150$</p>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <button className="relative p-2">
                        <p className="bg-red-pink text-center absolute top-1/4 right-0 text-white text-[10px] align-middle font-bold rounded-full h-4 w-4 outline outline-3">
                            0
                        </p>
                        <span>
                            <svg width="30px" height="30px" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M22 10.56C22 9.49913 21.5786 8.48171 20.8284 7.73157C20.0783 6.98142 19.0609 6.56 18 6.56H6C4.93913 6.56 3.92178 6.98142 3.17163 7.73157C2.42149 8.48171 2 9.49913 2 10.56"
                                    stroke="#000000"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M21.9999 10.56L20.9999 18.56C20.8507 19.6487 20.3192 20.649 19.5002 21.3818C18.6813 22.1146 17.6285 22.5322 16.5299 22.56H7.38989C6.29132 22.5322 5.23847 22.1146 4.41956 21.3818C3.60064 20.649 3.0691 19.6487 2.91992 18.56L1.91992 10.56"
                                    stroke="#000000"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M8.00977 6.25C8.00977 5.18913 8.43119 4.17172 9.18134 3.42157C9.93148 2.67142 10.9489 2.25 12.0098 2.25C13.0706 2.25 14.0881 2.67142 14.8382 3.42157C15.5883 4.17172 16.0098 5.18913 16.0098 6.25"
                                    stroke="#000000"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </span>
                    </button>
                    <button>
                        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                {" "}
                                <circle cx="12" cy="9" r="3" stroke="#181818" stroke-width="1.5"></circle>{" "}
                                <circle cx="12" cy="12" r="10" stroke="#181818" stroke-width="1.5"></circle>{" "}
                                <path
                                    d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20"
                                    stroke="#181818"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                ></path>{" "}
                            </g>
                        </svg>
                    </button>
                    <button className="font-bold text-lg">En</button>
                </div>
            </div>
        </header>
    );
}
