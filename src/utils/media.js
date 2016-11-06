import { css } from 'styled-components';

export default {
  sm: (...args) => css`
    @media (min-width: 500px) {
      ${css(...args)}
    }
  `,
  md: (...args) => css`
    @media (min-width: 768px) {
      ${css(...args)}
    }
  `,
  lg: (...args) => css`
    @media (min-width: 1100px) {
      ${css(...args)}
    }
  `,
};

