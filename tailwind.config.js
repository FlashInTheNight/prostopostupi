/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            keyframes: {
                typing: {
                    "0%": {
                        width: "0%",
                        visibility: "hidden",
                    },
                    "100%": {
                        width: "100%",
                    },
                },
                blink: {
                    "50%": {
                        borderColor: "transparent",
                    },
                    "100%": {
                        borderColor: "white",
                    },
                },
            },
            animation: {
                typing: "typing 2s steps(20) infinite alternate, blink .7s infinite",
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#0079f2",
                    secondary: "#0b8252",
                    accent: "#c683db",
                    neutral: "#16181d",
                    "base-100": "#324152",
                    info: "#799af6",
                    success: "#1dc3b5",
                    warning: "#f9a94e",
                    error: "#ed789d",
                },
            },
            "cmyk",
            "dark",
            "dracula",
        ],
    },
};
