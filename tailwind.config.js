module.exports = {
    darkMode: "class",
    i18n: {
        locales: ["en-US"],
        defaultLocale: "en-US",
    },
    purge: [
        "./components/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    variants: {
        extend: {
            backgroundColor: ["checked"],
            borderColor: ["checked"],
            inset: ["checked"],
            zIndex: ["hover", "active"],
        },
    },
    plugins: [],
    future: {
        purgeLayersByDefault: true,
    },
};
