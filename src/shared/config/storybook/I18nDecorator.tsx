import { StoryFn } from "@storybook/react";
import { I18nextProvider } from "react-i18next";
import { Suspense } from "react";
import i18n from "../i18n/i18nForStorybook";

export const I18nDecorator = (Story: StoryFn) => {
  return (
    <Suspense fallback={<div>loading translations...</div>}>
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    </Suspense>
  );
};
