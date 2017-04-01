// @flow
/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { withBreakpoints } from './BreakpointProvider';
import { divvy, breakpoint } from '../utils';

const compute = name =>
  breakpoint(name, (props, name) =>
    `display:${props[name] ? 'none' : 'inherit'};`);

const Hidden = styled.div`
  ${compute('xs')}
  ${compute('sm')}
  ${compute('md')}
  ${compute('lg')}
`;

export default withBreakpoints(Hidden);
