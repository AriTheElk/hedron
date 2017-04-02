// @flow
import { css } from "styled-components";
import { flexCSS } from "../constants";

const sizes = {
  sm: 500,
  md: 768,
  lg: 1100
};

export const verticalAlign = (rule: string, direction: string) =>
  `${flexCSS.vAlign.directions[direction]}: ${flexCSS.vAlign.values[rule]};`;

export const horizontalAlign = (rule: string, direction: string) =>
  `${flexCSS.hAlign.directions[direction]}: ${flexCSS.hAlign.values[rule]};`;
