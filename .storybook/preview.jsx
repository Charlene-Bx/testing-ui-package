// import React from "react";
// import { Title } from '@storybook/blocks'

import DocumentationTemplate from './DocumentationTemplate.mdx';
// import '../src/scss/index.scss';

export default {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    options: {
      storySort: {
        order: [
          'Introduction',
          'Foundations',
          'Components',
        ]
      }
    },
    // https://storybook.js.org/docs/writing-docs/autodocs
    docs: {
      page: DocumentationTemplate
      // page: () => (
      //   <>
      //     <Title />
      //   </>
      // )
    }
  }
};
