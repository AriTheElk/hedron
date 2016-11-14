// Divvy is a function for dividing up a grid.
// divvy(12, 6) returns: (100 / 12) * 6
// This can then be used by the grid system.
// i.e. width: ${divvy(12, 4)};
// This will generate a column 4 units wide.
export default function(divisions = 12, span = 1) {
  return (100 / divisions) * span;
}
