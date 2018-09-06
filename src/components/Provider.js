import React, { Component, Children } from "react";
import PropTypes from "prop-types";

import { Bounds } from "./Bounds";

const defaultBreakpoints = {
  sm: [0, 500],
  md: [501, 768],
  lg: [769, 1100],
};

export default class Provider extends Component {
  static propTypes = {
    children: PropTypes.node,
    breakpoints: PropTypes.object,
    padding: PropTypes.string,
  };

  static contextTypes = {
    breakpoints: PropTypes.object,
    padding: PropTypes.string,
    debug: PropTypes.bool,
  };

  static childContextTypes = {
    breakpoints: PropTypes.object,
    padding: PropTypes.string,
    debug: PropTypes.bool,
  };

  getChildContext() {
    const {
      breakpoints: propsBreakpoints = {},
      padding: propsPadding,
      debug: propsDebug,
    } = this.props;
    const {
      breakpoints: contextBreakpoints = {},
      padding: contextPadding,
      debug: contextDebug,
    } = this.context;

    return {
      breakpoints: {
        ...defaultBreakpoints,
        ...contextBreakpoints,
        ...propsBreakpoints,
      },
      padding: propsPadding || contextPadding || "5px",
      debug: propsDebug || contextDebug || false,
    };
  }

  render() {
    return Children.only(this.props.children);
  }
}

export const withBreakpoints = WrappedComponent =>
  // eslint-disable-next-line react/no-multi-comp
  class extends Component {
    // eslint-disable-line  react/prefer-stateless-function
    static contextTypes = {
      breakpoints: PropTypes.object,
      padding: PropTypes.string,
      debug: PropTypes.bool,
    };

    // inherit displayName from source component
    static displayName = WrappedComponent.displayName || WrappedComponent.name;

    // inherit propTypes from source component
    static propTypes = WrappedComponent.propTypes;

    // inherit defaultProps from source component
    static defaultProps = WrappedComponent.defaultProps;

    render() {
      // console.log(WrappedComponent.propTypes);
      const { breakpoints, padding, debug } = this.context;

      const props = { breakpoints, debug };

      // Hacky method of ignoring some components when applying padding
      if (![Bounds.prototype].includes(WrappedComponent.prototype)) {
        props.padding = padding;
      }

      return <WrappedComponent {...this.props} {...props} />;
    }
  };
