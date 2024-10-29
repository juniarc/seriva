import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/logos/logo.png";
import blackLogo from "../../../../public/logos/logo-black.png";

interface LogoProps {
    logoTheme: string;
}

export default function Logo({ logoTheme }: LogoProps) {
    return (
        <Link href="/" className="sticky-logo w-fit z-40">
            <Image src={logoTheme === "dark" ? logo : blackLogo} className="w-16" alt="logo" />
        </Link>
    );
}
