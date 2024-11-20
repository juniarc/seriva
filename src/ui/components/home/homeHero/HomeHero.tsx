import "../../../styles/home/homeHero.css";
import dynamic from "next/dynamic";
import React from "react";
import NewProduct from "./NewProduct";
import HeroFrontground from "./HeroFrontground";
import HeroTitle from "./HeroTitle";
import HeroSubtitle from "./HeroSubtitle";
import { ProductItemType } from "@/type/types";

interface HomeHeroType {
    newProduct: ProductItemType;
}

const HeroBackground = dynamic(() => import("./HeroBackground"), { ssr: false });

export default function HomeHero({ newProduct }: HomeHeroType) {
    return (
        <div className="w-full h-[100vw] relative pr-36 mobile:h-auto mobile:pr-3">
            <HeroBackground />
            <div className="flex flex-col justify-between mobile:gap-24 h-full pb-10 pl-10 mobile:p-3 relative">
                <HeroTitle />
                <HeroSubtitle />
                <NewProduct newProduct={newProduct} />
            </div>
            <HeroFrontground />
        </div>
    );
}
