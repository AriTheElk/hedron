// @flow
/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import Row from './Row';
import Hidden from './Hidden';
import { passOn } from '../utils';

type Props = {
  children?: Array<React.Element<>>,
  className?: string,
  tagName?: string,
  debug?: boolean,
  fluid?: boolean,
  width?: string
}

function PageContainer(props: Props) {
  const { children, tagName, debug, fluid, ...rest } = props;
  const newChildren = passOn(children, [Row, Hidden], (child) => {
    return {
      debug: typeof child.props.debug === 'undefined'
        ? debug
        : child.props.debug,
    };
  });
  return React.createElement(tagName || 'div', rest, newChildren);
}

const Page = styled(PageContainer)`
  ${props =>
    props.fluid
    ? 'width: 100%;'
    : `
      margin: 0 auto;
      max-width: 100%;
      ${props.width
        ? `width: ${props.width};`
        : 'width: 960px;'
      }
    `
  }
`;

export default Page;
