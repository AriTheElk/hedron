import React from 'react';
import styled from 'styled-components';
import { Row, Column } from '../';
import { passOn } from '../utils';


function PageContainer(props) {
  const { children, debug, ...rest } = props;
  const newChildren = passOn(children, [Row, Column], { debug: debug });
  return <div {...rest}>{newChildren}</div>;
}

PageContainer.propTypes = {
  className: React.PropTypes.string,
  debug: React.PropTypes.bool
}

PageContainer.defaultProps = {
  debug: false
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

Page.propTypes = {
  fluid: React.PropTypes.bool,
  width: React.PropTypes.string
};

export default Page;

