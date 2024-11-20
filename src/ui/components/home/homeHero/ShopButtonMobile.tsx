import React from "react";
import Link from "next/link";
import { bebasNue } from "@/ui/styles/fonts";

export default function ShopButtonMobile() {
    return (
        <Link
            href="/products"
            className={`${bebasNue.className} w-fit text-nowrap mix-blend-screen text-sm border-2 rounded-lg bg-off-white py-0 px-3`}
        >
            SHOP NOW
        </Link>
    );
}
