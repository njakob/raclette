/* @flow */

import readFile from 'helpers/readFile';

export default async function json(filePath: string): Promise<any> {
  const data = await readFile(`${filePath}`);

  if (!data) {
    return null;
  }

  return JSON.parse(data);
}
