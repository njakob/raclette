/* @flow */
/* eslint import/no-dynamic-require: 'off', global-require: 'off' */

import type { LoaderOptions, LoaderResult } from './common';

export default function json({
  file,
}: LoaderOptions): LoaderResult {
  const loadedFile = `${file}.js`;

  return {
    loadedFile,
    async load(): Promise<any> {
      try {
        // $FlowFixMe
        return require(loadedFile);
      } catch (error) {
        if (error.code === 'MODULE_NOT_FOUND') {
          return null;
        }
        throw error;
      }
    }
  };
}
