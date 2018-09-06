import PropTypes from "prop-types";
import styled from "styled-components";

import { flex, drawDebug, breakpoints } from "../helpers";
import { withBreakpoints } from "./Provider";
import Base from "./Base";

/**
 * Bounds functions as a container to wrap `Box` components.
 * The only components that should be a direct children of `Bounds`
 * are `Box` or `Bounds`.
 */
export const Bounds = styled(Base("div"))`
  box-sizing: border-box;
  display: flex;
  ${props => props.debug && drawDebug()};
  ${props => flex(props)};
  ${props => breakpoints(props)};
`;

Bounds.propTypes = {
  /**
   * Enable if you want the geometry of the grid exposed
   */
  debug: PropTypes.bool,

  /**
   * Interface for setting the `flex` css property
   */
  flex: PropTypes.string,

  /**
   * The primary axis the children should be in line with
   */
  direction: PropTypes.oneOf(["horizontal", "vertical"]),

  /**
   * Whether children should wrap when there's no more room
   * on the primary axis.
   */
  wrap: PropTypes.bool,

  /**
   * Alignment of children along the vertical axis
   */
  valign: PropTypes.oneOf(["top", "center", "bottom", null]),

  /**
   * Alignment of children along the horizontal axis
   */
  halign: PropTypes.oneOf(["left", "center", "right", null]),
  ...Base.propTypes,
};

Bounds.defaultProps = {
  debug: false,
  direction: "horizontal",
  wrap: false,
  ...Base.defaultProps,
};

export default withBreakpoints(Bounds);
