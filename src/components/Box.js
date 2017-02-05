// @flow
import styled from 'styled-components';
import { withBreakpoints } from './BreakpointProvider';
import { divvy, breakpoint } from '../utils';

const compute = name =>
  breakpoint(name, (props, name) =>
    ((divisions, size = null, shift = null) => `
      ${size ? `width: ${divvy(divisions, size)}%;` : ''}
      ${shift ? `margin-left: ${divvy(divisions, shift)}%;` : ''}
    `)(props.divisions, props[name], props[`${name}Shift`]));

const Box = styled.div`
  display: block;
  ${props => props.debug &&
    'background: rgba(50, 50, 255, .1); border: 1px solid #fff;'}
  box-sizing: border-box;
  ${props =>
    props.fluid ? 'padding: 0;' : 'padding: 20px;'
  }
  width: 100%;
  ${compute('xs')}
  ${compute('sm')}
  ${compute('md')}
  ${compute('lg')}
`;

export default withBreakpoints(Box);
