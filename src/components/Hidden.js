// @flow
/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import Row from './Row';
import Column from './Column';
import { withBreakpoints } from './BreakpointProvider';
import { divvy, media, passOn } from '../utils';

type Props = {
  children?: Array<React.Element<>>,
  debug?: boolean,
  xs?: boolean,
  sm?: boolean,
  md?: boolean,
  lg?: boolean,
  breakpoints?: Object,
}

function HiddenContainer(props: Props) {
  const { children, debug, xs, sm, md, lg, breakpoints, ...rest } = props;
  const newChildren = passOn(children, [Row, Column], (child) => {
    return {
      debug: typeof child.props.debug === 'undefined'
        ? debug
        : child.props.debug,
    };
  });
  return <div {...rest}>{ newChildren }</div>;
}

const compute = name =>
  props => `display:${props[name] ? 'none' : 'inherit'};`;

const breakpoint = name =>
  ({ breakpoints }) => media[name](breakpoints)`${compute(name)}`;

const Hidden = styled(HiddenContainer)`
  ${compute('xs')}
  ${breakpoint('sm')}
  ${breakpoint('md')}
  ${breakpoint('lg')}
`;

export default withBreakpoints(Hidden);
