import React from "react";
import Image from "next/image";
import Link from "next/link";
import { bebasNue } from "@/ui/styles/fonts";
import { FaArrowRightLong } from "react-icons/fa6";
import { ProductItemType } from "@/type/types";

export default function ItemProduct({ title, price, image, id }: ProductItemType) {
    return (
        <div className="products__item-wrapper relative h-[468px] mobile:h-96 cursor-pointer overflow-hidden">
            <div className="w-full h-full overflow-hidden bg-off-white flex items-center">
                <Image
                    src={image}
                    className="products__product-img w-full h-3/4 mobile:h-4/5 object-contain object-center mix-blend-multiply"
                    alt={`${title} photo`}
                    width={500}
                    height={1000}
                />
            </div>
            <div className="products__content-bg absolute top-0 left-0 w-full h-full"></div>
            <div className="absolute top-0 left-0 w-full p-5 flex justify-between">
                <div className="products__content rounded-full w-fit px-4 pt-1 border-solid border-[1px] border-dark-gray">
                    <p className={`${bebasNue.className} text-2xl h-fit`}>$ {price}</p>
                </div>
                <Link
                    href="*"
                    className="products__content flex justify-center items-center w-10 h-10 rounded-full border-solid border-[1px] border-dark-gray"
                >
                    <FaArrowRightLong className="-rotate-45" />
                </Link>
            </div>
            <div className="products__content products__product-name opacity-0 absolute bottom-0 left-0 w-full p-5">
                <p className={`${bebasNue.className} w-full text-center text-4xl`}>{title}</p>
            </div>
        </div>
    );
}
