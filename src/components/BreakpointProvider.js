// @flow
/* globals ReactClass */
import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import { defaultBreakpoints } from '../utils';

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

  static contextTypes = {
    breakpoints: breakpointsShape,
  };

  static childContextTypes = {
    breakpoints: breakpointsShape,
  };

  getChildContext() {
    const { breakpoints: propsBreakpoints = {} } = this.props;
    const { breakpoints: contextBreakpoints = {} } = this.context;

    return {
      breakpoints: {
        ...defaultBreakpoints, ...contextBreakpoints, ...propsBreakpoints,
      },
    };
  }

  render() {
    return Children.only(this.props.children);
  }
}

export const withBreakpoints = (WrappedComponent: ReactClass<mixed>) =>
  // eslint-disable-next-line react/no-multi-comp
  class Breakpoints extends Component { // eslint-disable-line  react/prefer-stateless-function
    static contextTypes = {
      breakpoints: breakpointsShape,
    };

    render() {
      const { breakpoints } = this.context;

      return <WrappedComponent {...this.props} breakpoints={breakpoints} />;
    }
  };
