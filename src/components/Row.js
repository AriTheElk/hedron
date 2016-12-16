// @flow

/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import Column from './Column';
import { divvy, passOn } from '../utils';


function RowContainer(props) {
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

RowContainer.propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  debug: React.PropTypes.bool,
  tagName: React.PropTypes.string,
  // grid props
  divisions: React.PropTypes.number,
  // flex props
  alignContent: React.PropTypes.string,
  alignItems: React.PropTypes.string,
  alignSelf: React.PropTypes.string,
  justifyContent: React.PropTypes.string,
  order: React.PropTypes.string,
};

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

