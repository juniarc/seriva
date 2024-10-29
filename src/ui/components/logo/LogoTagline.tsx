import React from "react";
import Image from "next/image";
import Link from "next/link";
import logoTagline from '../../../../public/logos/logo-2.png'

export default function LogoTagline(){
    return(
        <Link href='/' className="logo-tagline w-fit">
            <Image src={logoTagline} className="w-32" alt="logo tagline" />
        </Link>
    )
}