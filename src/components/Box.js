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
  breakpoint(name, (props, name) => [
    applyBreakpointStyle('width', props.width, name),
    applyBreakpointStyle('height', props.height, name),
    applyBreakpointStyle('margin-left', props.shift, name),
    applyBreakpointStyle('flex-grow', props.grow, name, { on: 1, off: 0 }),
    applyBreakpointStyle('flex-shrink', props.shrink, name, { on: 1, off: 0 }),
    applyBreakpointStyle('flex', props.flex, name),
    applyBreakpointStyle('padding', props.gutter, name),
    applyBreakpointStyle('padding', props.fluid, name, { on: '0', off: props.gutter }),
  ]);

const Box = styled.div`
  box-sizing: border-box;
  display: ${props => props.block ? "block" : "flex"};
  flex-direction: column;
  overflow: auto;
  ${props => applyStyle(props.debug && props.debug.enabled, ['background: rgba(0, 0, 100, .15)', 'outline: 1px solid #fff'])};
  ${compute("xs")}
  ${compute("sm")}
  ${compute("md")}
  ${compute("lg")}
`;

Box.defaultProps = {
  shrink: true
};

export default withLayout(Box);
