"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A Date utility class
 */
class DateUtils {
    constructor() {
        /**
         * @remarks - Get today's date based on a format
         * @param format - Date format types. For ex: 'MM-DD-YYYY', 'DD-MM-YYYY', 'YYYY-MM-DD'
         * @returns Today's format
         */
        this.today = (format) => Cypress.moment().format(format);
        /**
         * @remarks - Get tomorrow's date based on a format
         * @param format - Date format types. For ex: 'MM-DD-YYYY', 'DD-MM-YYYY', 'YYYY-MM-DD'
         * @returns Tomorrow's format
         */
        this.tomorrow = (format) => Cypress.moment().add(1, 'days').format(format);
        /**
         * @remarks - Get yesterday's date based on a format
         * @param format - Date format types. For ex: 'MM-DD-YYYY', 'DD-MM-YYYY', 'YYYY-MM-DD'
         * @returns Yesterday's format
         */
        this.yesterday = (format) => Cypress.moment().subtract(1, 'days').format(format);
        /**
         * @remarks - Get current time in hours and min format
         * @returns Current time
         */
        this.currentTime = Cypress.moment().format('HH::mm');
    }
}
exports.default = new DateUtils();
//# sourceMappingURL=DateUtils.js.map