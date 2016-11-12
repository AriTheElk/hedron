import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
  ${props =>
    props.fluid
    ? 'width: 100%;'
      : `
      margin: 0 auto;
      max-width: 100%;
      ${props.width
        ? `
          width: ${props.width};
        `
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

