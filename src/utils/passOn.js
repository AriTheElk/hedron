import React from 'react';

// The passOn function applies a specific set of properties
// to the children components. It will only apply the props
// to a component type that exists in the ofTypes array.
export default function(children, ofTypes, props, callback = r => r) {
  const response = React.Children.map(children,
    child => React.cloneElement(child,
      ofTypes.includes(child.type) ? props : { }
    )
  );
  return callback(response);
}

