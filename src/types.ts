export interface DateFormat {
  a: string;  // Short day name (e.g., Mon)
  A: string;  // Full day name (e.g., Monday)
  w: number;  // Day of the week (0-6, where 0 is Sunday)
  q: string;  // Padded day of the week (01-31)
  d: string;  // Padded day of the month (01-31)
  e: number;  // Day of the month (1-31)
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
