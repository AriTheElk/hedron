// @flow
import styled from "styled-components";
import { withLayout } from "./LayoutProvider";
import { divvy, breakpoint } from "../utils";

const compute = name =>
  breakpoint(name, (props, name) =>
    ((divisions, size = null, shift = null, gutter) =>
      `
      ${size ? `width: ${divvy(divisions, size)}%;` : ""}
      ${shift ? `margin-left: ${divvy(divisions, shift)}%;` : ""}
    `)(props.divisions, props[name], props[`${name}Shift`]));

const Box = styled.div`
  display: block;
  ${props => props.debug && (props.debug.enabled === true && "background: rgba(0, 0, 100, .15);")}
  ${props => props.debug && (props.debug.border ? `outline: ${props.debug.border};` : "outline: 1px solid #fff;")}   
  box-sizing: border-box;

  ${props => props.gutter ? `
    padding: ${props.gutter}px ${props.gutter / 2}px;
    /*&:first-child {
      padding-left: ${props.gutter}px;
    }
    &:last-child {
      padding-right: ${props.gutter}px;
    }*/` : ""}
  width: 100%;
  ${compute("xs")}
  ${compute("sm")}
  ${compute("md")}
  ${compute("lg")}
`;

export default withLayout(Box);
