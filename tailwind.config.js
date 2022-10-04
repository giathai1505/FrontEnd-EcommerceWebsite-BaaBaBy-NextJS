const plugin = require("tailwindcss/plugin");
const screens = {
  phone: "640px",
  laptop: "800px",
  desktop: "1040px",
  "large-desktop": "1270px",
};
const colors = {
  "primary-1": "#EE4C7E",
  "primary-2": "#F6A5BE",
  secondary: "#FDEDF2",
  "grey-1": "#818181",
  "grey-2": "#FAFAFA",
  "grey-3": "#f6f6f6",
  "sematic-1": "#F05252",
  "sematic-2": "#309500",
  "sematic-3": "#DEF7EC",
  "neutral-1": "#111928",
  "neutral-2": "#6B7280",
  "neutral-3": "#E0E0E0",
  "neutral-4": "#EEEEEE",
  "neutral-5": "#F8F8F8",
  "b-1": "#EFFAFA",
  transparent: "rgba(0,0,0,0)",
  table: "rgba(0,0,0,.1)",
  "white-color": "#fff",
  "border-color": "#EEEEEE",
  "black-color": "#300F19",
  "hover-color": "#F3F4F6",
};
const fontSize = {
  DEFAULT: "16px",
  sm: "12px",
  xs: "13px",
  md: "14px",
  lg: "16px",
  xl: "20px",
  xxl: "26px",
  "2xl": "30px",
  "3xl": "36px",
  "4xl": "48px",
};
const renderSpacings = () => {
  const spacing = {
    full: "100%",
    fit: "fit-content",
  };
  // 0px --> 100px | 0px 5px 10px 15px,...
  for (let i = 0; i < 10; i += 0.5) {
    spacing[i] = `${i * 10}px`;
  }
  // 100px --> 1000px | 100px 110px 120px,...
  for (let i = 10; i < 100; i++) {
    spacing[i] = `${i * 10}px`;
  }
  return spacing;
};
const spacing = renderSpacings();
const fontWeight = {
  DEFAULT: 400,
  hairline: 100,
  "extra-light": 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  "extra-bold": 800,
  black: 900,
};
const boxShadow = {
  xs:
    "-4px -4px 8px rgba(177, 177, 177, 0.12), 4px 4px 8px rgba(177, 177, 177, 0.12)",
  md:
    "-8px -8px 16px rgba(177, 177, 177, 0.12), 8px 8px 16px rgba(177, 177, 177, 0.12)",
  lg: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  "as-border":
    "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
};
const borderRadius = {
  tn: "2px", // tiny
  sm: "4px", // small
  md: "6px", // medium
  lg: "8px",
  xl: "10px",
  xxl: "15px",
};
const zIndex = {
  "-1": "-1",
  0: "0",
  10: "10",
  20: "20",
  30: "30",
  40: "40", // for drawer
  50: "50", // for Tooltip
  100: "100", // for Dialog, FullScreenDialog...
};
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  // media: "",
  theme: {
    screens,
    colors,
    fontSize,
    spacing,
    fontWeight,
    boxShadow,
    zIndex,
    maxWidth: {
      ...screens,
      ...spacing,
    },
    extend: {
      gridTemplateColumns: {
        "auto-1fr": "auto 1fr",
        "1fr-auto": "1fr auto",
      },
      borderRadius,
      height: {
        "header-full": "137px",
      },
      width: {
        "w-content": "1120px",
      },
      maxWidth: {
        content: "1120px",
      },
    },
  },
  variants: {
    border: ["last"],
    extend: {
      borderColor: ["group-focus"],
      visibility: ["group-focus"],
      display: ["group-hover"],
      opacity: ["disabled"],
      cursor: ["disabled"],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwind-scrollbar"),
    require("tailwind-scrollbar-hide"),
  ],
};
