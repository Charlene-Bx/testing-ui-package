/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',

    // https://github.com/Sidnioulz/storybook-addon-vue-mdx
    // 'storybook-addon-vue-mdx',

    // https://storybook.js.org/addons/@storybook/addon-a11y/
    '@storybook/addon-a11y',

    // https://storybook.js.org/addons/@whitespace/storybook-addon-html
    '@whitespace/storybook-addon-html'
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag',
    defaultName: 'Documentation'
  },
  staticDirs: ['../public'],
};
export default config;
