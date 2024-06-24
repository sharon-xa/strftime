import { strftimeWithText } from "../src/strftimeWithText/strftimeWithText"

describe('strftimeWithText', () => {
  it('should return an error for invalid date', () => {
    const [formattedString, error] = strftimeWithText(undefined!);
    expect(formattedString).toBe('');
    expect(error).toBeInstanceOf(Error);
    expect(error!.message).toBe('Invalid date provided');
  });

  it('should format date according to basic format string', () => {
    const date = new Date(2024, 0o5, 24); // June 24, 2024
    const format = '%Y-%N-%d';
    const [formattedString, error] = strftimeWithText(date, format);
    expect(error).toBeNull();
    expect(formattedString).toBe('2024-06-24');
  });

  it('should format date with weekday and time', () => {
    const date = new Date(2024, 0o5, 24); // June 24, 2024
    const format = '%A %h:%i';
    const [formattedString, error] = strftimeWithText(date, format);
    expect(error).toBeNull();
    // Monday depends on locale, check for either format
    expect(formattedString).toMatch(/Monday (\d{2}:\d{2})/);
  });

  it('should format date with 12-hour format and AM/PM', () => {
    const date = new Date(2024, 0o5, 24, 10); // June 24, 2024, 10:00 AM
    const format = '%I:%i %p';
    const [formattedString, error] = strftimeWithText(date, format);
    expect(error).toBeNull();
    expect(formattedString).toBe('10:00 AM');
  });

  it('should format date with custom format string', () => {
    const date = new Date(2024, 0o5, 24); // June 24, 2024
    const format = '%d/%b/%Y (%a)';
    const [formattedString, error] = strftimeWithText(date, format);
    expect(error).toBeNull();
    expect(formattedString).toBe('24/Jun/2024 (Mon)');
  });

  it('should handle escaping of percent signs', () => {
    const date = new Date(2024, 0o5, 24); // June 24, 2024
    const format = '%%Y-%%m-%%d';
    const [formattedString, error] = strftimeWithText(date, format);
    expect(error).toBeNull();
    expect(formattedString).toBe('%Y-%m-%d');
  });

  it('should handle edge cases for month (0 and 11)', () => {
    // January (month 0)
    const januaryDate = new Date(2024, 0, 1);
    const januaryFormat = '%b';
    let [formattedString, error] = strftimeWithText(januaryDate, januaryFormat);
    expect(error).toBeNull();
    expect(formattedString).toBe('Jan');

    // December (month 11)
    const decemberDate = new Date(2023, 11, 1);
    const decemberFormat = '%B';
    [formattedString, error] = strftimeWithText(decemberDate, decemberFormat);
    expect(error).toBeNull();
    expect(formattedString).toBe('December');
  });
});

