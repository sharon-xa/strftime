# strftime

Ruby-like strftime method implementation in Javascript with / without the percentage notation.

The formatting is based on [strftime.org](https://strftime.org/)

## Usage

```js
const date = new Date();
strftime(date, 'I:M p - A') // => 09:32 AM - Thursday
strftime(date, 'm/b/Y')     // => 1/Jan/2018
strftime(date, 'do B Y')    // => 18th January 2018

strftimeWithText(date, '%I:%M %p - %A') // => 09:32 AM - Thursday
strftimeWithText(date, '%m/%b/%Y')     // => 1/Jan/2018
strftimeWithText(date, '%d%o %B %Y')    // => 18th January 2018
```
Use `strftime` when you want a date or time or both only.
Use `strftimeWithText` when you want your format string to contain text aside from the specifiers (take look at the Warning).


## Warning

Don't use words inside the strftime function
example: 
```js
const date = new Date();
strftime(date, 'The time is: I:M p') 
// This call will cause in error, this function only takes specifiers
```

Instead use strftimeWithText function that takes the % sign
example:
```js
const date = new Date();
strftimeWithText(date, 'The time is: %I:%M %p') 
// This is a fine call for this function 
```

## Available Specifiers

### Date 
  `a` => Abbreviated weekday name (e.g., Sun, Mon)	Sun<br>
  `A` => Full weekday name (e.g., Sunday, Monday)	Sunday<br>
  `w` => Day of the week (1-7, where 1 is Sunday)<br>
  `q` => Padded day of the week (01-07)<br>
  `e` => Day of the month (1-31)<br>
  `d` => Padded day of the month (01-31)<br>
  `b` => Short month name (e.g., Jan)<br>
  `B` => Full month name (e.g., January)<br>
  `m` => Month number (1-12)<br>
  `N` => Padded month number (01-12)<br>
  `y` => Short year (e.g., 22 for 2022)<br>
  `Y` => Full year (e.g., 2022)<br>
  `o` => Ordinal day of the month (st, nd, rd, th)<br>
  `x` => Localized date string (e.g., "6/22/2023")<br>

### Time
  `H` => Hours (0-23)<br>
  `h` => Padded hours (00-23)<br>
  `I` => 12-hour format (01-12)<br>
  `p` => AM/PM<br>
  `M` => Minutes (0-59)<br>
  `i` => Padded minutes (00-59)<br>
  `S` => Seconds (0-59)<br>
  `s` => Padded seconds (00-59)<br>
  `f` => Milliseconds<br>
  `X` => Localized time string (e.g., "1:45:30 PM")<br>

### Date and Time
  `c` => Date and time string (e.g., "Thu Jun 22 2023 - 13:45:30 GMT+0100 (GMT+01:00)")<br>

### NOTE
All these specifiers are available for `strftime` and `strftimeWithText`,
The only difference is with using the % sign.<br>
`strftime`         => no percentage sign<br>
`strftimeWithText` => with percentage sign


