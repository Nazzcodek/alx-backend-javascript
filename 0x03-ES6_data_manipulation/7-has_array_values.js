export default function hasValuesFromArray(set, array) {
  const setArray = new Set([...array]);
  for (const i of setArray) {
    if (![...set].includes(i)) return false;
  }
  return true;
}
