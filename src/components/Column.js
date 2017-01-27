// @flow
/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import Row from './Row';
import { withBreakpoints } from './BreakpointProvider';
import { divvy, media, passOn } from '../utils';

type Props = {
  children?: Array<React.Element<>>,
  className?: string,
  tagName?: string,
  theme?: Object,
  debug?: boolean,
  divisions?: number,
  fluid?: boolean,
  xs?: number,
  sm?: number,
  md?: number,
  lg?: number,
  xsShift?: number,
  smShift?: number,
  mdShift?: number,
  lgShift?: number,
  breakpoints?: Object,
}

function ColumnContainer(props: Props) {
  const { children, tagName, debug, divisions, fluid, xs, sm, md, lg, theme,
    xsShift, smShift, mdShift, lgShift, breakpoints,
    ...rest } = props;
  const newChildren = passOn(children, [Row], (child) => {
    return {
      debug: typeof child.props.debug === 'undefined'
        ? debug
        : child.props.debug,
    };
  });
  return React.createElement(tagName || 'div', rest, newChildren);
}

ColumnContainer.defaultProps = {
  divisions: 12,
};

const compute = name => props =>
  ((divisions, size, shift) => `
    ${size ? `width: ${divvy(divisions, size)}%;` : ''}
    ${shift ? `margin-left: ${divvy(divisions, shift)}%;` : ''}
  `)(props.divisions, props[name], props[`${name}Shift`]);

const breakpoint = name =>
  ({ breakpoints }) => media[name](breakpoints)`${compute(name)}`;

const Column = styled(ColumnContainer)`
  display: block;
  ${props => props.debug
    ? `background-color: rgba(50, 50, 255, .1);
       border: 1px solid #fff;`
    : ''
  }
  box-sizing: border-box;
  padding: ${props => props.fluid ? '0' : '20px'};
  width: 100%;
  ${compute('xs')}
  ${breakpoint('sm')}
  ${breakpoint('md')}
  ${breakpoint('lg')}
`;

export default withBreakpoints(Column);
