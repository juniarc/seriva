"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logoTagline from "../../../../public/logos/logo-2.png";

export default function LogoTagline() {
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
    return (
        <Link href="/" className="logo-tagline w-fit">
            {!isMobile && <Image src={logoTagline} className="w-32" alt="logo tagline" />}
        </Link>
    );
}
