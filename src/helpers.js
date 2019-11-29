import React from "react";
import { css } from "styled-components";

export const drawDebug = () => [
  "background: rgba(0, 255, 255, 0.1);",
  "border: 1px dashed rgba(255, 0, 255, 1);",
];

/**
 * Returns % width based on alias. Returns
 * string with if alias is not passed
 * @param {string} alias
 */
const processAlias = alias => {
  switch (alias) {
    case "half":
      return "50%";
      break;
    case "quarter":
      return "25%";
      break;
    case "third":
      return "33.3333333%";
      break;
    case "twoThirds":
      return "66.666666%";
      break;
    case "threeQuarters":
      return "75%";
      break;
    default:
      return alias;
  }
};

const cssProperties = {
  padding: data => `padding: ${data};`,
  paddingLeft: data => `padding-left: ${data};`,
  paddingRight: data => `padding-right: ${data};`,
  paddingTop: data => `padding-top: ${data};`,
  paddingBottom: data => `padding-bottom: ${data};`,
  margin: data => `margin: ${data};`,
  marginLeft: data => `margin-left: ${data};`,
  marginRight: data => `margin-right: ${data};`,
  marginTop: data => `margin-top: ${data};`,
  marginBottom: data => `margin-bottom: ${data};`,
  width: data => `width: ${processAlias(data)};`,
  height: data => `height: ${processAlias(data)};`,
  visibility: data => `visibility: ${data};`,
  display: data => `display: ${data};`,
  opacity: data => `opacity: ${data};`,
  color: data => `color: ${data};`,
  background: data => `background: ${data};`,
  border: data => `border: ${data};`,
  fontSize: data => `font-size: ${data};`,
  fontWeight: data => `font-weight: ${data};`,
  fontStyle: data => `font-style: ${data};`,
  fontFamily: data => `font-family: ${data};`,
  lineHeight: data => `line-height: ${data};`,
  textTransform: data => `text-transform: ${data};`,
  hidden: () => `display: none;`,
};

/**
 * Returns an array of valid css declarations generated
 * from the react props supplied.
 *
 * @param {array} props list of react props
 */
export const generateStyles = props => {
  const cssProps = [];
  Object.keys(props).map(prop => {
    if (cssProperties[prop]) cssProps.push(cssProperties[prop](props[prop]));
  });
  return cssProps;
};

/**
 * This will parse a breakpoint string (i.e. -500) and return
 * the operation needed to generate a media query
 * @param {string} breakpoint
 */
const parseBreakpoint = breakpoint => {
  switch (breakpoint.charAt(0)) {
    // less than
    case "-":
      return { lt: breakpoint.substring(1) };
      break;
    // more than
    case "+":
      return { gt: breakpoint.substring(1) };
      break;
    // range
    default:
      const range = breakpoint.split("-");
      if (range.length !== 2) {
        console.error(
          "Invalid breakpoint range. The proper syntax for a range is: min-max"
        );
      }
      return { range };
  }
};

/**
 * Generates a media query from a breakpoint operation
 *
 * @param {Object} operation
 */
const media = operation => {
  if (operation.lt) {
    return `@media (max-width: ${operation.lt}px)`;
  } else if (operation.gt) {
    return `@media (min-width: ${operation.gt}px)`;
  } else if (operation.range) {
    return `@media (min-width: ${operation.range[0]}px) and (max-width: ${
      operation.range[1]
    }px)`;
  }
};

/**
 * Generates valid CSS media queries from a component's props
 *
 * @param {Object} props
 */
export const breakpoints = props => {
  if (!props.breakpoints) return null;

  return Object.keys(props.breakpoints).map(
    id =>
      props[id] && [
        css`
          ${media(parseBreakpoint(props.breakpoints[id]))} {
            ${generateStyles(props[id])};
            ${flex(props[id])};
          }
        `,
      ]
  );
};

const translations = {
  direction: {
    horizontal: "row",
    vertical: "column",
  },
  wrap: {
    true: "wrap",
    1: "wrap",
    false: "nowrap",
    0: "nowrap",
  },
  align: {
    top: "flex-start",
    left: "flex-start",
    bottom: "flex-end",
    right: "flex-end",
    center: "center",
    middle: "center",
  },
};

export const flex = ({
  flex,
  fill,
  direction,
  wrap,
  valign,
  halign,
  shiftLeft,
  shiftRight,
  shiftUp,
  shiftDown,
}) => {
  const props = [];
  if (flex) props.push(`flex: ${flex};`);
  if (fill) props.push(`flex: 1 1 auto;`);
  if (direction)
    props.push(`flex-direction: ${translations.direction[direction]};`);
  if (wrap) props.push(`flex-wrap: ${translations.wrap[wrap]};`);

  if (halign) {
    if (direction === "horizontal")
      props.push(`justify-content: ${translations.align[halign]};`);
    else props.push(`align-items: ${translations.align[halign]};`);
  }

  if (valign) {
    if (direction === "horizontal")
      props.push(`align-items: ${translations.align[valign]};`);
    else props.push(`justify-content: ${translations.align[valign]};`);
  }

  if (shiftLeft) props.push("margin-right: auto;");
  if (shiftRight) props.push("margin-left: auto;");
  if (shiftUp) props.push("margin-bottom: auto;");
  if (shiftDown) props.push("margin-top: auto;");

  return props;
};

// eslint-disable-next-line max-len
export const stripBoolean = Element => ({
  debug,
  fluid,
  fill,
  wrap,
  ...props
}) => <Element {...props} />;
