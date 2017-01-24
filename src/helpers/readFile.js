/* @flow */

import fs from 'fs';

export default async function readFile(filePath: string): Promise<any> {
  return new Promise((resolve: (result: any) => void, reject: (err: Error) => void) => {
    fs.readFile(filePath, 'utf8', (err: ?ErrnoError, data: string): void => {
      if (err) {
        if (err.code === 'ENOENT') {
          return resolve(null);
        }

        return reject(err);
      }

      return resolve(data);
    });
  });
}
