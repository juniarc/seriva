import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import bgProducts from "../../../../../public/images/dummy-1.jpg";
import { bebasNue } from "@/ui/styles/fonts";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function HomeProductsHeader() {
    const bgHeroRef = useRef(null);
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
                trigger: ".products__bg-hero",
                start: `${isMobile ? "top bottom" : "top 90%"}`,
            },
        });
        tl.fromTo(
            ".products__bg-hero",
            { scale: 1.3 },
            {
                height: "100%",
                scale: 1,
                duration: 1,
                ease: "power3.inOut",
            },
        ).fromTo(
            ".products__hero-text",
            {
                height: 0,
            },
            {
                height: "100%",
                ease: "power3.inOut",
                duration: 1,
                delay: 0.3,
            },
            "<",
        );
        tl.fromTo(".products__title-text", { opacity: 0, yPercent: 100 }, { opacity: 0.5, yPercent: 50, duration: 0.2 })
            .to(".products__title-text", {
                opacity: 1,
                yPercent: 0,
                duration: 0.2,
            })
            .fromTo(".products__shop-now", { opacity: 0, yPercent: 100 }, { opacity: 0.5, yPercent: 50, duration: 0.2 })
            .to(
                ".products__shop-now",
                {
                    opacity: 1,
                    yPercent: 0,
                    duration: 0.2,
                },
                "<",
            );
    });
    return (
        <div className="w-full h-80 mobile:h-28 rounded-lg mobile:rounded relative overflow-hidden">
            <div ref={bgHeroRef} className="products__bg-hero w-full h-0">
                <Image src={bgProducts} className="w-full h-full object-cover object-top rounded-lg mobile:rounded" alt="Products hero" />
            </div>
            <div className="products__hero-text w-full h-full absolute top-0 left-0 rounded-lg mobile:rounded">
                <div className="w-full h-full p-20 mobile:p-3 mobile:flex mobile:flex-col mobile:justify-center">
                    <h2 className={`products__title-text ${bebasNue.className} text-white text-7xl mobile:text-3xl mb-10 mobile:mb-1`}>
                        Popular Products
                    </h2>
                    <Link
                        href="*"
                        className={`products__shop-now ${bebasNue.className} products__shop-button text-white w-fit text-3xl mobile:text-base bg-red-pink rounded-lg mobile:rounded px-10 py-2 mobile:py-0 mobile:px-3`}
                    >
                        SHOP NOW
                    </Link>
                </div>
            </div>
        </div>
    );
}
