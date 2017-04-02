// @flow
import styled from "styled-components";
import { withLayout } from "./LayoutProvider";
import { breakpoint } from "../utils";

const compute = name =>
  breakpoint(name, (props, name) =>
    ((divisions, size: string, shift: string, gutter) =>
      `
      ${size ? (size === 'grow' ? 'flex-grow: 1;' : `flex-grow: 0; width: ${size};`) : ""}
      ${shift ? (`margin-left: ${shift};`) : ""}
    `)(props.divisions, props[name], props[`${name}Shift`]));

const Box = styled.div`
  display: flex;
  ${props => props.debug && (props.debug.enabled === true && "background: rgba(0, 0, 100, .15);")}
  ${props => props.debug && (props.debug.border ? `outline: ${props.debug.border};` : "outline: 1px solid #fff;")}   
  box-sizing: border-box;
  ${props => props.grow && `flex-grow: ${props.grow === true ? '1' : props.grow};`}
  ${props => props.gutter && !props.fluid ? `padding: ${props.gutter}px ${props.gutter / 2}px;` : ""}
  ${compute("xs")}
  ${compute("sm")}
  ${compute("md")}
  ${compute("lg")}
`;

export default withLayout(Box);
