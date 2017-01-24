/* @flow */

import deepMerge from 'helpers/deepMerge';
import type { Loader } from './loaders';
import type { Strategy } from './strategies';

export type ResolveOptions = {
  directory?: string;
  loaders: Loader[];
  name: string;
  strategies: Strategy[];
};

export type ResolveEntry = {
  file: string;
  result?: any;
  error?: Error;
};

export type ResolveResult = {
  result: any;
  entries: ResolveEntry[];
};

async function transform(file: string, loader: Loader): Promise<ResolveEntry> {
  const {
    loadedFile,
    load,
  } = await loader({ file });

  try {
    const result = await load();
    return {
      result,
      file: loadedFile,
    };
  } catch (error) {
    return {
      error,
      file: loadedFile,
    };
  }
}

export default async function resolve({
  directory,
  name,
  strategies = [],
  loaders = [],
}: ResolveOptions): Promise<ResolveResult> {
  const strategiesPromises = strategies.map((strategy: Strategy): Promise<string[]> => strategy({ directory, name }));
  const filesCollections = await Promise.all(strategiesPromises);
  const files = filesCollections.reduce((acc: string[], values: string[]): string[] => acc.concat(values), []);

  const loadersPromises = [];
  files.forEach((file: string) => {
    loadersPromises.push(...loaders.map((loader: Loader): Promise<ResolveEntry> => transform(file, loader)));
  });
  const entries = await Promise.all(loadersPromises);

  let result = {};
  entries.forEach((entry: ResolveEntry) => {
    result = deepMerge(result, entry.result);
  });

  return {
    result,
    entries,
  };
}
