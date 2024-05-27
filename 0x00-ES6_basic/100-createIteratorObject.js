export default function createIteratorObject(report) {
  const result = [];
      for (const department of Object.values(report.allEmployees)) {
      	result.push(...department);
      }
      return result;
}
