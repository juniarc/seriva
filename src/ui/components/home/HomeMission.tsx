"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import bgMission from "../../../../public/images/bg-mission.jpg";
import missionPhoto from "../../../../public/images/mission-photo.jpg";
import { bebasNue } from "@/ui/styles/fonts";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function HomeMission() {
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
                trigger: ".mission-section",
                start: "top top",
                scrub: true,
            },
        });
        tl.to(".mission__bg", {
            yPercent: 50,
            ease: "none",
        })
            .to(".mission__photo", { yPercent: 25, ease: "none" }, "<")
            .to(".mission__location", { yPercent: 250, ease: "none" }, "<");

        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".mission__title",
                start: "top bottom",
            },
        });

        tl2.fromTo(".mission__title", { opacity: 0, yPercent: 100 }, { opacity: 0.5, yPercent: 50, duration: 0.3 }).to(".mission__title", {
            opacity: 1,
            yPercent: 0,
            duration: 0.3,
        });
        tl2.fromTo(".mission__desc", { opacity: 0, yPercent: 100 }, { opacity: 0.5, yPercent: 50, duration: 0.3 }).to(".mission__desc", {
            opacity: 1,
            yPercent: 0,
            duration: 0.3,
        });
    });
    return (
        <div className="w-full h-full relative">
            <div className="mission__bg absolute top-0 left-0 w-full -z-10 h-[1520px] mobile:h-full">
                <Image src={bgMission} className="w-full h-full object-cover object-center" alt="Mission section" />
            </div>
            <div className="w-full h-full flex flex-col items-center pl-10 py-20 pr-36 mobile:p-3">
                <div className="flex flex-col items-center gap-16 mobile:gap-5 mobile:w-full">
                    <h2 className={`mission__title ${bebasNue.className} text-off-white text-6xl mobile:text-2xl mobile:mt-7`}>OUR MISSION</h2>
                    <p className="mission__desc font-extralight text-off-white text-4xl mobile:text-base text-center w-4/5 mobile:w-full">
                        Our mission at Seriva is to provide stylish, comfortable clothing and accessories that inspire confidence and individuality,
                        blending everyday ease with trendy designs for a modern lifestyle
                    </p>
                </div>
                <div className="w-full h-[830px] mobile:h-[300px] mt-20 mobile:mt-8 relative">
                    <div className="mission__photo w-1/3 mobile:w-1/2 h-[830px] mobile:h-[300px] absolute top-0 left-1/2 -translate-x-1/2">
                        <Image src={missionPhoto} className="w-full h-full object-cover object-center" alt="Mission photo" />
                    </div>
                    <div className="h-full flex items-center justify-between">
                        <p className="font-extralight text-off-white text-6xl mobile:text-xl">SIMPLE</p>
                        <p className="font-extralight text-off-white text-6xl mobile:text-xl">STYLISH</p>
                    </div>
                </div>
                <p className="mission__location text-center font-extralight text-off-white text-xl mobile:text-base mt-40 mobile:mt-8 tracking-widest">
                    LOCATION
                </p>
            </div>
        </div>
    );
}
