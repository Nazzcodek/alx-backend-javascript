export default function iterateThroughObject(reportWithIterator) {
  let allNames = '';
  for (const name of reportWithIterator) {
    if (allNames === '') { allNames = name; } else { allNames = allNames.concat(' | ', name); }
  }
  return allNames;
}
