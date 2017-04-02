// @flow
import styled from "styled-components";
import { withLayout } from "./LayoutProvider";
import { breakpoint } from "../utils";
import { applyStyle } from '../utils/styles';

const compute = name =>
  breakpoint(name, (props, name) =>
    ((divisions, size: string, shift: string, gutter) =>
      `
      ${applyStyle(size, [`width: ${size}`])};
      ${applyStyle(shift, [`margin-left: ${shift}`])};
    `)(props.divisions, props[name], props[`${name}Shift`]));

const Box = styled.div`
  box-sizing: border-box;
  display: ${props => props.noFlex ? "block" : "flex"};
  flex-direction: column;
  flex: ${props => props.flex ? props.flex : "1 1 auto"};
  overflow: scroll;
  ${props => applyStyle(props.debug, ['background: rgba(0, 0, 100, .15)', 'outline: 1px solid #fff'])};
  ${props => applyStyle(props.grow, [`flex-grow: ${props.grow === true ? "1" : props.grow};`])};
  ${props => applyStyle(props.gutter, [`padding: ${props.gutter}px ${props.gutter / 2}px;`])};
  ${compute("xs")}
  ${compute("sm")}
  ${compute("md")}
  ${compute("lg")}
`;

export default withLayout(Box);
