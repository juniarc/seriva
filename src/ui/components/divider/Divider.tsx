"use client";

import { bebasNue } from "@/ui/styles/fonts";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Divider() {
    const dividerContentRef1 = useRef(null);
    const dividerContentRef2 = useRef(null);
    useGSAP(() => {
        gsap.fromTo(
            dividerContentRef1.current,
            {
                xPercent: -100,
            },
            {
                xPercent: 0,
                repeat: -1,
                duration: 20,
                ease: "none",
            },
        );
        gsap.fromTo(
            dividerContentRef2.current,
            {
                xPercent: -100,
            },
            {
                xPercent: 0,
                ease: "none",
                repeat: -1,
                duration: 20,
            },
        );
    });
    return (
        <div className="divider bg-dark-gray max-w-full overflow-hidden h-20 mobile:h-auto mobile:py-2 flex">
            <div ref={dividerContentRef1} className="divider__content1 flex items-center min-w-fit h-full gap-5 overflow-hidden">
                <div className="bg-off-white min-w-4 min-h-4 mobile:min-w-2 mobile:min-h-2 rounded-full"></div>
                <p className={`${bebasNue.className} text-off-white min-w-fit tracking-wider text-3xl mobile:text-sm text-nowrap`}>
                    SERIVA SEPTEMBER DISCOUNT is now up to 50% off!
                </p>
                <div className="bg-off-white min-w-4 min-h-4 mobile:min-w-2 mobile:min-h-2 rounded-full"></div>
                <p className={`${bebasNue.className} text-off-white min-w-fit tracking-wider text-3xl mobile:text-sm text-nowrap`}>
                    SERIVA SEPTEMBER DISCOUNT is now up to 50% off!
                </p>
                <div className="bg-off-white min-w-4 min-h-4 mobile:min-w-2 mobile:min-h-2 rounded-full"></div>
                <p className={`${bebasNue.className} text-off-white min-w-fit tracking-wider text-3xl mobile:text-sm text-nowrap`}>
                    SERIVA SEPTEMBER DISCOUNT is now up to 50% off!
                </p>
            </div>
            <div ref={dividerContentRef2} className="divider__content2 ml-5 flex items-center min-w-fit h-full gap-5 overflow-hidden">
                <div className="bg-off-white min-w-4 min-h-4 mobile:min-w-2 mobile:min-h-2 rounded-full"></div>
                <p className={`${bebasNue.className} text-off-white min-w-fit tracking-wider text-3xl mobile:text-sm text-nowrap`}>
                    SERIVA SEPTEMBER DISCOUNT is now up to 50% off!
                </p>
                <div className="bg-off-white min-w-4 min-h-4 mobile:min-w-2 mobile:min-h-2 rounded-full"></div>
                <p className={`${bebasNue.className} text-off-white min-w-fit tracking-wider text-3xl mobile:text-sm text-nowrap`}>
                    SERIVA SEPTEMBER DISCOUNT is now up to 50% off!
                </p>
                <div className="bg-off-white min-w-4 min-h-4 mobile:min-w-2 mobile:min-h-2 rounded-full"></div>
                <p className={`${bebasNue.className} text-off-white min-w-fit tracking-wider text-3xl mobile:text-sm text-nowrap`}>
                    SERIVA SEPTEMBER DISCOUNT is now up to 50% off!
                </p>
            </div>
        </div>
    );
}
