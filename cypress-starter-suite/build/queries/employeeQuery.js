"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The class comprises of query procedures associated to Employee Queries
 */
class EmployeeQuery {
    constructor() {
        /**
         * @remarks - Get an Employee Query by name, salary and age
         * @param name - An employee name
         * @param salary - An employee salary
         * @param age - An employee age
         * @returns A string of object Employee's info
         */
        this.getEmployeeQuery = (name, salary, age) => {
            return `{
            "name":${name},
            "salary":${salary},
            "age":${age}
        }`;
        };
    }
}
exports.default = new EmployeeQuery();
//# sourceMappingURL=employeeQuery.js.map