import React from "react";
import { bebasNue } from "@/ui/styles/fonts";

export default function HeaderChart() {
    return (
        <div className="header-chart absolute top-0 right-[90px] z-10 bg-white h-full p-10">
            <h2 className={`${bebasNue.className} text-3xl`}>Chart</h2>
        </div>
    );
}
