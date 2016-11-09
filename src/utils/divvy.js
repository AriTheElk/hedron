// Divvy is a function for dividing up a grid.
// divvy(12) returns: 100 / 12
// This can then be used by the grid system.
// i.e. width: ${divvy(12) * 4};
// This will generate a column 4 units wide.
export default function(divisions) {
  // TODO: add arg for computing offset.
  if (divisions === undefined) {
    return 100 / 12;
  }
  return 100 / divisions;
}

