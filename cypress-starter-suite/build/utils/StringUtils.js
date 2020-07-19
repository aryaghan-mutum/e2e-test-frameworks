"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A String utility class
 */
class StringUtils {
    constructor() {
        /**
         * Capitalize the first letter of a String
         * @param str - An input string
         * @returns - A string with first char capitalized
         */
        this.capitalizeFirstLetter = (str) => {
            return str.charAt(0).toUpperCase() + str.slice(1);
        };
    }
}
exports.default = new StringUtils();
//# sourceMappingURL=StringUtils.js.map