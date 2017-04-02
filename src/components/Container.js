// @flow
import React from "react";
import styled from "styled-components";
import { withLayout } from "./LayoutProvider";
import { horizontalAlign, verticalAlign } from "../utils/flex";
import passOn from "../utils/passOn";

const containerDirectionError = "Container direction must be `horizontal` or `vertical`";

const directionToFlex = direction => {
  if (direction === "vertical") {
    return "column";
  } else if (direction === "horizontal") {
    return "row";
  }
  throw Error(containerDirectionError);
};

const Wrapper = styled.div`
  display: flex;
  max-width: 100%;
  min-height: 1px;
  ${props => props.wrap && "flex-wrap: wrap;"}
  ${props => props.grow && `flex-grow: 1;`}
  ${props => props.height && `height: ${props.height};`}
  ${props => props.direction && `flex-direction: ${directionToFlex(props.direction)}`}
  ${props => props.hAlign && horizontalAlign(props.hAlign, props.direction)}
  ${props => props.vAlign && verticalAlign(props.vAlign, props.direction)}
`;

Wrapper.defaultProps = {
  direction: "horizontal"
};

const Container = ({ children, ...props }) => {
  return (
    <Wrapper {...props}>
      {passOn(children, child => ({
        xs: child.props.xs ||
          (child.props.direction === "horizontal" && 12 / children.length)
      }))}
    </Wrapper>
  );
};

export default withLayout(Container);
