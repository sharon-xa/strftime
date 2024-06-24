// Checks if a given value is a valid Date object.
export function isDateValid(date: any): boolean {

  if (date instanceof Date && !isNaN(date.getTime()))
    return true

  return false
}
