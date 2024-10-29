import type { Config } from "tailwindcss";

const config: Config = {
    mode: "jit",
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/ui/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                "off-white": "#FFF8F2",
                "dark-gray": "#181818",
                "red-pink": "#FF6767",
            },
        },
    },
    plugins: [],
};
export default config;
