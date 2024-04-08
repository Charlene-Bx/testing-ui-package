import SocialMedia from '../../../components/Link/Link.vue';
import scssContent from '../../../components/Link/Link.scss?raw';

export default {
  title: 'Components/Navigation/Link',
  
  tags: ['autodocs'],
  args: {
    copyright: 'Made with love as always',
  },

  render: (args) => ({
    components: { SocialMedia },
    setup() {return { props: { ...args } };},
    template: '<SocialMedia v-bind="props"/>'
  }),
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
    docs: {
      source: {
        code: scssContent,
        language: 'css',
      }
    }
  }
};

export const Overview = {};

export const Nude = {};

export const Decorative = {};


