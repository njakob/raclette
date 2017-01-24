/* @flow */

export type LoaderOptions = {
  file: string;
};

export type LoaderResult = {
  loadedFile: string;
  load(): Promise<any>;
};

export type Loader = (options: LoaderOptions) => LoaderResult;
