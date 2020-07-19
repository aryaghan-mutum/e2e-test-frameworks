"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const service_request_1 = __importDefault(require("../../../restservices/service_request"));
const employeeQuery_1 = __importDefault(require("../../../queries/employeeQuery"));
const employeeData = require('../../../fixtures/microservices/testData/employee/employeeData.json');
const { serviceUrls, httpStatus } = require('../../../fixtures/microservices/service_config.json');
describe('Validate POST api status', () => {
    specify('should test status code of POST employee service', () => {
        const employeeQuery = employeeQuery_1.default.getEmployeeQuery(employeeData.name, employeeData.salary, employeeData.age);
        const postRes = service_request_1.default.postHttp(serviceUrls.employeesPostUrl, employeeQuery, {});
        postRes.then(response => {
            expect(response.status).to.eq(httpStatus.STATUS_200);
            expect(response.body).to.not.be.null;
            expect(response.body.status).to.equal('success');
        });
    });
});
//# sourceMappingURL=employee_post.spec.js.map