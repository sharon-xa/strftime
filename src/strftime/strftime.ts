import { DateFormats, getFormats } from "../formats/formats";
import { isDateValid } from "../utils/validation";

/**
 * Formats a date and time string based on the specified format.
 * Returns a tuple containing the formatted date string and an error (if any).
 *
 * @param {Date} date - The date object to be formatted.
 * @param {string} [format="c"] - The format string specifying the desired date and time format.
 * @returns {[string, Error | null]} A tuple where the first element is the formatted date string 
 *                                   and the second element is an error object if the date is invalid, 
 *                                   otherwise null.
 *
 * @example
 * // Example usage:
 * const [formattedDate, error] = strftime(new Date(), "Y-m-d H:i:s");
 * if (error) {
 *   console.error(error.message);
 * } else {
 *   console.log(formattedDate); // Output: "2024-06-23 15:45:30"
 * }
 */
export function strftime(date: Date, format = "c"): [string, Error | null] {

  if (!isDateValid(date)) {
    return ["", new Error("Invalid date provided")]
  }

  const formats = getFormats(date);

  return [formatDateTime(format, formats), null]
};

/**
  * Formats a date and time string based on the provided format string and token mappings from the formats object.
  */
export function formatDateTime(format: string, formats: DateFormats): string {
  const formattedDateTime: string[] = [];

  format.split(/(\w|.)/m).forEach((type: string | number): void => {
    if (!type)
      return;

    if (typeof formats[type as keyof DateFormats] === "undefined")
      formattedDateTime.push(type.toString());
    else
      formattedDateTime.push(formats[type as keyof DateFormats].toString());
  });

  return formattedDateTime.join("");
}
