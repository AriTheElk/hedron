export default function(divisions) {
  if (divisions === undefined) {
    return 100 / 12;
  }
  return 100 / divisions;
}

