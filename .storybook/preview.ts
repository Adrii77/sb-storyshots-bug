import { provideHttpClient } from '@angular/common/http';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import { Preview, applicationConfig } from '@storybook/angular';

import docJson from './documentation.json';

setCompodocJson(docJson);

const preview: Preview = {
  decorators: [
    applicationConfig({
      providers: [provideHttpClient()],
    }),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
