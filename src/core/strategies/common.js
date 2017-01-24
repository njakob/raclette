/* @flow */

export type StrategyOptions = {
  directory?: string;
  name: string;
};

export type Strategy = (options: StrategyOptions) => Promise<string[]>;
