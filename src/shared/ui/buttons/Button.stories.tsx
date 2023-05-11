import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/themeProvider";
import GlobeIcon from "shared/assets/icons/globe.svg";
import { Button, ButtonTheme } from "./Button";

const meta = {
  title: "shared/Button",
  component: Button,
  argTypes: {
    theme: { control: "theme" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Black: Story = {
  args: {
    children: <GlobeIcon />,
    title: "Button",
    theme: ButtonTheme.BLACK,
  },
};
export const BlackDarkTheme: Story = {
  args: {
    children: <GlobeIcon />,
    title: "Button",
    theme: ButtonTheme.BLACK,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Red: Story = {
  args: {
    children: <GlobeIcon />,
    title: "Button",
    theme: ButtonTheme.RED,
  },
};
export const RedDarkTheme: Story = {
  args: {
    children: <GlobeIcon />,
    title: "Button",
    theme: ButtonTheme.RED,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
