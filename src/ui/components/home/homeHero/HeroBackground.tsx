import React, { useRef } from "react";
import Image from "next/image";
import bgHero from "../../../../../public/images/bg-hero.png";

export default function HeroBackground() {
    return (
        <div className="hero-bg-wrapper absolute top-0 left-0 -z-10 w-full h-full">
            <div className="bg absolute top-0 left-0 w-full h-full overflow-hidden">
                <Image src={bgHero} alt="Hero image" priority className="image w-full h-full object-cover" />
            </div>
        </div>
    );
}
