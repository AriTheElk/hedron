import { configure, addParameters } from "@storybook/react";
// import { themes } from "@storybook/theming";
import theme from "./theme";

addParameters({
  options: {
    theme,
  },
});

configure(require.context("../stories", true, /.(js|mdx)$/), module);
