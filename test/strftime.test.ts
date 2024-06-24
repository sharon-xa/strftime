import { describe, expect, test } from '@jest/globals';
import { strftime, formatDateTime } from "../src/strftime/strftime"
import { DateFormats } from '../src/formats/formats';
import { isDateValid } from '../src/utils/validation';

interface TestCase {
  formatString: string;
  expectedOutput: string;
}

describe('strftime', () => {
  const mockDate = new Date('2018-01-18T21:32:00');

  test('formats correctly using example: new Date().strftime("H:M p - A")', () => {
    const formatString = 'H:M p - A';
    const expectedOutput = ['21:32 PM - Thursday', null];
    expect(strftime(mockDate, formatString)).toStrictEqual(expectedOutput);
  });

  test('formats correctly using example: new Date().strftime("m/b/Y")', () => {
    const formatString = 'm/b/Y';
    const expectedOutput = ['1/Jan/2018', null];
    expect(strftime(mockDate, formatString)).toStrictEqual(expectedOutput);
  });

  test('formats correctly using example: new Date().strftime("do B Y")', () => {
    const formatString = 'do B Y';
    const expectedOutput = ['18th January 2018', null];
    expect(strftime(mockDate, formatString)).toStrictEqual(expectedOutput);
  });

  test('Return error when date is invalid', () => {
    const formatString = 'do B Y';
    const expectedOutput = ['', new Error("Invalid date provided")];
    expect(strftime(undefined!, formatString)).toStrictEqual(expectedOutput);
  });

  test('Return error when date is invalid', () => {
    const formatString = 'do B Y';
    const expectedOutput = ['', new Error("Invalid date provided")];
    expect(strftime(null!, formatString)).toStrictEqual(expectedOutput);
  });
});

describe('formatDateTime', () => {
  let formats: DateFormats;

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

  const testCases: { [description: string]: TestCase } = {
    'formats date and time correctly for provided format string': {
      formatString: 'A, B d, Y => H:M:S',
      expectedOutput: 'Monday, January 10, 2022 => 13:30:45'
    },
    'handles empty format string': {
      formatString: '',
      expectedOutput: ''
    },
    'handles undefined format type': {
      formatString: 'Z',
      expectedOutput: 'Z'
    },
    'handles mixed known and unknown format types': {
      formatString: 'A, b d Z',
      expectedOutput: 'Monday, Jan 10 Z'
    },
    'formats date and time with consecutive known and unknown format types': {
      formatString: 'ABdm',
      expectedOutput: 'MondayJanuary101'
    },
    'handles numeric values correctly': {
      formatString: 'w m e Y',
      expectedOutput: '1 1 10 2022'
    },
    'handles 12 hour format values correctly': {
      formatString: 'I:M p',
      expectedOutput: '01:30 PM'
    }
  };

  for (const description in testCases) {
    const { formatString, expectedOutput } = testCases[description];
    test(description, () => {
      expect(formatDateTime(formatString, formats)).toBe(expectedOutput);
    });
  }
});
