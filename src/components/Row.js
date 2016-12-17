// @flow
/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import Column from './Column';
import { divvy, passOn } from '../utils';

type Props = {
  children?: Array<React.Element<>>,
  className?: string,
  debug?: boolean,
  tagName?: string,
  // grid props
  divisions?: number,
  // flex props
  alignContent?: string,
  alignItems?: string,
  alignSelf?: string,
  justifyContent?: string,
  order?: string
}

function RowContainer(props: Props) {
  const { children, tagName, debug, divisions,
    alignContent, alignItems, alignSelf, justifyContent, order,
    ...rest } = props;
  const newChildren = passOn(children, [Column], (child) => {
    return {
      debug: typeof child.props.debug === 'undefined'
        ? debug
        : child.props.debug,
      divisions,
    };
  });
  return React.createElement(tagName || 'section', rest, newChildren);
}

RowContainer.defaultProps = {
  divisions: 12,
};

const Row = styled(RowContainer)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  ${props => props.alignContent
    ? `align-content: ${props.alignContent};`
    : null
  }
  ${props => props.alignItems
    ? `align-items: ${props.alignItems};`
    : null
  }
  ${props => props.alignSelf
    ? `align-self: ${props.alignSelf};`
    : null
  }
  ${props => props.justifyContent
    ? `justify-content: ${props.justifyContent};`
    : null
  }
  ${props => props.order
    ? `order: ${props.order};`
    : null
  }
`;


export default Row;

