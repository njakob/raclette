/* @flow */
/* eslint import/no-dynamic-require: 'off', global-require: 'off' */

export default async function json(filePath: string): Promise<any> {
  try {
    // $FlowFixMe
    return require(`${filePath}.js`);
  } catch (err) {
    return null;
  }
}
