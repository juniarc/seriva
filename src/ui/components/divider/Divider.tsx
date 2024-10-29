import { bebasNue } from "@/ui/styles/fonts";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Divider() {
    useGSAP(() => {
        gsap.fromTo(
            ".divider__content1",
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
            ".divider__content2",
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
    }, []);
    return (
        <div className="divider bg-dark-gray max-w-full overflow-hidden h-20 flex">
            <div className="divider__content1 flex items-center min-w-fit h-full gap-5 overflow-hidden">
                <div className="bg-off-white min-w-4 min-h-4  rounded-full"></div>
                <p className={`${bebasNue.className} text-off-white min-w-fit tracking-wider text-3xl text-nowrap`}>
                    SERIVA SEPTEMBER DISCOUNT is now up to 50% off!
                </p>
                <div className="bg-off-white min-w-4 min-h-4  rounded-full"></div>
                <p className={`${bebasNue.className} text-off-white min-w-fit tracking-wider text-3xl text-nowrap`}>
                    SERIVA SEPTEMBER DISCOUNT is now up to 50% off!
                </p>
                <div className="bg-off-white min-w-4 min-h-4 rounded-full"></div>
                <p className={`${bebasNue.className} text-off-white min-w-fit tracking-wider text-3xl text-nowrap`}>
                    SERIVA SEPTEMBER DISCOUNT is now up to 50% off!
                </p>
            </div>
            <div className="divider__content2 ml-5 flex items-center min-w-fit h-full gap-5 overflow-hidden">
                <div className="bg-off-white min-w-4 min-h-4 rounded-full"></div>
                <p className={`${bebasNue.className} text-off-white min-w-fit tracking-wider text-3xl text-nowrap`}>
                    SERIVA SEPTEMBER DISCOUNT is now up to 50% off!
                </p>
                <div className="bg-off-white min-w-4 min-h-4 rounded-full"></div>
                <p className={`${bebasNue.className} text-off-white min-w-fit tracking-wider text-3xl text-nowrap`}>
                    SERIVA SEPTEMBER DISCOUNT is now up to 50% off!
                </p>
                <div className="bg-off-white min-w-4 min-h-4 rounded-full"></div>
                <p className={`${bebasNue.className} text-off-white min-w-fit tracking-wider text-3xl text-nowrap`}>
                    SERIVA SEPTEMBER DISCOUNT is now up to 50% off!
                </p>
            </div>
        </div>
    );
}
