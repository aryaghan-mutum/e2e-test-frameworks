import serviceReq from '../../../restservices/service_request'
import { asSequence } from 'sequency'
const { serviceUrls } = require('../../../fixtures/microservices/service_config.json')
const { softExpect } = chai

describe('Validate all response fields in Employee Service', () => {

    specify('should test employee id type', () => {
        serviceReq.getHttp(serviceUrls.employeeGetUrl).then(response => {
            asSequence(Cypress.$(response.body.data)).forEach(data => {
                softExpect(data.id).to.be.a('string')
            })
        })
    })

    specify('should test employee name type', () => {
        serviceReq.getHttp(serviceUrls.employeeGetUrl).then(response => {
            asSequence(Cypress.$(response.body.data)).forEach(data => {
                let idType = typeof (data.employee_name) === "string"
                if (!idType) {
                    softExpect(data.employee_name).to.be.a('string', `${data.employee_name} isn't string for id: ${data.id}`)
                }

            })
        })
    })

    specify('should test employee age type', () => {
        serviceReq.getHttp(serviceUrls.employeeGetUrl).then(response => {
            asSequence(Cypress.$(response.body.data)).forEach(data => {
                softExpect(data.employee_age).to.be.a('string')
            })
        })
    })

    specify('should test employee age salary', () => {
        serviceReq.getHttp(serviceUrls.employeeGetUrl).then(response => {
            asSequence(Cypress.$(response.body.data)).forEach(data => {
                softExpect(data.employee_salary).to.be.a('string')
            })
        })
    })


})

