import React from "react";
import { bebasNue } from "@/ui/styles/fonts";

export default function HeaderLang() {
    return (
        <div className="header-lang absolute top-0 right-[90px] z-10 bg-white h-full p-10">
            <h2 className={`${bebasNue.className} text-3xl`}>Languages</h2>
        </div>
    );
}
