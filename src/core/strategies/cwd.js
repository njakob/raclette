/* @flow */

import path from 'path';
import type { StrategyOptions } from './common';

export default async function cwd({
  directory,
  name,
}: StrategyOptions): Promise<string[]> {
  return [
    path.join(directory || process.cwd(), name),
  ];
}
