const {httpMethods} = require('../fixtures/microservices/service_config')

/**
 * Service Request class consists of HTTP procedure definitions 
 */
class ServiceRequest {

    /**
     * @remarks - Return the GET Request
     * @param serviceUrl - End point url of the service
     * @returns A chainable response of a service 
     */
    public getHttp = (serviceUrl: string): Cypress.Chainable<Cypress.Response> => {
        return cy.request(serviceUrl);
    }

    /**
     * @remarks - Return the POST request
     * @param serviceUrl - End point url of the service 
     * @param query - A query for the post request body
     * @param grapghQlVar - A Grapgh QL variable object for the post request body
     * @param failStatus - Used in case when the fail code is not 200/400
     * @returns - An object of post request
     */
    public postHttp = (serviceUrl: string, 
                      query: string, 
                      grapghQlVar?: object, 
                      failStatus?: boolean): Cypress.Chainable<Cypress.Response> => {

        failStatus = typeof(failStatus) == 'undefined' ? false : failStatus;
        const requestBody = this.getRequestBody(query, grapghQlVar);
        return this.postRequest(serviceUrl, requestBody, failStatus);
    }

    /**
     * @remarks - Return the POST request 
     * @param serviceUrl - End point url of the service 
     * @param requestBody - Contains the query and a variable
     * @param failStatus - Used in case when the fail code is not 200 / 400
     * @returns - An object of post request 
     */
    private readonly postRequest = (serviceUrl: string, requestBody: object, failStatus: boolean): Cypress.Chainable<Cypress.Response> => {
        const postReqObj = {
            method: httpMethods.POST_METHOD,
            url: serviceUrl,
            headers: this.getHeaders(),
            body: requestBody,
            failOnStatusCode: failStatus,
            response: []
        }
        return cy.request(postReqObj)
    }

      /**
     * @remarks - Get Request body for the POST request
     * @param query - A query 
     * @param variable - A JSON object variable 
     * @returns {{variables: *, query: *}} - A object of request body
     */
    private readonly getRequestBody = (query: string, variable?: object) => {
        return {query: query, variables: variable}
    }

    /**
     * @remarks - Get HTTP header for requests or for responses
     * @returns {{Accept: string, "Content-Type": string}} An obejct of headers
     */
    private readonly getHeaders = (): object => {
        return {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }
}

export default new ServiceRequest()
