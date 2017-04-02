// @flow
import styled from "styled-components";
import { withLayout } from "./LayoutProvider";
import { breakpoint } from "../utils";

const compute = name =>
  breakpoint(name, (props, name) =>
    ((divisions, size: string, shift: string, gutter) =>
      `
      ${size ? size === "grow" ? "flex-grow: 1;" : `flex-grow: 0; width: ${size};` : ""}
      ${shift ? `margin-left: ${shift};` : ""}
    `)(props.divisions, props[name], props[`${name}Shift`]));

const debug = debug => {
  if (!debug) return;
  const styles = [];
  if (debug.enabled) {
    styles.push('background: rgba(0, 0, 100, .15);');
    styles.push('outline: 1px solid #fff;');
  }
  return styles;
};

const Box = styled.div`
  box-sizing: border-box;
  display: ${props => props.noFlex ? "block" : "flex"};
  flex-direction: column;
  flex: ${props => props.flex ? props.flex : "1 1 auto"};
  overflow: scroll;
  ${props => debug(props.debug)}
  ${props => props.grow && `flex-grow: ${props.grow === true ? "1" : props.grow};`}
  ${props => props.gutter && !props.fluid ? `padding: ${props.gutter}px ${props.gutter / 2}px;` : ""}
  ${compute("xs")}
  ${compute("sm")}
  ${compute("md")}
  ${compute("lg")}
`;

export default withLayout(Box);
