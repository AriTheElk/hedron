import media from "./media";

export const breakpoint = (name, getStyle) =>
  props =>
    media[name]
      ? media[name](props.breakpoints)`${props => getStyle(props, name)}`
      : getStyle(props, name);

export const applyBreakpointStyle = (rule, value, breakpoint) => {
  if (value) {
    return value[breakpoint] ? `${rule}: ${value[breakpoint]};` : `${rule}: ${value};`
  }
};
