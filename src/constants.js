// @flow

// this is the object that holds the css translation
// rules for hedron's 1.0.0 API
export const flexCSS = {
  hAlign: {
    directions: {
      horizontal: "justify-content",
      vertical: "align-items"
    },
    values: {
      start: "flex-start",
      end: "flex-end",
      center: "center",
      stretch: "stretch",
      spaced: "space-between"
    }
  },
  vAlign: {
    directions: {
      horizontal: "align-items",
      vertical: "justify-content"
    },
    values: {
      start: "flex-start",
      end: "flex-end",
      center: "center",
      stretch: "stretch",
      spaced: "space-between"
    }
  }
};
