import { isPlainObject } from './isPlainObject';

type UpdateMode = 'append' | 'replace' | 'extend' | 'ignore';

interface Options {
  decodeURI?: boolean;
  onConflict?: UpdateMode;
  flatArraysOnAppend?: boolean;
  removeArrayDuplicatedValues?: boolean;
}

export const setKeyValueOnObject = <
  T extends object,
  K extends keyof T,
  V = unknown
>(
  obj: T,
  key: K,
  value: V,
  options: Options = {}
): T & Record<K, V> => {
  const {
    decodeURI = false,
    onConflict = 'replace',
    flatArraysOnAppend = false,
    removeArrayDuplicatedValues = false,
  } = options;

  const newValue =
    decodeURI && typeof value === 'string'
      ? decodeURIComponentSafe(value)
      : value;

  const hasKey = key in obj;
  const current = obj[key as keyof T] as V | undefined;

  if (hasKey) {
    if (onConflict === 'ignore') return obj as T & Record<K, V>;

    if (current !== newValue) {
      if (onConflict === 'append' && Array.isArray(current)) {
        let appended = [...current, newValue];
        if (flatArraysOnAppend) appended = appended.flat();
        if (removeArrayDuplicatedValues)
          appended = Array.from(new Set(appended));

        return { ...obj, [key]: appended } as T & Record<K, V>;
      }

      if (
        onConflict === 'extend' &&
        isPlainObject(current) &&
        isPlainObject(newValue)
      ) {
        return { ...obj, [key]: { ...current, ...newValue } } as T &
          Record<K, V>;
      }

      if (onConflict === 'replace') {
        return { ...obj, [key]: newValue } as T & Record<K, V>;
      }
    }

    return obj as T & Record<K, V>;
  }

  return { ...obj, [key]: newValue } as T & Record<K, V>;
};

const decodeURIComponentSafe = (v: string): string => {
  try {
    return decodeURIComponent(v);
  } catch {
    return v;
  }
};
