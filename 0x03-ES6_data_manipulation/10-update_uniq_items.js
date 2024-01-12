export default function updateUniqueItems(mapObj) {
  if (!(mapObj instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const [k, v] of mapObj.entries()) {
    if (v === 1) {
      mapObj.set(k, 100);
    }
  }
  return mapObj;
}
