"use client";

import React, { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { bebasNue } from "@/ui/styles/fonts";

gsap.registerPlugin(useGSAP);

export default function ShopButton() {
    const shopBtnRef = useRef<HTMLAnchorElement>(null);

    useGSAP(() => {
        gsap.fromTo(shopBtnRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 });
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: shopBtnRef.current,
                start: "top 80%",
                end: "+=640",
                pin: shopBtnRef.current,
                scrub: true,
            },
        });
        tl.fromTo(shopBtnRef.current, { scale: 1.3 }, { scale: 1 });
    });
    return (
        <Link
            ref={shopBtnRef}
            href="/products"
            className={`${bebasNue.className} shop-button w-fit text-nowrap mix-blend-screen text-4xl border-2 rounded-lg bg-off-white py-2 px-6`}
        >
            SHOP NOW
        </Link>
    );
}
