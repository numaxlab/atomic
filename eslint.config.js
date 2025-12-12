import eslintConfigCodely from "eslint-config-codely";

export default [
    ...eslintConfigCodely.full,
    {
        rules: {
            "prettier/prettier": ["error", { printWidth: 100, useTabs: false, tabWidth: 4 }],
        },
    },
];
