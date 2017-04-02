export const applyStyle = (condition, styles) => {
  if (!condition) return;
  return styles.join(";");
};
