// @flow
import styled from "styled-components";
import { withLayout } from "./LayoutProvider";
import { breakpoint, applyBreakpointStyle } from "../utils";
import { applyStyle } from '../utils/styles';

const applyWidth = (rule, value, defaultValue = '') => {
  switch (typeof value) {
  case 'string':
    return `${rule}: ${value};`;
  case 'object':
    return Object.keys(value).map(key =>
      breakpoint(key, (props, name) => `${rule}: ${value[key]};`)
    );
  default:
    return defaultValue;
  }
}

const compute = name =>
  breakpoint(name, (props, name) =>
    `${applyBreakpointStyle('width', props.width, name)};
     ${applyBreakpointStyle('margin-left', props.shift, name)};
     ${applyBreakpointStyle('flex-grow', props.grow, name)};
     ${applyBreakpointStyle('flex', props.flex, name)};`
  );

const Box = styled.div`
  box-sizing: border-box;
  display: ${props => props.noFlex ? "block" : "flex"};
  flex-direction: column;
  overflow: auto;
  ${props => applyStyle(props.debug && props.debug.enabled, ['background: rgba(0, 0, 100, .15)', 'outline: 1px solid #fff'])};
  ${props => applyStyle(props.gutter && !props.fluid, [`padding: ${props.gutter}px ${props.gutter / 2}px`])};
  ${compute("xs")}
  ${compute("sm")}
  ${compute("md")}
  ${compute("lg")}
`;

export default withLayout(Box);
