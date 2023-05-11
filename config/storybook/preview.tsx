import type { Preview } from "@storybook/react";
import React from "react";
import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator";
import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator";
import { I18nDecorator } from "../../src/shared/config/storybook/I18nDecorator";
import { RouterDecorator } from "../../src/shared/config/storybook/RouterDecorator";
import { Theme } from "../../src/app/providers/themeProvider";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    I18nDecorator,
    (Story) => (
      <StyleDecorator>
        <Story />
      </StyleDecorator>
    ),
    ThemeDecorator(Theme.LIGHT),
    (Story) => (
      <RouterDecorator>
        <Story />
      </RouterDecorator>
    ),
  ],
};

export default preview;
