/* @flow */

import type { Loader } from './loaders';
import type { Strategy } from './strategies';

export type ResolveOptions = {
  directory?: string;
  loaders: Loader[];
  name: string;
  strategies: Strategy[];
};

export default async function resolve({
  directory,
  name,
  strategies = [],
  loaders = [],
}: ResolveOptions): Promise<any> {
  const strategiesPromises = strategies.map((strategy: Strategy): Promise<string[]> => strategy({ directory, name }));
  const filesCollections = await Promise.all(strategiesPromises);
  const files = filesCollections.reduce((acc: string[], values: string[]): string[] => acc.concat(values), []);

  const loadersPromises = [];
  files.forEach((file: string) => {
    loadersPromises.push(...loaders.map((loader: Loader): Promise<any> => loader(file)));
  });
  const dataCollection = await Promise.all(loadersPromises);

  return dataCollection.reduce((data: any, acc: any): any => {
    return {
      ...acc,
      ...data,
    };
  });
}
