/* @flow */

import os from 'os';
import path from 'path';
import type { StrategyOptions } from './common';

export default async function home({
  name,
}: StrategyOptions): Promise<string[]> {
  const homeDirectory = os.homedir();
  const results = [];

  if (homeDirectory) {
    results.push(path.join(homeDirectory, name));
  }

  return results;
}
