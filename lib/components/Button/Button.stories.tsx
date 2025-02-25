import React from "react";
import { Button, ButtonProps, AT_BUTTON_VARIANT } from ".";
import { Meta } from "@storybook/react";
import { StoryFn } from "@storybook/react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
  title: "Component/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label: { control: "text" },
    variant: {
      control: "select",
      // options: Object.values(AT_BUTTON_VARIANT),
      options: [
        AT_BUTTON_VARIANT.PRIMARY,
        AT_BUTTON_VARIANT.SECONDARY,
        AT_BUTTON_VARIANT.TERTIARY,
      ],
    },
    onClick: { action: "clicked" },
  },
};
export default meta;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Button> = (args: ButtonProps) => (
  <Button {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: "Button",
  variant: "PRIMARY",
  onClick: () => alert("clicking primary"),
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
  variant: "SECONDARY",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  label: "Button",
  variant: "TERTIARY",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Button",
  isDisabled: true,
};
