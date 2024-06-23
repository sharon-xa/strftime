// Pads a number with zeros to a specified length (e.g., 02, 004).
function pad(originalNum: number, padSize: number = 2): string {
  const paddedString = Array(padSize).join('0') + originalNum;
  return paddedString.substring(paddedString.length - padSize);
};

// Returns the ordinal suffix for a number (e.g., 'st', 'nd', 'rd', 'th').
function ord(num: number): string {
  const stringOfNumber: string = num.toString();
  const lastDigit: number = parseInt(stringOfNumber[stringOfNumber.length - 1]);
  const secondLastDigit: number = parseInt(stringOfNumber[stringOfNumber.length - 2]);

  if (secondLastDigit === 1) return 'th';

  else
    switch (lastDigit) {
      case 1:
        return 'st'; // 1st, 21st, 31st, ...
      case 2:
        return 'nd'; // 2nd, 22nd, 32nd, ...
      case 3:
        return 'rd'; // 3rd, 23rd, 33rd, ...
      default:
        return 'th'; // 4th, 5th, 6th, 7th, 8th, 9th, 10th, 11th (for numbers not covered by the above cases)
    }

};

