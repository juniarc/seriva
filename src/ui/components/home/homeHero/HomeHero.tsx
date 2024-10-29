import "../../../styles/home/homeHero.css";
import React, { useRef } from "react";
import { bebasNue } from "@/ui/styles/fonts";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NewProduct from "./NewProduct";
import HeroBackground from "./HeroBackground";
import HeroTitle from "./HeroTitle";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface HomeHeroProps {
    sectionHeight: number;
    sectionRef: React.RefObject<HTMLElement>;
}

export default function HomeHero({ sectionHeight, sectionRef }: HomeHeroProps) {
    const rightProductRef = useRef<HTMLDivElement>(null);
    const subtitleWrapperRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.to(".hero__frontground", { yPercent: -100, duration: 1, ease: "power3.out" });
        gsap.to(".image", { scale: 1, duration: 1.5, ease: "power3.out" });
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
        });

        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: subtitleWrapperRef.current,
                start: "bottom 80%",
                end: "+=100",
                scrub: 1,
            },
        });

        tl.to(".bg", { yPercent: 50, ease: "none" });
        tl2.fromTo(".subtitle__line1", { opacity: 0, yPercent: 100 }, { opacity: 0.5, yPercent: 50, duration: 1 }).to(".subtitle__line1", {
            opacity: 1,
            yPercent: 0,
            duration: 1,
            ease: "power1.in",
        });
        tl2.fromTo(".subtitle__line2", { opacity: 0, yPercent: 100 }, { opacity: 0.5, yPercent: 50, duration: 1 }).to(".subtitle__line2", {
            opacity: 1,
            yPercent: 0,
            duration: 1,
        });
    });
    return (
        <div className="w-full h-[100vw] relative">
            <HeroBackground />
            <div className="flex flex-col justify-between h-full pb-10 pl-10 relative">
                <HeroTitle />
                <div ref={subtitleWrapperRef} className={`${bebasNue.className} hero__subtitle text-off-white text-5xl flex justify-end`}>
                    <div>
                        <h1 className="subtitle__line1">Effortless Style, Everyday Comfort</h1>
                        <h1 className="subtitle__line2">– Complete Your Look with Seriva</h1>
                    </div>
                </div>
                <NewProduct rightProductRef={rightProductRef} />
            </div>
            <div className="hero__frontground absolute top-0 left-0 w-full h-screen bg-off-white z-10"></div>
        </div>
    );
}
