import React from "react";
import { injectGlobal } from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withInfo } from "@storybook/addon-info";

import Grid from "../src/index";
import Logo from "./assets/logo.png";
import { Button, Welcome } from "@storybook/react/demo";

injectGlobal`
  body {
    font-family: sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 300;
  }
`;

/**
 * The configuration object to pass to addon-info
 */
const config = {
  source: true,
  inline: true,
  styles: {
    header: {
      h1: { fontSize: "14px", color: "mediumslateblue" },
      h2: { fontSize: "35px" },
    },
    source: { background: "red" },
  },
};

storiesOf("Welcome", module).add("Introduction", () => (
  <Grid.Bounds direction="vertical" halign="center">
    <Grid.Box>
      <img src="https://camo.githubusercontent.com/7c3db76517b738217cf8271d3c5d44bf1cc24c52/687474703a2f2f692e696d6775722e636f6d2f31663949494e382e706e67" />
    </Grid.Box>
    <Grid.Box>
      <h1>Welcome</h1>
    </Grid.Box>
  </Grid.Bounds>
));

storiesOf("Examples", module)
  .add(
    "Basic",
    withInfo(config)(() => (
      <Grid.Provider debug>
        <Grid.Bounds direction="vertical">
          <Grid.Box>Header</Grid.Box>
          <Grid.Box>Content</Grid.Box>
          <Grid.Box>Footer</Grid.Box>
        </Grid.Bounds>
      </Grid.Provider>
    ))
  )
  .add(
    "Breakpoints",
    withInfo(config)(() => (
      <Grid.Provider
        debug
        padding="20px"
        breakpoints={{ sm: "-500", md: "501-750", lg: "+750" }}
      >
        <Grid.Bounds direction="vertical">
          <Grid.Box sm={{ padding: "40px" }}>
            This box gains padding on small devices
          </Grid.Box>
          <Grid.Box sm={{ height: "200px" }}>
            This box gains height on small devices
          </Grid.Box>
          <Grid.Bounds direction="vertical" lg={{ direction: "horizontal" }}>
            <Grid.Box>
              These boxes render side by side on large screens
            </Grid.Box>
            <Grid.Box>
              These boxes render side by side on large screens
            </Grid.Box>
          </Grid.Bounds>
        </Grid.Bounds>
      </Grid.Provider>
    ))
  );
