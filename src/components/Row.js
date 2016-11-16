/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import Column from './Column';
import { divvy, passOn } from '../utils';


function RowContainer(props) {
  const { children, tagName, debug, divisions, ...rest } = props;
  const newChildren = passOn(children, [Column], (child) => {
    return {
      debug: typeof child.props.debug === 'undefined'
        ? debug
        : child.props.debug,
      divisions
    };
  });
  return React.createElement(tagName || 'section', rest, newChildren);
}

RowContainer.propTypes = {
  children: React.PropTypes.node,
  tagName: React.PropTypes.string,
  className: React.PropTypes.string,
  debug: React.PropTypes.bool,
  divisions: React.PropTypes.number
};

RowContainer.defaultProps = {
  divisions: 12
};

const Row = styled(RowContainer)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;


export default Row;

