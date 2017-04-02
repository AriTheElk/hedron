export const applyStyle = (prop, styles) => {
  if (!prop) return;
  return styles.join(";");
};
