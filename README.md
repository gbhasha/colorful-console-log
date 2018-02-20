# colorful-console-log

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

Print console messages colorful in both terminal and browser.
currently supports rainbow colors(VIBGYOR)

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo


## Installation
To install the stable version you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com/en/):

Using npm:
```shell
$ npm i colorful-console-log --save
```

Using yarn:
```shell
$ yard add colorful-console-log
```

## Usage
Include into your javascript file:
```js
import $console from 'colorful-console-log';

$console.violet("message in violet color");
$console.indigo("message in indigo color");
$console.blue("message in blue color");
$console.green("message in green color");
$console.yellow("message in yellow color");
$console.orange("message in orange color");
$console.red("message in red color");
```


