// @flow
import styled from "styled-components";
import { withLayout } from "./LayoutProvider";
import { breakpoint } from "../utils";

const compute = name =>
  breakpoint(name, (props, name) =>
    ((divisions, size: string, shift: string, gutter) =>
      `
      ${size ? (size === 'grow' ? 'flex-grow: 1;' : `width: ${size};`) : ""}
      ${shift ? (`margin-left: ${shift};`) : ""}
    `)(props.divisions, props[name], props[`${name}Shift`]));

const Box = styled.div`
  display: block;
  ${props => console.warn(props)}
  ${props => props.debug && (props.debug.enabled === true && "background: rgba(0, 0, 100, .15);")}
  ${props => props.debug && (props.debug.border ? `outline: ${props.debug.border};` : "outline: 1px solid #fff;")}   
  box-sizing: border-box;
  ${props => props.grow && `flex-grow: ${props.grow === true ? '1' : props.grow};`}
  ${props => props.gutter ? `
    padding: ${props.gutter}px ${props.gutter / 2}px;
    /*&:first-child {
      padding-left: ${props.gutter}px;
    }
    &:last-child {
      padding-right: ${props.gutter}px;
    }*/` : ""}
  ${compute("xs")}
  ${compute("sm")}
  ${compute("md")}
  ${compute("lg")}
`;

export default withLayout(Box);
