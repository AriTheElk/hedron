// @flow

/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import Row from './Row';
import { passOn } from '../utils';

type Props = {
  children: React.Children,
  tagName: ?string,
  debug: ?boolean,
  fluid: ?boolean,
  width: ?string
}

function PageContainer(props: Props) {
  const { children, tagName, debug, fluid, ...rest } = props;
  const newChildren = passOn(children, [Row], (child) => {
    return {
      debug: typeof child.props.debug === 'undefined'
        ? debug
        : child.props.debug,
    };
  });
  return React.createElement(tagName || 'div', rest, newChildren);
}

PageContainer.propTypes = {
  children: React.PropTypes.node,
  tagName: React.PropTypes.string,
  debug: React.PropTypes.bool,
  fluid: React.PropTypes.bool,
  width: React.PropTypes.string,
};

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
