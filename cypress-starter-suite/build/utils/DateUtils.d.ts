/**
 * A Date utility class
 */
declare class DateUtils {
    /**
     * @remarks - Get today's date based on a format
     * @param format - Date format types. For ex: 'MM-DD-YYYY', 'DD-MM-YYYY', 'YYYY-MM-DD'
     * @returns Today's format
     */
    today: (format: string) => string;
    /**
     * @remarks - Get tomorrow's date based on a format
     * @param format - Date format types. For ex: 'MM-DD-YYYY', 'DD-MM-YYYY', 'YYYY-MM-DD'
     * @returns Tomorrow's format
     */
    tomorrow: (format: string) => string;
    /**
     * @remarks - Get yesterday's date based on a format
     * @param format - Date format types. For ex: 'MM-DD-YYYY', 'DD-MM-YYYY', 'YYYY-MM-DD'
     * @returns Yesterday's format
     */
    yesterday: (format: string) => string;
    /**
     * @remarks - Get current time in hours and min format
     * @returns Current time
     */
    currentTime: string;
}
declare const _default: DateUtils;
export default _default;
