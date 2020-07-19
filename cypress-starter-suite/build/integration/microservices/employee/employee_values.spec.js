"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const service_request_1 = __importDefault(require("../../../restservices/service_request"));
const { serviceUrls, httpStatus } = require('../../../fixtures/microservices/service_config.json');
const employeeInfo = require('../../../fixtures/microservices/employee/employeeInfo.json');
describe('Validate GET response fields in Employee Service', () => {
    specify('should test employee response for the first object', () => {
        const { employeeIdInfo, employeeNameInfo, employeeSalaryInfo, employeeAgeInfo } = employeeInfo[0].employee;
        service_request_1.default.getHttp(serviceUrls.employeeGetUrl).then(response => {
            const { id, employee_name, employee_salary, employee_age, profile_image } = response.body.data[0];
            expect(response.status).to.eq(httpStatus.STATUS_200);
            expect(response.body.status).to.equal('success');
            expect(response.body).to.not.be.null;
            expect(id).to.equal(employeeIdInfo);
            expect(employee_name).to.equal(employeeNameInfo);
            expect(employee_salary).to.equal(employeeSalaryInfo);
            expect(employee_age).to.equal(employeeAgeInfo.toString());
            expect(profile_image).to.be.empty;
        });
    });
    specify('should test employee response for the second object', () => {
        const { employeeIdInfo, employeeNameInfo, employeeSalaryInfo, employeeAgeInfo } = employeeInfo[1].employee;
        service_request_1.default.getHttp(serviceUrls.employeeGetUrl).then(response => {
            const { id, employee_name, employee_salary, employee_age, profile_image } = response.body.data[1];
            expect(response.status).to.eq(httpStatus.STATUS_200);
            expect(response.body.status).to.equal('success');
            expect(response.body).to.not.be.null;
            expect(id).to.equal(employeeIdInfo);
            expect(employee_name).to.equal(employeeNameInfo);
            expect(employee_salary).to.equal(employeeSalaryInfo);
            expect(employee_age).to.equal(employeeAgeInfo.toString());
            expect(profile_image).to.be.empty;
        });
    });
});
//# sourceMappingURL=employee_values.spec.js.map