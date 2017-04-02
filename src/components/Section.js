// @flow
/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import Hidden from "./Hidden";
import { withLayout } from "./LayoutProvider";

const Page = styled.div`
  ${props => props.fluid ? "width: 100%;" : `
      margin: 0 auto;
      max-width: 100%;
      position: relative;
      ${props.width ? `width: ${props.width};` : "width: 960px;"}
    `}
  ${props => props.height && `height: ${props.height};`}
  ${props => props.absolute && "position: absolute;"}
  ${props => props.top && `top: ${props.top};`}
  ${props => props.bottom && `bottom: ${props.bottom};`}
  ${props => props.left && `left: ${props.left};`}
  ${props => props.right && `right: ${props.right};`}
  ${props => props.height && `height: ${props.height};`}
  ${props => props.width && `width: ${props.width};`}
`;

export default withLayout(Page);
