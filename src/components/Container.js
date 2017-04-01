// @flow
import React from 'react';
import styled from 'styled-components';
import { withBreakpoints } from './BreakpointProvider';

const containerDirectionError =
  'Container direction must be `horizontal` or `vertical`';

const directionToFlex = (direction) => {
  if (direction === 'vertical') {
    return 'column';
  } else if (direction === 'horizontal') {
    return 'row';
  }
  throw Error(containerDirectionError);
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  ${props => props.direction
    && `flex-direction: ${directionToFlex(props.direction)}`
  }

  ${props => props.alignSelf
    ? `align-self: ${props.alignSelf};`
    : null
  }
  ${props => props.justifyContent
    ? `justify-content: ${props.justifyContent};`
    : null
  }
  ${props => props.order
    ? `order: ${props.order};`
    : null
  }
`;

const Container = ({ children, ...props }) => {
  return (
    <Wrapper {...props}>
      {children.map(child => React.cloneElement(child, {
        xs: child.props.xs || (props.direction === 'horizontal' && 12 / children.length),
      }))}
    </Wrapper>
  );
};

export default withBreakpoints(Container);
