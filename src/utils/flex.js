// @flow
import { css } from "styled-components";

const sizes = {
  sm: 500,
  md: 768,
  lg: 1100
};

export const align = (rule: string, flow: string = "horizontal") =>
  flow === "vertical" ? verticalAlign(rule) : horizontalAlign(rule);

// const flexRule = cssAlignRules[flow];
// const alignRule = alignRules[rule];
// return `${flexRule}: ${alignRule};`;

export const verticalAlign = (rule: string) => {};

export const horizontalAlign = (rule: string) => {};
