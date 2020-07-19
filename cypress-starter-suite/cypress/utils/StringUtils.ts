/**
 * A String utility class 
 */
class StringUtils {

    /**
     * Capitalize the first letter of a String
     * @param str - An input string
     * @returns - A string with first char capitalized
     */
    capitalizeFirstLetter = (str: string): string => {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

}

export default new StringUtils()