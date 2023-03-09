const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                ["blue-gray"]: {
                    1000: "#182125",
                },
            },
        },
    },
    plugins: [],
});
