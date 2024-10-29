import "../../styles/home/homeCollection.css";
import Link from "next/link";
import Image from "next/image";
import { bebasNue } from "@/ui/styles/fonts";
import React from "react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import bgCollections from "../../../../public/images/dummy-1.jpg";

export default function HomeCollections() {
    return (
        <div className="w-full h-fit px-10 py-20 pr-32">
            <div className="flex justify-between">
                <div>
                    <h2 className={`${bebasNue.className} text-5xl`}>Collections</h2>
                </div>
                <div className="flex items-center gap-16">
                    <p className="text-3xl">View All</p>
                    <div className="flex items-center gap-16">
                        <button>
                            <FaArrowLeftLong />
                        </button>
                        <button>
                            <FaArrowRightLong />
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-20 flex gap-10 justify-between">
                <div className="relative w-3/5 h-[1062px]">
                    <div className="w-full h-full rounded-lg absolute left-0 top-0">
                        <Image src={bgCollections} alt="Collections Image" className="w-full h-full object-cover object-center rounded-lg" />
                    </div>
                    <div className="collection__text w-full h-full absolute top-0 left-0 rounded-lg flex justify-center items-center">
                        <h4 className={`${bebasNue.className} text-white text-center text-9xl max-w-[60%]`}>Collection One</h4>
                    </div>
                </div>
                <div className="w-5/12">
                    <div className="h-[558px] w-full">
                        <Image src={bgCollections} alt="Collection Image" className="w-full h-full rounded-lg object-cover object-center" />
                    </div>
                    <div className="mt-10">
                        <h4 className={`${bebasNue.className} text-6xl`}>Collection One</h4>
                        <p className="max-h-[30%] text-2xl mt-10">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </p>
                    </div>
                    <div className="flex mt-10">
                        <Link href="*" className={`${bebasNue.className} bg-red-pink text-off-white text-5xl py-5 w-2/5`}>
                            SHOP
                        </Link>
                        <Link href="*" className="w-3/5 text-center">
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
