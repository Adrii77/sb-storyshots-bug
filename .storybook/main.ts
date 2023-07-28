import { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: ['Introduction.mdx', '../src/**/*.stories.@(mdx|ts)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-links'],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};

export default config;
