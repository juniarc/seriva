import "swiper/css";
import "swiper/css/navigation";
import React, { useState, useEffect } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ItemProduct from "./ItemProduct";
import { ProductItemType } from "@/type/types";

interface ListProductType {
    products: ProductItemType[];
}

export default function ListProduct({ products }: ListProductType) {
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
        <div className="mt-10 mobile:mt-3">
            <div>
                <Swiper
                    modules={[Navigation]}
                    slidesPerView={isMobile ? 1 : 4}
                    loop={true}
                    spaceBetween={16}
                    navigation={{ nextEl: ".products__next-button", prevEl: ".products__prev-button" }}
                    className="grid-cols-4"
                >
                    {products.map((item, index) => (
                        <SwiperSlide key={index}>
                            <ItemProduct title={item.title} price={item.price} image={item.image} id={item.id} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="w-full flex justify-end mt-10 gap-4 mobile:mt-3">
                <button className="products__prev-button rounded-full border-solid border-[1px] border-dark-gray w-10 h-10 flex justify-center items-center">
                    <FaArrowLeftLong />
                </button>
                <button className="products__next-button rounded-full border-solid border-[1px] border-dark-gray w-10 h-10 flex justify-center items-center">
                    <FaArrowRightLong />
                </button>
            </div>
        </div>
    );
}
