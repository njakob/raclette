/* @flow */

import readFile from 'helpers/readFile';
import type { LoaderOptions, LoaderResult } from './common';

export default function json({
  file,
}: LoaderOptions): LoaderResult {
  const loadedFile = file;

  return {
    loadedFile,
    async load(): Promise<any> {
      const data = await readFile(loadedFile);
      if (!data) {
        return null;
      }
      return JSON.parse(data);
    },
  };
}
