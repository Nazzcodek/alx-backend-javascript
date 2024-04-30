const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n');

    const fieldCounts = {};

    const fieldLists = {};

    lines.forEach((line) => {
      if (line.trim() !== '') {
        const student = line.split(',');
        const field = student[0];

        if (!fieldCounts[field]) {
          fieldCounts[field] = 1;
          fieldLists[field] = [student[1]];
        } else {
          fieldCounts[field] += 1;
          fieldLists[field].push(student[1]);
        }
      }
    });

    console.log(`Number of students: ${lines.length - 1}`);
    Object.keys(fieldCounts).forEach((field) => {
      console.log(`Number of students in ${field}: ${fieldCounts[field]}`);
      console.log(`List: ${fieldLists[field].join(', ')}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
