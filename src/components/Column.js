/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { divvy, media } from '../utils';


function ColumnContainer(props) {
  const { debug, divisions, fluid, xs, sm, md, lg,
    xsShift, smShift, mdShift, lgShift,
    ...rest } = props;
  return <div {...rest} />;
}

ColumnContainer.propTypes = {
  className: React.PropTypes.string,
  debug: React.PropTypes.bool,
  divisions: React.PropTypes.number,
  fluid: React.PropTypes.bool,
  xs: React.PropTypes.number,
  sm: React.PropTypes.number,
  md: React.PropTypes.number,
  lg: React.PropTypes.number,
  xsShift: React.PropTypes.number,
  smShift: React.PropTypes.number,
  mdShift: React.PropTypes.number,
  lgShift: React.PropTypes.number
};

ColumnContainer.defaultProps = {
  divisions: 12
};

const Column = styled(ColumnContainer)`
  display: block;
  ${props => props.debug ? `background-color: rgba(50, 50, 255, .1);
  border: 1px solid #fff;` : ''}
  box-sizing: border-box;
  ${props => props.fluid ? 'padding: 0;' : 'padding: 20px;'}
  width: 100%;
  ${props => props.xsShift ? `
    margin-left: ${divvy(props.divisions) * props.xsShift}%;
  ` : ''}

  ${media.sm`
    ${props => props.sm ? `
      width: ${divvy(props.divisions) * props.sm}%;
    ` : ''}
    ${props => props.smShift ? `
      margin-left: ${divvy(props.divisions) * props.smShift}%;
    ` : ''}
  `}
  ${media.md`
    ${props => props.md ? `
      width: ${divvy(props.divisions) * props.md}%;
    ` : ''}
    ${props => props.mdShift ? `
      margin-left: ${divvy(props.divisions) * props.mdShift}%;
    ` : ''}
  `}
  ${media.lg`
    ${props => props.lg ? `
      width: ${divvy(props.divisions) * props.lg}%;
    ` : ''}
    ${props => props.lgShift ? `
      margin-left: ${divvy(props.divisions) * props.lgShift}%;
    ` : ''}
  `}
`;


export default Column;

