export default function getStudentsByLocation(arrayObj, city) {
  return arrayObj.filter((obj) => obj.location === city);
}
