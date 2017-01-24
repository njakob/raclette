/* @flow */

import path from 'path';
import type { StrategyOptions } from './common';

export default async function cwdStrategy({
  directory,
  name,
}: StrategyOptions): Promise<*> {
  return [
    path.join(directory || process.cwd(), name),
  ];
}
