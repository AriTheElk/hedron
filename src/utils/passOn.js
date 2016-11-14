import React from 'react';
// This is an undocumented utility that is subject to change.
// Please do not use this externally. Eventually I will likely
// expose it once it's been cleaned and made reusable.
//
// The passOn function applies a specific set of properties
// to the children components. It will only apply the props
// to a component type that exists in the ofTypes array.
export default function(children, ofTypes, process = r => r) {
  const response = React.Children.map(children,
    child => React.cloneElement(child,
      // Check to see if the child's component type is whitelisted,
      // and then process it.
      ofTypes.includes(child.type) ? process(child) : { }
    )
  );
  return response;
}

