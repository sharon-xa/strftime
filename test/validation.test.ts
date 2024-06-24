import { isDateValid } from "../src/utils/validation";

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
