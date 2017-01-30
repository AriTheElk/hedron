
import media from './media';

const breakpoint = (name, getStyle) =>
  props => media[name]
    ? media[name](props.breakpoints)`${props => getStyle(props, name)}`
    : getStyle(props, name);

export default breakpoint;
