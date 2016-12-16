// @flow

import { css } from 'styled-components';

const sizes = {
  sm: 500,
  md: 768,
  lg: 1100,
};

export default Object.keys(sizes).reduce((acc, label) => {
  const accumulator = acc;
  accumulator[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});
