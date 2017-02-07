# Screwdriver hashr

[![Greenkeeper badge](https://badges.greenkeeper.io/screwdriver-cd/hashr.svg)](https://greenkeeper.io/)
[![Version][npm-image]][npm-url] ![Downloads][downloads-image] [![Build Status][wercker-image]][wercker-url] [![Open Issues][issues-image]][issues-url] [![Dependency Status][daviddm-image]][daviddm-url] ![License][license-image]

> Wrapper around the hashr library to simplify generating hash ids for data objects

## Usage

```bash
npm install screwdriver-hashr
```

The module exposes a simple interface for the different options available for calling
[hasha](ghub.io/hasha).

The function calls `JSON.stringify` on the value passed in

### sha1
```
const hashr = require('screwdriver-hashr');
const objectToHash = {
  hash1: 'value1',
  hash2: 'value2'
};
console.log(hashr.sha1(objectToHash));
```


## Testing

```bash
npm test
```

## License

Code licensed under the BSD 3-Clause license. See LICENSE file for terms.

[npm-image]: https://img.shields.io/npm/v/screwdriver-hashr.svg
[npm-url]: https://npmjs.org/package/screwdriver-hashr
[downloads-image]: https://img.shields.io/npm/dt/screwdriver-hashr.svg
[license-image]: https://img.shields.io/npm/l/screwdriver-hashr.svg
[issues-image]: https://img.shields.io/github/issues/screwdriver-cd/hashr.svg
[issues-url]: https://github.com/screwdriver-cd/hashr/issues
[wercker-image]: https://app.wercker.com/status/4afb68125eed62eef36f89f7027bef7b
[wercker-url]: https://app.wercker.com/project/bykey/4afb68125eed62eef36f89f7027bef7b
[daviddm-image]: https://david-dm.org/screwdriver-cd/hashr.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/screwdriver-cd/hashr
