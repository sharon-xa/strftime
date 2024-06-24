import { DateFormats, getFormats } from "../formats/formats";
import { isDateValid } from "../utils/validation";

/**
 * Formats a date and time string based on the specified format.
 * Returns a tuple containing the formatted date string and an error (if any).
 * This function can parse text without replacing characters mistakenly.
 *
 * @param {Date} date - The date object to be formatted.
 * @param {string} [format="%c"] - The format string specifying the desired date and time format.
 * @returns {[string, Error | null]} A tuple where the first element is the formatted date string 
 *                                   and the second element is an error object if the date is invalid, 
 *                                   otherwise null.
 *
 * @example
 * // Example usage:
 * const [formattedDate, error] = strftimeWithText(new Date(), "%Y-%m-%d %H:%i:%s");
 * if (error) {
 *   console.error(error.message);
 * } else {
 *   console.log(formattedDate); // Output: "2024-06-23 15:45:30"
 * }
 */
export function strftimeWithText(date: Date, format = "%c"): [string, Error | null] {

  if (!isDateValid(date)) {
    return ["", new Error("Invalid date provided")]
  }

  const formats = getFormats(date);

  return [formatDateTimeWithPercentage(format, formats), null]
};

function formatDateTimeWithPercentage(format: string, formats: DateFormats): string {
  const regex = /(%.)|([^%]+)/g;
  const parts = format.match(regex);

  const formattedStringArr: string[] = [];

  parts.forEach(part => {
    if (part === "%%") formattedStringArr.push("%");

    else if (part.at(0) === "%") formattedStringArr.push(formats[part[1] as keyof DateFormats].toString());

    else formattedStringArr.push(part);
  });

  return formattedStringArr.join("");
}

