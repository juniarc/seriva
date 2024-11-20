import React from "react";
import Link from "next/link";
import { bebasNue } from "@/ui/styles/fonts";

export default function HeaderDrawerMobile() {
    return (
        <div className="header-drawer absolute top-0 right-[90px] z-10 bg-white h-full p-10">
            <h2 className={`${bebasNue.className} text-3xl`}>SHOP</h2>
            <div className="mt-20 flex flex-col gap-10">
                <Link href="*" className={`${bebasNue.className} text-4xl text-nowrap`}>
                    All Products
                </Link>
                <Link href="*" className={`${bebasNue.className} text-4xl text-nowrap`}>
                    Collections
                </Link>
                <Link href="*" className={`${bebasNue.className} text-4xl text-nowrap`}>
                    About Seriva
                </Link>
                <Link href="*" className={`${bebasNue.className} text-4xl text-nowrap`}>
                    Contact Us
                </Link>
            </div>
        </div>
    );
}
