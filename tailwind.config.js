/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        primary:
          "0 2px 4px rgba(7,4,146,.1),0 24px 60px rgba(6,47,125,.05),0 12px 24px rgba(27,59,119,.05)",
        secondary: "0 2px 4px rgba(28,5,77,.1),0 12px 32px rgba(0,0,0,.05)",
      },
      colors: {
        primary: "#eb1933",
        secondary: "#F5F5F5",
      },
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
      },
      borderRadius: {
        primary: "16px",
        secondary: "8px",
      },
    },
  },
  plugins: [],
};
