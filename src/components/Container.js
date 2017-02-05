// @flow
import styled from 'styled-components';
import { withBreakpoints } from './BreakpointProvider';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
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

export default withBreakpoints(Container);
