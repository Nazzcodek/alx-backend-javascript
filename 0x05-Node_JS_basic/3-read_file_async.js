const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n');
        const fieldCounts = {};
        const fieldLists = {};
        // eslint-disable-next-line no-plusplus
        for (let i = 1; i < lines.length; i++) {
          const line = lines[i];
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
        }

        console.log(`Number of students: ${lines.length - 2}`);
        Object.keys(fieldCounts).forEach((field) => {
          console.log(`Number of students in ${field}: ${fieldCounts[field]}`);
          console.log(`List: ${fieldLists[field].join(', ')}`);
        });

        resolve();
      }
    });
  });
}

module.exports = countStudents;
