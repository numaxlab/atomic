import type { StorybookConfig } from '@storybook/html-webpack5'

/** @type { import('@storybook/html-webpack5').StorybookConfig } */
const config: StorybookConfig = {
  framework: {
    name: '@storybook/html-webpack5',
    options: {},
  },
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  docs: {
    autodocs: 'tag',
  },
}
export default config
