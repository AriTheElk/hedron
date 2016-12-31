// @flow
/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import Row from './Row';
import Column from './Column';
import { divvy, media, passOn } from '../utils';

type Props = {
  children?: Array<React.Element<>>,
  debug?: boolean,
  xs?: boolean,
  sm?: boolean,
  md?: boolean,
  lg?: boolean
}

function HiddenContainer(props: Props) {
  const { children, debug, xs, sm, md, lg, ...rest } = props;
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
  ${media.sm`
    ${props =>
      props.sm
        ? 'display: none;'
        : 'display: inherit;'
    }
  `}
  ${media.md`
    ${props =>
      props.md
        ? 'display: none;'
        : 'display: inherit;'
    }
  `}
  ${media.lg`
    ${props =>
      props.lg
        ? 'display: none;'
        : 'display: inherit;'
    }
  `}
`;

export default Hidden;
