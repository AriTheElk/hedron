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

const Hidden = styled(HiddenContainer)`
  ${props =>
    props.xs
      ? 'display: none;'
      : 'display: inherit;'
  }
  ${({ breakpoints }) => media.sm(breakpoints)`
    ${props =>
      props.sm
        ? 'display: none;'
        : 'display: inherit;'
    }
  `}
  ${({ breakpoints }) => media.md(breakpoints)`
    ${props =>
      props.md
        ? 'display: none;'
        : 'display: inherit;'
    }
  `}
  ${({ breakpoints }) => media.lg(breakpoints)`
    ${props =>
      props.lg
        ? 'display: none;'
        : 'display: inherit;'
    }
  `}
`;

export default withBreakpoints(Hidden);
