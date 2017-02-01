// @flow
/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import Column from './Column';
import Hidden from './Hidden';
import { divvy, passOn } from '../utils';

type Props = {
  children?: Array<React.Element<>>,
  className?: string,
  debug?: boolean,
  tagName?: string,
  theme?: Object,
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
  const { children, tagName, debug, divisions, theme,
    alignContent, alignItems, alignSelf, justifyContent, order,
    ...rest } = props;
  const newChildren = passOn(children, [Column, Hidden], (child) => {
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

const ifDefined = (prop, css = prop) =>
  props => props[prop] ? `${css}: ${props[prop]}` : '';

const Row = styled(RowContainer)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  ${ifDefined('alignContent', 'align-content')}
  ${ifDefined('alignItems', 'align-items')}
  ${ifDefined('alignSelf', 'align-self')}
  ${ifDefined('justifyContent', 'justify-content')}
  ${ifDefined('order')}
`;


export default Row;

