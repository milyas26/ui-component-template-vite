import type { Preview } from "@storybook/react";
import "../lib/tailwind/theme.css";

const preview: Preview = {
  parameters: {
    // actions: { argTypesRegex: "^on[A-Z].*" },
    // controls: {
    //   matchers: {
    //     color: /(background|color)$/i,
    //     date: /Date$/,
    //   },
    // },
  },

  tags: ["autodocs"],
};

export default preview;
