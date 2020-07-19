import serviceReq from '../../../restservices/service_request'
import query from '../../../queries/employeeQuery'
const employeeData = require('../../../fixtures/microservices/testData/employee/employeeData.json')
const { serviceUrls, httpStatus } = require('../../../fixtures/microservices/service_config.json')

describe('Validate POST api status', () => {

    specify('should test status code of POST employee service', () => {
        const employeeQuery = query.getEmployeeQuery(employeeData.name, employeeData.salary, employeeData.age)
        const postRes = serviceReq.postHttp(serviceUrls.employeesPostUrl, employeeQuery, {})
        postRes.then(response => {
            expect(response.status).to.eq(httpStatus.STATUS_200)
            expect(response.body).to.not.be.null
            expect(response.body.status).to.equal('success')

        })
    })

})

