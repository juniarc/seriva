import React, { useEffect, useRef, useState } from "react";
import { bebasNue } from "@/ui/styles/fonts";
import ShopButton from "./ShopButton";

interface NewProductProps {
    rightProductRef: React.RefObject<HTMLDivElement>;
}

export default function NewProduct({ rightProductRef }: NewProductProps) {
    return (
        <div className="hero__new-product flex">
            <div className="rounded-s-lg w-1/2 bg-off-white flex flex-col items-center">
                <div className="w-full h-4/6 bg-black rounded-tl-lg"></div>
                <div className="w-full h-2/6 flex items-center justify-center">
                    <p className={`${bebasNue.className} text-center text-5xl `}>New Product</p>
                </div>
            </div>
            <div ref={rightProductRef} className="border-2 border-s-0 rounded-e-lg w-1/2 relative">
                <h2 className={`${bebasNue.className} new-product__right__text text-off-white text-7xl`}>New Product</h2>
                <ShopButton />
            </div>
        </div>
    );
}
