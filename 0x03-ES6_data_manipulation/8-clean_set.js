export default function cleanSet(set, startString) {
  let joinString = '';
  if (typeof startString !== 'string' || startString === '') return '';
  for (const i of set) {
    if (i !== undefined && i.startsWith(startString)) {
      const remString = i.slice(startString.length);
      joinString = joinString.concat('-', remString);
    }
  }
  return joinString.trim().slice(1);
}
