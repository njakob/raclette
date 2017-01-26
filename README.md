
# raclette [![Build Status][build-status-image]][travis] [![ESLint Config][eslint-config-image]][eslint-config]

> Handle your rc files with ease.

Raclette is a resolver for JSON or javascript run commands (rc) files of your Node.js libraries or
applications.

## Features

* JSON, javascript loaders
* Flowtype definitions

## Installation

With NPM:

```
$ npm install raclette
```

With Yarn:

```
$ yarn add raclette
```

## Usage

Raclette rc files resolution uses *strategies* and *loaders* which you need to
provide as options.

```js
import * as rc from 'raclette';
import type { ResolveResult } from 'raclette';

rc.resolve({
  name: '.eslintrc',
  strategies: [
    rc.strategies.cwd,
    rc.strategies.home,
  ],
  loaders: [
    rc.loaders.json,
  ],
}).then((result: ResolveResult) => {
  console.log(result);
}).catch((err) => {
  console.error(err);
});
```

### Strategy

A _strategy_ generate a set of paths where the resolver need to look for rc
files.

* `rc.strategies.cwd`: Current working directory
* `rc.strageties.home`: Current user home directry

### Loader

A _loader_ try to load and parse rc files in a given location in the file
system.

* `rc.loaders.json`: Load rc files in JSON format
* `rc.loaders.javascript`: Load rc files in javascript format

## Licences

`njakob/raclette` is licensed under the [MIT License][licence].

[licence]: LICENSE
[eslint-config]: https://github.com/njakob/raclette
[npm]: https://nodei.co/npm/raclette
[travis]: https://travis-ci.org/njakob/raclette
[npm-status-image]: https://img.shields.io/npm/v/raclette.svg
[build-status-image]: https://travis-ci.org/njakob/raclette.svg?branch=master
[eslint-config-image]: https://img.shields.io/badge/eslint_config-njakob-463fd4.svg
