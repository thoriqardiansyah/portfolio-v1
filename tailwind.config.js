/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        corner: "5px",
      },
      animation: {
        wiggle: "wiggle 3s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": {
            transform: "translateY(-20px)",
            boxShadow: "0px 10px 5px #c4c4c4",
          },
          "50%": { transform: "translateY(0)", boxShadow: "none" },
        },
      },
    },
  },
  plugins: [],
};
