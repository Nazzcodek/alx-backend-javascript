export default function getListStudentIds(arrayObj) {
  if (!Array.isArray(arrayObj)) {
    return [];
  }

  const arrID = arrayObj.map((obj) => obj.id);
  return arrID;
}
