import { DateFormat } from "../types";

/**
  * Extends the Date prototype to format a date and time string based on the specified format.
  * Throws an error if the provided date is invalid.
  */
export function strftime(date: Date, format = "c"): [string, Error | null] {

  if (!isDateValid(date)) {
    return ["", new Error("Invalid date provided")]
  }

  const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const formats: DateFormat = {
    a: days[date.getDay()].substring(0, 3),
    A: days[date.getDay()],
    w: date.getDay(),
    q: pad(date.getDay()),
    d: pad(date.getDate()),
    e: date.getDate(),
    b: month[date.getMonth()].substring(0, 3),
    B: month[date.getMonth()],
    m: date.getMonth() + 1,
    N: pad(date.getMonth() + 1),
    y: pad(date.getFullYear()),
    Y: date.getFullYear(),
    H: date.getHours(),
    h: pad(date.getHours()),
    I: pad(date.getHours() % 12 || 12),
    p: date.getHours() >= 12 ? 'PM' : 'AM',
    o: ord(date.getDate()),
    M: date.getMinutes(),
    i: pad(date.getMinutes()),
    S: date.getSeconds(),
    s: pad(date.getSeconds()),
    f: date.getMilliseconds(),
    c: date.toDateString() + ' - ' + date.toTimeString(),
    x: date.toLocaleDateString(),
    X: date.toLocaleTimeString()
  };

  return [formatDateTime(format, formats), null]
};

// Checks if a given value is a valid Date object.
function isDateValid(date: any): boolean {

  if (date instanceof Date && !isNaN(date.getTime()))
    return true

  return false
}

/**
  * Formats a date and time string based on the provided format string and token mappings from the formats object.
  */
function formatDateTime(format: string, formats: DateFormat): string {
  const formattedDateTime: string[] = [];

  format.split(/(\w|.)/m).forEach((type: string | number): void => {
    if (!type)
      return;

    if (typeof formats[type as keyof DateFormat] === "undefined")
      formattedDateTime.push(type.toString());
    else
      formattedDateTime.push(formats[type as keyof DateFormat].toString());
  });

  return formattedDateTime.join("");
}
