"use client";

import { Waypoint } from "react-waypoint";
import HomeHero from "@/ui/components/home/homeHero/HomeHero";
import Logo from "@/ui/components/logo/Logo";
import LogoTagline from "@/ui/components/logo/LogoTagline";
import Header from "@/ui/components/header/Header";
import Divider from "@/ui/components/divider/Divider";
// import HomeCollections from "@/ui/components/home/HomeCollections";
import { useEffect, useRef, useState } from "react";
import { useObserveHeightElement } from "@/lib/windowObserver";

export default function Home() {
    const homeSectionRef = useRef(null);
    const [logoTheme, setLogoTheme] = useState("dark");
    const homeSectionHeight = useObserveHeightElement(homeSectionRef);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />
            <Logo logoTheme={logoTheme} />
            <LogoTagline />
            <main className="w-full">
                <Waypoint onEnter={() => setLogoTheme("dark")} onLeave={() => setLogoTheme("light")}>
                    <section ref={homeSectionRef} data-section-theme="dark" className="hero-section w-screen">
                        <HomeHero sectionHeight={homeSectionHeight} sectionRef={homeSectionRef} />
                    </section>
                </Waypoint>
                <Divider />
                {/* <section className="w-screen min-h-screen h-fit bg-off-white" data-section-theme="light">
                    <HomeCollections />
                </section> */}
                <section className="test bg-dark-gray w-full h-[2000px]" data-section-theme="dark"></section>
            </main>
        </>
    );
}
