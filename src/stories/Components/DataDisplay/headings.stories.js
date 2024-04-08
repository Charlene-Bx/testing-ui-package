import Heading from '../../../components/Heading/Heading.vue';
import scssContent from '../../../components/Heading/Heading.scss?raw';

export default {
  title: 'Components/Data Display/Heading',
  
  tags: ['autodocs'],
  args: {
    line1: 'Welcome to your',
    line2: 'brand new design system'
  },
  argTypes: {
    type: { 
      control: 'select', 
      options: ['h1', 'h2', 'h3', 'h4']
    },
    style: { 
      control: 'select', 
      options: ['heading-1', 'heading-2', 'heading-3', 'heading-4']
    }
  },

  render: (args) => ({
    components: { Heading },
    setup() {return { props: { ...args } };},
    template: '<Heading v-bind="props"/>'
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

export const Overview = {
};

export const Heading_1 = {
  args: { type: 'h1', style: 'heading-1' }
};

export const Heading_2 = {
  args: { type: 'h2', style: 'heading-2' }
};

export const Heading_3 = {
  args: { type: 'h2', style: 'heading-3' }
};

export const Heading_4 = {
  args: { type: 'h2', style: 'heading-4' }
};
