// @flow
/* globals ReactClass */
import React from 'react';
// This is an undocumented utility that is subject to change.
// Please do not use this externally. Eventually I will likely
// expose it once it's been cleaned and made reusable.
//
// The passOn function applies a specific set of properties
// to the children components. It will only apply the props
// to a component type that exists in the ofTypes array.
export default function(
  children: React.Children,
  process: (r: React.Children) => Object = r => r) {
  const response = React.isValidElement(children)
    ? React.cloneElement(children, process(children))
    : React.Children.map(children,
    // Check to see if the child's component type is whitelisted,
    // and then process it.
    child => React.cloneElement(child, process(child))
  );
  return response;
}
