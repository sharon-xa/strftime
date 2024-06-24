import { ord, pad } from "../src/utils/numbersManipulation";

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
    expect(ord(10)).toBe('th');
  });

  test('returns correct ordinal suffix for 11', () => {
    expect(ord(11)).toBe('th');
  });

  test('returns correct ordinal suffix for 11', () => {
    expect(ord(12)).toBe('th');
  });

  test('returns correct ordinal suffix for 11', () => {
    expect(ord(13)).toBe('th');
  });

  test('returns correct ordinal suffix for 21', () => {
    expect(ord(21)).toBe('st');
  });

  test('returns correct ordinal suffix for 42', () => {
    expect(ord(42)).toBe('nd');
  });

  test('returns correct ordinal suffix for 53', () => {
    expect(ord(53)).toBe('rd');
  });

  test('returns correct ordinal suffix for 53', () => {
    expect(ord(100)).toBe('th');
  });
});
