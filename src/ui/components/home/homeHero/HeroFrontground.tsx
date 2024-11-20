"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function HeroFrontground() {
    const frontgroundRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    useGSAP(() => {
        gsap.to(frontgroundRef.current, { yPercent: -100, duration: 1, ease: "power3.out" });
    });
    return <div ref={frontgroundRef} className="absolute top-0 left-0 w-full h-screen bg-off-white z-10"></div>;
}
