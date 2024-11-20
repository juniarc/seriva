"use client";

import "../../../styles/home/homeProducts.css";
import React from "react";
import HomeProductsHeader from "./HomeProductsHeader";
import ListProduct from "./ListProduct";
import { ProductItemType } from "@/type/types";

interface HomeProductsType {
    products: ProductItemType[];
}

export default function HomeProducts({ products }: HomeProductsType) {
    return (
        <div className="w-full h-full px-10 pr-36 mobile:p-3 mobile:mt-8">
            <HomeProductsHeader />
            <ListProduct products={products} />
        </div>
    );
}
