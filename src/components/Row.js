/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { divvy } from '../utils';


function RowContainer(props) {
  const { divisions, ...rest } = props;
  return <section {...rest} />;
}

RowContainer.propTypes = {
  className: React.PropTypes.string,
  divisions: React.PropTypes.number
};

RowContainer.defaultProps = {
  divisions: 12
};

const Row = styled(RowContainer)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;;
`;


export default Row;

