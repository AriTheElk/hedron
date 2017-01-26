// @flow
import { css } from 'styled-components';

export const defaultBreakpoints = {
  sm: 500,
  md: 768,
  lg: 1100,
};

const query = (size, breakpoints = defaultBreakpoints) => (...args) => css`
  @media (min-width: ${breakpoints[size] || defaultBreakpoints[size]}px) {
    ${css(...args)}
  }`;

export default Object.keys(defaultBreakpoints).reduce((acc, label) => {
  const accumulator = acc;
  accumulator[label] = breakpoints => query(label, breakpoints);
  return accumulator;
}, {});
