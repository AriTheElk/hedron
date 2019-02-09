import { configure } from "@storybook/react";
import { withOptions } from "@storybook/addon-options";

withOptions({
  name: "Hedron",
});

// automatically import all files ending in *.stories.js
const req = require.context("../stories", true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
