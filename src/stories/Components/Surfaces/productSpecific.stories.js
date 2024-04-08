// IMPORT YOUR COMPONENT AND ITS RAW STYLE SHEET
// import YourComponent from '../../../components/YourComponent/YourComponent.vue';
// import scssContent from '../../../components/YourComponent/YourComponent.scss?raw';

export default {
  title: 'Components/Surfaces/Product',
  
  // tags: ['autodocs'],
  args: {
    // ARGUMENTS TO PASS AS PROPS
  },

  render: (args) => ({
    // components: { YourComponent },
    // setup() {return { props: { ...args } };},
    // template: '<SocialMedia v-bind="props"/>',
    template: '<h1> 🚧 WORK IN PROGRESS 🚧 </h1>'
  }),
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
    docs: {
      source: {
        // code: scssContent,
        // language: 'css',
      }
    }
  }
};

export const Overview = {};

export const WatchCard = {};

export const CollectionCard = {};