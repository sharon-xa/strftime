import { describe, expect, test } from '@jest/globals';
import { DateFormat } from '../src/types';
import { strftime } from "../src/strftime/index"
// import { numbersManipulationForTesting } from '../src/strftime/numbersManipulation';

describe('formatDateTime', () => {
  let formats: DateFormat;

  beforeAll(() => {
    // Mock DateFormat object
    formats = {
      a: 'Mon',
      A: 'Monday',
      w: 1,
      q: '01',
      d: '10',
      e: 10,
      b: 'Jan',
      B: 'January',
      m: 1,
      N: '01',
      y: '22',
      Y: 2022,
      H: 13,
      h: '13',
      I: '01',
      p: 'PM',
      o: '10th',
      M: 30,
      i: '30',
      S: 45,
      s: '45',
      f: 123,
      c: 'Mon Jan 10 2022 - 13:30:45 GMT',
      x: '01/10/2022',
      X: '13:30:45'
    };
  });

  test('formats date and time correctly for provided format string', () => {
    const formatString = 'A, B d, Y => H:M:S';
    const expectedOutput = 'Monday, January 10, 2022 => 13:30:45';
    expect(formatDateTime(formatString, formats)).toBe(expectedOutput);
  });

  test('handles empty format string', () => {
    const formatString = '';
    const expectedOutput = '';
    expect(formatDateTime(formatString, formats)).toBe(expectedOutput);
  });

  test('handles undefined format type', () => {
    const formatString = 'Z';
    const expectedOutput = 'Z';
    expect(formatDateTime(formatString, formats)).toBe(expectedOutput);
  });

  test('handles mixed known and unknown format types', () => {
    const formatString = 'A, b d Z';
    const expectedOutput = 'Monday, Jan 10 Z';
    expect(formatDateTime(formatString, formats)).toBe(expectedOutput);
  });

  test('formats date and time with consecutive known and unknown format types', () => {
    const formatString = 'ABdm';
    const expectedOutput = 'MondayJanuary101';
    expect(formatDateTime(formatString, formats)).toBe(expectedOutput);
  });

  test('handles numeric values correctly', () => {
    const formatString = 'w m e Y';
    const expectedOutput = '1 1 10 2022';
    expect(formatDateTime(formatString, formats)).toBe(expectedOutput);
  });

  test('handles 12 hour format values correctly', () => {
    const formatString = 'I:M p';
    const expectedOutput = '01:30 PM';
    expect(formatDateTime(formatString, formats)).toBe(expectedOutput);
  });
});

describe('strftime', () => {
  const mockDate = new Date('2018-01-18T21:32:00');

  test('formats correctly using example: new Date().strftime("H:M p - A")', () => {
    const formatString = 'H:M p - A';
    const expectedOutput = '21:32 PM - Thursday';
    expect(strftime(mockDate, formatString)).toBe(expectedOutput);
  });

  test('formats correctly using example: new Date().strftime("m/b/Y")', () => {
    const formatString = 'm/b/Y';
    const expectedOutput = '1/Jan/2018';
    expect(strftime(mockDate, formatString)).toBe(expectedOutput);
  });

  test('formats correctly using example: new Date().strftime("do B Y")', () => {
    const formatString = 'do B Y';
    const expectedOutput = '18th January 2018';
    expect(strftime(mockDate, formatString)).toBe(expectedOutput);
  });
});

describe('pad', () => {
  test('pads single digit number to two digits', () => {
    expect(pad(5)).toBe('05');
  });

  test('pads double digit number correctly', () => {
    expect(pad(12)).toBe('12');
  });

  test('pads single digit number to three digits', () => {
    expect(pad(5, 3)).toBe('005');
  });
});

describe('ord', () => {
  test('returns correct ordinal suffix for 1', () => {
    expect(ord(1)).toBe('st');
  });

  test('returns correct ordinal suffix for 2', () => {
    expect(ord(2)).toBe('nd');
  });

  test('returns correct ordinal suffix for 3', () => {
    expect(ord(3)).toBe('rd');
  });

  test('returns correct ordinal suffix for 4', () => {
    expect(ord(4)).toBe('th');
  });

  test('returns correct ordinal suffix for 11', () => {
    expect(ord(11)).toBe('th');
  });

  test('returns correct ordinal suffix for 21', () => {
    expect(ord(21)).toBe('st');
  });

  test('returns correct ordinal suffix for 10', () => {
    expect(ord(10)).toBe('th');
  });

  test('returns correct ordinal suffix for 42', () => {
    expect(ord(42)).toBe('nd');
  });

  test('returns correct ordinal suffix for 53', () => {
    expect(ord(53)).toBe('rd');
  });
});

describe('isDateValid', () => {
  test('returns true for a valid date', () => {
    expect(isDateValid(new Date())).toBe(true);
  });

  test('returns false for an invalid date', () => {
    expect(isDateValid(new Date('invalid-date'))).toBe(false);
  });

  test('returns false for non-date objects', () => {
    expect(isDateValid('string')).toBe(false);
    expect(isDateValid(123)).toBe(false);
    expect(isDateValid({})).toBe(false);
  });
});
