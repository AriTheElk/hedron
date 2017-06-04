import media from "./media";

export const breakpoint = (name, getStyle) =>
  props =>
    media[name]
      ? media[name](props.breakpoints)`${props => getStyle(props, name)}`
      : getStyle(props, name);


export const applyBreakpointStyle = (rule, value, breakpoint, { on, off, modifier = v => v } = {}) => {
  switch (typeof value) {
  case 'string':
    return `${rule}: ${modifier(value)};`;
  case 'number':
    return `${rule}: ${modifier(value)};`;
  case 'boolean':
    if (value === true && on) return `${rule}: ${on};`;
    if (value === false && off) return `${rule}: ${off};`;
  case 'object':
    if (typeof value[breakpoint] === 'undefined') return;
    if (value[breakpoint] === true && on) return `${rule}: ${modifier(on)};`;
    if (value[breakpoint] === false && off) return `${rule}: ${modifier(off)};`;
    return `${rule}: ${modifier(value[breakpoint])};`;
  default:
    return;
  }
};
