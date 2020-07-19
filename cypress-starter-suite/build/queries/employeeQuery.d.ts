/**
 * The class comprises of query procedures associated to Employee Queries
 */
declare class EmployeeQuery {
    /**
     * @remarks - Get an Employee Query by name, salary and age
     * @param name - An employee name
     * @param salary - An employee salary
     * @param age - An employee age
     * @returns A string of object Employee's info
     */
    getEmployeeQuery: (name: string, salary: string, age: number) => string;
}
declare const _default: EmployeeQuery;
export default _default;
