/* @flow */

import path from 'path';
import type { StrategyOptions } from './common';

export default async function home({
  name,
}: StrategyOptions): Promise<string[]> {
  const homeDirectory = process.env.HOME;
  const results = [];

  if (homeDirectory) {
    results.push(path.join(homeDirectory, name));
  }

  return results;
}
