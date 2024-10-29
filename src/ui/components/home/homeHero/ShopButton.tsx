import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { bebasNue } from "@/ui/styles/fonts";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ShopButton() {
    useGSAP(() => {
        gsap.fromTo(".shop-button", { opacity: 0 }, { opacity: 1, duration: 1.5 });
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".shop-button",
                start: "top 80%",
                end: "+=640",
                pin: ".shop-button",
                scrub: true,
            },
        });
        tl.fromTo(".shop-button", { scale: 1.3 }, { scale: 1 });
    });
    return (
        <Link
            href="/products"
            className={`${bebasNue.className} shop-button w-fit text-nowrap mix-blend-screen text-4xl border-2 rounded-lg bg-off-white py-2 px-6`}
        >
            SHOP NOW
        </Link>
    );
}
