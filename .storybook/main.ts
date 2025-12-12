import type {StorybookConfig} from "@storybook/html-vite";

const config: StorybookConfig = {
    framework: "@storybook/html-vite",
    stories: [
        '../stories/**/*.mdx',
        '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
    ],
    core: {
        builder: '@storybook/builder-vite',
    },
    staticDirs: ['../dist'],
};

export default config;
