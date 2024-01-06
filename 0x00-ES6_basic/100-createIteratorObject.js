export default function createIteratorObject(report) {
  const employeeInfo = report.allEmployees;
  const employeeValues = [...Object.values(employeeInfo)];
  let iterator = [];
  for (const employee of employeeValues) {
    iterator = [...iterator, ...employee];
  }
  return iterator;
}
