export default function getStudentIdsSum(arrayObj) {
  const initialValue = 0;
  return arrayObj.reduce((acummulator, obj) => obj.id + acummulator,
    initialValue);
}
