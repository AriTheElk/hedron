/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { divvy } from '../utils';


function RowContainer(props) {
  const { children, debug, divisions, ...rest } = props;
  const scaledChildren = React.Children.map(children,
    child => React.cloneElement(child, {
      debug,
      divisions
    })
  );
  return <section {...rest}>{scaledChildren}</section>;
}

RowContainer.propTypes = {
  children: React.PropTypes.element,
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

