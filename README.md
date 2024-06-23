# strftime.js

Ruby-like strftime method implementation in Javascript without the percentage notation.

The formatting is based on [strftime.org](http:=>strftime.org)

## Usage

```js
new Date().strftime('I:M p - A') // => 09:32 AM - Thursday
new Date().strftime('m/b/Y')     // => 1/Jan/2018
new Date().strftime('do B Y')    // => 18th January 2018
```

## Warning

Don't use words inside the string
example: 
```js
new Date().strftime('The time is: I:M p') 
// This code will cause in error, this library only takes specifiers
```

## Available Specifiers

### Date 
  `a` => Short day name (e.g., Mon)<br>
  `A` => Full day name (e.g., Monday)<br>
  `w` => Day of the week (0-6, where 0 is Sunday)<br>
  `q` => Padded day of the week (01-31)<br>
  `d` => Padded day of the month (01-31)<br>
  `e` => Day of the month (1-31)<br>
  `b` => Short month name (e.g., Jan)<br>
  `B` => Full month name (e.g., January)<br>
  `m` => Month number (1-12)<br>
  `N` => Padded month number (01-12)<br>
  `y` => Short year (e.g., 22 for 2022)<br>
  `Y` => Full year (e.g., 2022)<br>
  `x` => Localized date string (e.g., "6/22/2023")<br>

### Time
  `H` => Hours (0-23)<br>
  `h` => Padded hours (00-23)<br>
  `I` => 12-hour format (01-12)<br>
  `p` => AM/PM<br>
  `o` => Ordinal day of the month (st, nd, rd, th)<br>
  `M` => Minutes (0-59)<br>
  `i` => Padded minutes (00-59)<br>
  `S` => Seconds (0-59)<br>
  `s` => Padded seconds (00-59)<br>
  `f` => Milliseconds<br>
  `X` => Localized time string (e.g., "1:45:30 PM")<br>

### Date and Time
  `c` => Date and time string (e.g., "Thu Jun 22 2023 - 13:45:30 GMT+0100 (GMT+01:00)")<br>

