import "@/ui/styles/footer/footer.css";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/logos/logo-3.png";
import { bebasNue } from "@/ui/styles/fonts";

export default function Footer() {
    return (
        <footer data-section-theme="dark" className="footer w-screen h-fit bg-dark-gray pl-20 py-20 pr-36 mobile:px-3 mobile:py-8">
            <div className="w-full h-full flex mobile:flex-col mobile:gap-3 items-center">
                <div className="w-2/5 mobile:w-full border-e mobile:border-b mobile:border-e-0 mobile:pb-8 border-off-white">
                    <div className="w-80 mobile:w-auto h-20">
                        <Image src={logo} className="w-full h-full object-cover object-center" alt="Logo" />
                    </div>
                    <p className="w-2/3 mobile:w-full font-extralight text-off-white text-xl mobile:text-base mobile:text-center mt-7">
                        The Products and brand are fictional for private project purpose.
                    </p>
                </div>
                <div
                    className={`${bebasNue.className} grid grid-cols-2 gap-10 w-3/5 mobile:w-full pl-40 mobile:pl-0 text-off-white text-6xl mobile:text-3xl mobile:pt-3`}
                >
                    <Link href="*" className="footer__nav-item mobile:text-center">
                        Products
                    </Link>
                    <Link href="*" className="footer__nav-item mobile:text-center">
                        Collections
                    </Link>
                    <Link href="*" className="footer__nav-item mobile:text-center">
                        About Us
                    </Link>
                    <Link href="*" className="footer__nav-item mobile:text-center">
                        Contact
                    </Link>
                </div>
            </div>
        </footer>
    );
}
