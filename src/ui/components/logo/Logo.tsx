"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/logos/logo.png";
import blackLogo from "../../../../public/logos/logo-black.png";
import mobileLogo from "../../../../public/logos/logo-3-black.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface AnimateLogoColorType {
    triggerElement: string;
    endTriggerElement: string;
    onEnterTheme: string;
    onLeaveTheme: string;
    onLeaveBackTheme: string;
}

gsap.registerPlugin(useGSAP);

export default function Logo() {
    const logoRef = useRef<HTMLImageElement>(null);
    const [logoTheme, setLogoTheme] = useState("dark");
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
    const animateLogoColor = ({ triggerElement, endTriggerElement, onEnterTheme, onLeaveTheme, onLeaveBackTheme }: AnimateLogoColorType) => {
        gsap.to(logoRef.current, {
            scrollTrigger: {
                trigger: triggerElement,
                start: "top top",
                endTrigger: endTriggerElement,
                end: "top 10%",
                onEnter: () => setLogoTheme(onEnterTheme),
                onEnterBack: () => setLogoTheme(onEnterTheme),
                onLeave: () => setLogoTheme(onLeaveTheme),
                onLeaveBack: () => setLogoTheme(onLeaveBackTheme),
            },
        });
    };
    useGSAP(() => {
        animateLogoColor({
            triggerElement: ".home-section",
            endTriggerElement: ".collections-section",
            onEnterTheme: "dark",
            onLeaveTheme: "light",
            onLeaveBackTheme: "dark",
        });
        animateLogoColor({
            triggerElement: ".mission-section",
            endTriggerElement: ".footer",
            onEnterTheme: "dark",
            onLeaveTheme: "light",
            onLeaveBackTheme: "light",
        });
    });
    return (
        <Link href="/" className="sticky-logo w-fit z-40">
            {isMobile ? (
                <Image src={mobileLogo} className="w-32" alt="logo" />
            ) : (
                <Image ref={logoRef} src={logoTheme === "dark" ? logo : blackLogo} className="w-16" alt="logo" />
            )}
        </Link>
    );
}
