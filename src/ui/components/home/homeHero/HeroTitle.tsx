import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { bebasNue } from "@/ui/styles/fonts";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function HeroTitle() {
    const heroTexts: string[] = ["CASUAL", "COMFORT", "MEETS", "TRENDY"];

    useGSAP(() => {
        gsap.fromTo(".word0__char0", { yPercent: -100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 1 });
        gsap.fromTo(".word0__char1", { opacity: 0 }, { opacity: 1, duration: 1 });
        gsap.fromTo(".word0__char2", { xPercent: -100, opacity: 0 }, { xPercent: 0, opacity: 1, duration: 1 });
        gsap.fromTo(".word0__char3", { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 1.2 });
        gsap.fromTo(".word0__char4", { yPercent: -100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 1 });
        gsap.fromTo(".word0__char5", { xPercent: 200, opacity: 0 }, { xPercent: 0, opacity: 1, duration: 1.5, ease: "power3.out" });

        gsap.fromTo(".word1__char0", { xPercent: -100, opacity: 0 }, { xPercent: 0, opacity: 1, duration: 1 });
        gsap.fromTo(".word1__char1", { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 1 });
        gsap.fromTo(".word1__char2", { opacity: 0 }, { opacity: 1, duration: 1 });
        gsap.fromTo(".word1__char3", { xPercent: 100, opacity: 0 }, { xPercent: 0, opacity: 1, duration: 1 });
        gsap.fromTo(".word1__char4", { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 1 });
        gsap.fromTo(".word1__char5", { yPercent: -100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 1 });
        gsap.fromTo(".word1__char6", { opacity: 0 }, { opacity: 1, duration: 1 });

        gsap.fromTo(".word2__char0", { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 1, ease: "power2.out" });
        gsap.fromTo(".word2__char1", { xPercent: 100, opacity: 0 }, { xPercent: 0, opacity: 1, duration: 1 });
        gsap.fromTo(".word2__char2", { scale: 1.2, opacity: 0 }, { scale: 1, opacity: 1, duration: 1 });
        gsap.fromTo(".word2__char3", { xPercent: -100, opacity: 0 }, { xPercent: 0, opacity: 1, duration: 1 });
        gsap.fromTo(".word2__char4", { yPercent: -100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 1 });

        gsap.fromTo(".word3__char0", { xPercent: -100, opacity: 0 }, { xPercent: 0, opacity: 1, duration: 1 });
        gsap.fromTo(".word3__char1", { xPercent: 100, opacity: 0 }, { xPercent: 0, opacity: 1, duration: 1 });
        gsap.fromTo(".word3__char2", { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 1 });
        gsap.fromTo(".word3__char3", { yPercent: -100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 1 });
        gsap.fromTo(".word3__char4", { opacity: 0 }, { opacity: 1, duration: 1 });
        gsap.fromTo(".word3__char5", { scale: 1.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 1 });
    }, []);
    return (
        <div className={`${bebasNue.className} hero__title text-off-white text-[13vw] flex flex-col gap-0 leading-[.75] pt-52`}>
            {heroTexts.map((word, wordIndex) => (
                <span key={wordIndex} className={`word${wordIndex} inline-block`} style={{ "--word-index": wordIndex } as React.CSSProperties}>
                    {word
                        .toUpperCase()
                        .split("")
                        .map((char, charIndex) => (
                            <span
                                data-char={char}
                                key={charIndex}
                                className={`char word${wordIndex}__char${charIndex} inline-block relative`}
                                style={
                                    {
                                        "--char-index": charIndex,
                                    } as React.CSSProperties
                                }
                            >
                                {char}
                            </span>
                        ))}
                </span>
            ))}
        </div>
    );
}
