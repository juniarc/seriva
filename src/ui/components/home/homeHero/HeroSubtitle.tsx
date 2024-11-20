"use client";

import React, { useRef } from "react";
import { bebasNue } from "@/ui/styles/fonts";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function HeroSubtitle() {
    const subtitleWrapperRef = useRef<HTMLDivElement>(null);
    const subtitleLine1Ref = useRef<HTMLHeadingElement>(null);
    const subtitleLine2Ref = useRef<HTMLHeadingElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: subtitleWrapperRef.current,
                start: "bottom 80%",
                end: "+=100",
                scrub: 1,
            },
        });

        tl.fromTo(subtitleLine1Ref.current, { opacity: 0, yPercent: 100 }, { opacity: 0.5, yPercent: 50, duration: 1 }).to(subtitleLine1Ref.current, {
            opacity: 1,
            yPercent: 0,
            duration: 1,
            ease: "power1.in",
        });
        tl.fromTo(subtitleLine2Ref.current, { opacity: 0, yPercent: 100 }, { opacity: 0.5, yPercent: 50, duration: 1 }).to(subtitleLine2Ref.current, {
            opacity: 1,
            yPercent: 0,
            duration: 1,
        });
    });

    return (
        <div
            ref={subtitleWrapperRef}
            className={`${bebasNue.className} hero__subtitle w-full text-off-white text-5xl mobile:text-2xl flex justify-end mobile:justify-start`}
        >
            <div>
                <h1 ref={subtitleLine1Ref}>Effortless Style, Everyday Comfort</h1>
                <h1 ref={subtitleLine2Ref}>– Complete Your Look with Seriva</h1>
            </div>
        </div>
    );
}
