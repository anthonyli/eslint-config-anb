# ESLint-plugin-anb

===================

## Installation

Install [ESLint](https://www.github.com/eslint/eslint) either locally or globally.

```sh
$ npm install eslint --save-dev
```

If you installed `ESLint`, Otherwise, install it locally.

```sh
$ npm install eslint-plugin-anb --save-dev
```

## Why Use [babel-eslint](https://www.npmjs.com/package/babel-eslint)

You only need to use babel-eslint if you are using types (Flow) or experimental features not supported in ESLint itself yet. Otherwise try the default parser (you don't have to use it just because you are using Babel).

## Configuration

Use [our preset](#recommended) to get reasonable defaults:

```js

  module.exports = {
    "extends": "anb",
    "rules": {
    },
    "env": {
    }
}

```

### react

```js

  module.exports = {
    "extends": "anb/react",
    "rules": {
    },
    "env": {
    }
}

```

### vue

```js

  module.exports = {
    "extends": "anb/vue",
    "rules": {
    },
    "env": {
    }
}

```
