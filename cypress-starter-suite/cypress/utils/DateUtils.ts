/**
 * A Date utility class 
 */
class DateUtils {

    /**
     * @remarks - Get today's date based on a format
     * @param format - Date format types. For ex: 'MM-DD-YYYY', 'DD-MM-YYYY', 'YYYY-MM-DD'
     * @returns Today's format
     */
    today = (format: string): string => Cypress.moment().format(format);

    /**
     * @remarks - Get tomorrow's date based on a format
     * @param format - Date format types. For ex: 'MM-DD-YYYY', 'DD-MM-YYYY', 'YYYY-MM-DD'
     * @returns Tomorrow's format
     */
    tomorrow = (format: string): string => Cypress.moment().add(1, 'days').format(format);

    /**
     * @remarks - Get yesterday's date based on a format
     * @param format - Date format types. For ex: 'MM-DD-YYYY', 'DD-MM-YYYY', 'YYYY-MM-DD'
     * @returns Yesterday's format
     */
    yesterday = (format: string): string => Cypress.moment().subtract(1, 'days').format(format);

    /**
     * @remarks - Get current time in hours and min format
     * @returns Current time
     */
    currentTime = Cypress.moment().format('HH::mm')
}

export default new DateUtils()