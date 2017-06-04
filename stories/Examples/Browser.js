import React from "react";
import styled from "styled-components";

const sharedStyles = `
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 100%;
`;

const BrowserContainer = styled.div`
    display: block;
    height: 25px;
    background-color: #242424;
    position: relative;
`;

const Icons = styled.span`
    display: block;
    top: 6px;
    left: 8px;
    background-color: rgb(252, 99, 93);
    ${sharedStyles}

    &:before {
        content: '';
        top: 0;
        left: 18px;
        background-color: rgb(253, 191, 65);
        ${sharedStyles}
    }

    &:after {
        content: '';
        top: 0;
        left: 36px;
        background-color: rgb(53, 207, 75);
        ${sharedStyles}
    }
`;

const Browser = () => {
  return (
    <BrowserContainer>
      <Icons />
    </BrowserContainer>
  );
};

export default Browser;
