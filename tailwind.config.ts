import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/preline/dist/*.ts",
  ],
  theme: {
    container: {
      center: true,
    },

    extend: {
      fontSize: {
        sm: "0.938rem",
        "4.5xl": "2.5rem",
        "2.5xl": "1.75rem",
        "5.5xl": "3.5rem",
        "3.5xl": "2.438rem",
      },
      fontFamily: {
        gillix: ["gillix", "sans-serif"],
        domaine: ["domaine", "sans-serif"],
      },
      colors: {
        primary: "#1943dc",
        secondary: "#020553",
        primaryShade: "#d7e7ff",
        tileShade1: "#B8B6FF",
        lineColor: "#343874",
        lightShade: "#F5F6FA",
        dropdowntext: "#666c80",
      },
      width: {
        88: "88%",
        5: "5%",
        15: "15%",
        70: "70%",
        21: "21rem",
        310: "310px",
      },
      maxWidth: {
        300: "300px",
        200: "200px",
        350: "350px",
      },
      minWidth: {
        135: "135px",
        350: "350px",
        50: "50px",
        55: "55px",

        9: "9rem",
      },
      height: {
        350: "350px",
        450: "450px",
        72: "72px",
        35: "35rem",
      },
      minHeight: {
        180: "11.5rem",
        120: "7.5rem",
        285: "285px",
        550: "550px",
        500: "500px",
        450: "450px",
        200: "200px",
        55: "55px",
        90: "90px",
        52: "52px",
      },
      borderRadius: {
        "20rem": "20rem",
        "15rem": "15rem",
        "10rem": "10rem",
        75: "75px",
      },
      screens: {
        mobile: "640px",
        tablet: "768px",
        laptop: "1000px",
        desktop: "1200px",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
export default config;
