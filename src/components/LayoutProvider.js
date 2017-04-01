// @flow
/* globals ReactClass */
import React, { Component, PropTypes, Children } from 'react';
import { defaultBreakpoints } from '../utils';

const defaultDebug = {
  enabled: false,
};

const defaultGutter = 20;

const breakpointsShape = PropTypes.shape({
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
});

const debugShape = PropTypes.shape({
  enabled: PropTypes.bool,
  color: PropTypes.string,
  border: PropTypes.string,
});

export default class LayoutProvider extends Component {
  static propTypes = {
    children: PropTypes.node,
    breakpoints: breakpointsShape,
    gutter: PropTypes.number,
    debug: debugShape,
  };

  static contextTypes = {
    breakpoints: breakpointsShape,
    gutter: PropTypes.number,
    debug: debugShape,
  };

  static childContextTypes = {
    breakpoints: breakpointsShape,
    gutter: PropTypes.number,
    debug: debugShape,
  };

  getChildContext() {
    const {
      breakpoints: propsBreakpoints = {},
      debug: propsDebug = {},
      gutter: propsGutter = 20,
    } = this.props;
    const {
      breakpoints: contextBreakpoints = {},
      debug: contextDebug = {},
      gutter: contextGutter = 20,
    } = this.context;

    return {
      breakpoints: {
        ...defaultBreakpoints, ...contextBreakpoints, ...propsBreakpoints,
      },
      debug: {
        ...defaultDebug, ...contextDebug, ...propsDebug,
      },
      gutter: propsGutter || contextGutter || defaultGutter,
    };
  }

  render() {
    return Children.only(this.props.children);
  }
}

export const withLayout = (WrappedComponent: ReactClass<mixed>) =>
  // eslint-disable-next-line react/no-multi-comp
  class Breakpoints extends Component { // eslint-disable-line  react/prefer-stateless-function
    static contextTypes = {
      breakpoints: breakpointsShape,
      debug: debugShape,
      gutter: PropTypes.number,
    };

    render() {
      const { breakpoints, debug, gutter } = this.context;

      return (
        <WrappedComponent
          {...this.props}
          breakpoints={breakpoints}
          debug={debug}
          gutter={gutter}
        />);
    }
  };
