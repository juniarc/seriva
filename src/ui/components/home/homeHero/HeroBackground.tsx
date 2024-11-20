"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import bgHero from "../../../../../public/images/bg-hero.png";

gsap.registerPlugin(useGSAP);

export default function HeroBackground() {
    const imageRef = useRef<HTMLImageElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.to(imageRef.current, { scale: 1, duration: 1.5, ease: "power3.out" });
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".home-section",
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
        });

        tl.to(bgRef.current, { yPercent: 50, ease: "none" });
    });
    return (
        <div className="absolute top-0 left-0 -z-10 w-full h-full">
            <div ref={bgRef} className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <Image ref={imageRef} src={bgHero} alt="Hero image" priority className="image w-full h-full object-cover" />
            </div>
        </div>
    );
}
