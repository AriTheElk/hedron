// @flow
import React, { Component, PropTypes, Children } from 'react';

const breakpointsShape = PropTypes.shape({
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
});

export default class BreakpointProvider extends Component {
  static propTypes = {
    children: PropTypes.node,
    breakpoints: breakpointsShape,
  };

  static childContextTypes = {
    breakpoints: breakpointsShape,
  };

  getChildContext() {
    const { breakpoints } = this.props;

    return { breakpoints };
  }

  render() {
    return Children.only(this.props.children);
  }
}

export const withBreakpoints = (WrappedComponent) => {
  const { breakpoints } = this.context;

  return <WrappedComponent {...this.props} breakpoints={breakpoints} />;
};

withBreakpoints.contextTypes = {
  breakpoints: breakpointsShape,
};
