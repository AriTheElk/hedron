// @flow
import { css } from 'styled-components';

const sizes = {
  sm: 500,
  md: 768,
  lg: 1100,
};

const query = (size, breakpoints = sizes) => (...args) => css`
  @media (min-width: ${breakpoints[size] || sizes[size]}px) {
    ${css(...args)}
  }`;

export default Object.keys(sizes).reduce((acc, label) => {
  const accumulator = acc;
  accumulator[label] = breakpoints => query(label, breakpoints);
  return accumulator;
}, {});
