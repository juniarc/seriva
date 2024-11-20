"use client";

import React, { useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { BsX, BsList } from "react-icons/bs";
import HeaderDrawer from "./HeaderDrawer";
import HeaderChart from "./HeaderChart";
import HeaderUser from "./HeaderUser";
import HeaderLang from "./HeaderLang";
import HeaderMobile from "./headerMobile/HeaderMobile";
import "../../styles/header/header.css";

gsap.registerPlugin(useGSAP);

export default function Header() {
    const [openDrawer, setOpenDrawer] = useState(false);
    const [openChart, setOpenChart] = useState(false);
    const [openUser, setOpenUser] = useState(false);
    const [openLang, setOpenLang] = useState(false);
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

    const handleLang = () => {
        setOpenLang((prev) => !prev);
    };
    const handleUser = () => {
        setOpenUser((prev) => !prev);
    };
    const handleChart = () => {
        setOpenChart((prev) => !prev);
    };
    const handleMenuButton = () => {
        if (openDrawer) {
            setTimeout(() => {
                setOpenDrawer(false);
            }, 500);
            gsap.to(".header-drawer", {
                xPercent: 150,
                duration: 1,
            });
        }
        if (!openDrawer && !openChart && !openUser && !openLang) {
            setOpenDrawer(true);
        }

        if (openChart) {
            setTimeout(() => {
                setOpenChart(false);
            }, 500);
            gsap.to(".header-chart", {
                xPercent: 150,
                duration: 1,
            });
        }

        if (openUser) {
            setTimeout(() => {
                setOpenUser(false);
            }, 500);
            gsap.to(".header-user", {
                xPercent: 150,
                duration: 1,
            });
        }
        if (openLang) {
            setTimeout(() => {
                setOpenLang(false);
            }, 500);
            gsap.to(".header-lang", {
                xPercent: 150,
                duration: 1,
            });
        }
    };

    useGSAP(() => {
        if (openLang) {
            gsap.fromTo(
                ".header-lang",
                { xPercent: 150 },
                {
                    xPercent: 0,
                    duration: 1,
                    ease: "power3.out",
                },
            );
        }
    }, [openLang]);

    useGSAP(() => {
        if (openUser) {
            gsap.fromTo(
                ".header-user",
                { xPercent: 150 },
                {
                    xPercent: 0,
                    duration: 1,
                    ease: "power3.out",
                },
            );
        }
    }, [openUser]);

    useGSAP(() => {
        if (openDrawer) {
            gsap.fromTo(
                ".header-drawer",
                { xPercent: 150 },
                {
                    xPercent: 0,
                    duration: 1,
                    ease: "power3.out",
                },
            );
        }
    }, [openDrawer]);

    useGSAP(() => {
        if (openChart) {
            gsap.fromTo(
                ".header-chart",
                { xPercent: 150 },
                {
                    xPercent: 0,
                    duration: 1,
                    ease: "power3.out",
                },
            );
        }
    }, [openChart]);

    useGSAP(() => {
        gsap.fromTo(".header__wrapper", { xPercent: 100 }, { xPercent: 0, duration: 1.3, ease: "power3.out" }).delay(1);
    });
    return (
        <header className="header__wrapper bg-white h-screen mobile:h-16 w-[90px] mobile:w-screen z-10 p-3 mobile:pr-3 mobile:top-0">
            {isMobile ? (
                <HeaderMobile
                    openChart={openChart}
                    openDrawer={openDrawer}
                    openUser={openUser}
                    handleChart={handleChart}
                    handleMenuButton={handleMenuButton}
                    handleUser={handleUser}
                />
            ) : (
                <div className="w-full h-full flex flex-col mobile:flex-row justify-between mobile:justify-end items-center relative">
                    <div className="w-fit h-fit">
                        <button onClick={handleMenuButton} className="w-16 h-16 flex justify-center items-center text-4xl">
                            {openDrawer || openChart || openUser || openLang ? <BsX /> : <BsList />}
                        </button>
                        {openDrawer && <HeaderDrawer />}
                    </div>
                    <div className="rotate-90 flex gap-5 w-[460px] mobile:hidden">
                        <p className="text-nowrap">Free Shipping</p>
                        <p className="text-wrap">West Java 60$+ | East Java 100$+ | Outside Java 150$</p>
                    </div>
                    <div className="flex flex-col items-center gap-4 mobile:flex-row">
                        <button onClick={handleChart} className="relative p-2">
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
                        <button onClick={handleUser}>
                            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="9" r="3" stroke="#181818" stroke-width="1.5"></circle>{" "}
                                <circle cx="12" cy="12" r="10" stroke="#181818" stroke-width="1.5"></circle>{" "}
                                <path
                                    d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20"
                                    stroke="#181818"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                ></path>{" "}
                            </svg>
                        </button>
                        <button onClick={handleLang} className="font-bold text-lg mobile:hidden">
                            En
                        </button>
                    </div>
                    {openChart && <HeaderChart />}
                    {openUser && <HeaderUser />}
                    {openLang && <HeaderLang />}
                </div>
            )}
        </header>
    );
}
