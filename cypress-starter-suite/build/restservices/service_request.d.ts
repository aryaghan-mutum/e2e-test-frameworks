/**
 * Service Request class consists of HTTP procedure definitions
 */
declare class ServiceRequest {
    /**
     * @remarks - Return the GET Request
     * @param serviceUrl - End point url of the service
     * @returns A chainable response of a service
     */
    getHttp: (serviceUrl: string) => Cypress.Chainable<Cypress.Response>;
    /**
     * @remarks - Return the POST request
     * @param serviceUrl - End point url of the service
     * @param query - A query for the post request body
     * @param grapghQlVar - A Grapgh QL variable object for the post request body
     * @param failStatus - Used in case when the fail code is not 200/400
     * @returns - An object of post request
     */
    postHttp: (serviceUrl: string, query: string, grapghQlVar?: object | undefined, failStatus?: boolean | undefined) => Cypress.Chainable<Cypress.Response>;
    /**
     * @remarks - Return the POST request
     * @param serviceUrl - End point url of the service
     * @param requestBody - Contains the query and a variable
     * @param failStatus - Used in case when the fail code is not 200 / 400
     * @returns - An object of post request
     */
    private readonly postRequest;
    /**
   * @remarks - Get Request body for the POST request
   * @param query - A query
   * @param variable - A JSON object variable
   * @returns {{variables: *, query: *}} - A object of request body
   */
    private readonly getRequestBody;
    /**
     * @remarks - Get HTTP header for requests or for responses
     * @returns {{Accept: string, "Content-Type": string}} An obejct of headers
     */
    private readonly getHeaders;
}
declare const _default: ServiceRequest;
export default _default;
