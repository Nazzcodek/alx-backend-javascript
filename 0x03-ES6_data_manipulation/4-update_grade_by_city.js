export default function updateStudentGradeByCity(arrayObj, city, newGrades) {
  /* eslint-disable no-param-reassign */
  const filterArray = arrayObj.filter((obj) => obj.location === city);
  return filterArray.map((newObj) => {
    for (const object of newGrades) {
      if (object.studentId === newObj.id && 'grade' in object) {
        newObj.grade = object.grade;
        return newObj; // Return the updated object and exit the loop
      }
    }

    // If grade is not found, set to 'N/B'
    newObj.grade = 'N/B';
    return newObj; // Return the updated object
  });
}
