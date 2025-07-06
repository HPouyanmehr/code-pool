/**
 * Determines whether the provided value is a plain object.
 *
 * A plain object is defined as a non-null value of type 'object' that is not an array.
 *
 * @param value - The value to check.
 * @returns True if the value is a plain object, otherwise false.
 *
 * @example
 * isPlainObject({}); // true
 * isPlainObject([]); // false
 * isPlainObject(null); // false
 * isPlainObject(42); // false
 */
export const isPlainObject = (value: unknown): value is Record<string, unknown> => 
  typeof value === 'object' && value !== null && !Array.isArray(value);