"use client";

import React, { useEffect, useState } from "react";
import { bebasNue } from "@/ui/styles/fonts";
import ShopButton from "./ShopButton";
import { ProductItemType } from "@/type/types";
import Image from "next/image";
import ShopButtonMobile from "./ShopButtonMobile";

interface NewProductType {
    newProduct: ProductItemType;
}

export default function NewProduct({ newProduct }: NewProductType) {
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
        <div className="hero__new-product flex">
            <div className="rounded-s-lg w-1/2 bg-off-white flex flex-col items-center">
                <div className="w-full h-4/6 mobile:h-24 rounded-tl-lg overflow-hidden bg-off-white pt-10 mobile:p-3">
                    <Image
                        src={newProduct?.image || ""}
                        width={500}
                        height={1000}
                        className="w-full h-full object-contain object-center mix-blend-multiply"
                        alt="New product"
                    />
                </div>
                <div className="w-full h-2/6 mobile:h-auto flex items-center justify-center mobile:p-1">
                    <p className={`${bebasNue.className} text-center text-3xl mobile:text-base mobile:leading-tight`}>{newProduct?.title}</p>
                </div>
            </div>
            <div className="new-product__right border-2 border-s-0 rounded-e-lg w-1/2 relative">
                <h2 className={`${bebasNue.className} new-product__right__text text-off-white text-7xl mobile:text-2xl`}>New Product</h2>
                {isMobile ? <ShopButtonMobile /> : <ShopButton />}
            </div>
        </div>
    );
}
