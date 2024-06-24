import { ord, pad } from "../utils/numbersManipulation";

export interface DateFormats {
  a: string;  // Abbreviated weekday name (e.g., Sun, Mon)	Sun
  A: string;  // Full weekday name (e.g., Sunday, Monday)	Sunday

  w: number;  // Day of the week (1-7, where 1 is Sunday)
  q: string;  // Padded day of the week (01-07)

  e: number;  // Day of the month (1-31)
  d: string;  // Padded day of the month (01-31)

  b: string;  // Short month name (e.g., Jan)
  B: string;  // Full month name (e.g., January)
  m: number;  // Month number (1-12)
  N: string;  // Padded month number (01-12)

  y: string;  // Short year (e.g., 22 for 2022)
  Y: number;  // Full year (e.g., 2022)

  H: number;  // Hours (0-23)
  h: string;  // Padded hours (00-23)
  I: string;  // 12-hour format (01-12)
  p: string;  // AM/PM

  o: string;  // Ordinal day of the month (st, nd, rd, th)

  M: number;  // Minutes (0-59)
  i: string;  // Padded minutes (00-59)

  S: number;  // Seconds (0-59)
  s: string;  // Padded seconds (00-59)

  f: number;  // Milliseconds

  c: string;  // Date and time string (e.g., "Thu Jun 22 2023 - 13:45:30 GMT+0100 (GMT+01:00)")
  x: string;  // Localized date string (e.g., "6/22/2023")
  X: string;  // Localized time string (e.g., "1:45:30 PM")
}


export function getFormats(date: Date): DateFormats {
  const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const formats: DateFormats = {
    a: days[date.getDay()].substring(0, 3),
    A: days[date.getDay()],

    w: date.getDay() + 1,
    q: pad(date.getDay() + 1),

    e: date.getDate(),
    d: pad(date.getDate()),

    b: month[date.getMonth()].substring(0, 3),
    B: month[date.getMonth()],
    m: date.getMonth() + 1,
    N: pad(date.getMonth() + 1),

    y: pad(date.getFullYear() % 100),
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

  return formats;
}
