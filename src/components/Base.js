import PropTypes from "prop-types";
import styled from "styled-components";

import { generateStyles } from "../helpers";

const Base = element => styled(element)(generateStyles);

Base.propTypes = {
  // Positioning
  padding: PropTypes.string,
  margin: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  // Display
  visibility: PropTypes.string,
  display: PropTypes.string,
  opacity: PropTypes.number,
  // Coloring
  color: PropTypes.string,
  background: PropTypes.string,
  border: PropTypes.string,
  // Text
  fontSize: PropTypes.string,
  fontWeight: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  fontStyle: PropTypes.string,
  fontFamily: PropTypes.string,
  lineHeight: PropTypes.number,
  textTransform: PropTypes.string,
  // Convenience Properties
  hidden: PropTypes.bool,
};

export default Base;
