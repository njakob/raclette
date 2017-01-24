/* @flow */

function isObject(item: any): boolean {
  return (item && typeof item === 'object' && !Array.isArray(item) && item !== null);
}

export default function mergeDeep(target: any, source: any): any {
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key: string) => {
      if (isObject(source[key])) {
        if (!target[key]) {
          Object.assign(target, { [key]: {} });
        }
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    });
  }

  return target;
}
