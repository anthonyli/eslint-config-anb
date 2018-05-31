# eslint-config-anb

===================

## Installation

Install [ESLint](https://www.github.com/eslint/eslint) either locally or globally.

```sh
$ npm install eslint --save-dev
```

If you installed `ESLint`, Otherwise, install it locally.

```sh
$ npm install eslint-config-anb --save-dev
```

## Configuration

Use to get reasonable defaults:

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

## FQA

#### Why Use [babel-eslint](https://www.npmjs.com/package/babel-eslint)

You only need to use babel-eslint if you are using types (Flow) or experimental features not supported in ESLint itself yet. Otherwise try the default parser (you don't have to use it just because you are using Babel).

### use anb/vue What is the "Use the latest vue-eslint-parser" error? [eslint-plugin-vue](https://www.npmjs.com/package/eslint-plugin-vue)

The most rules of eslint-plugin-vue require vue-eslint-parser to check <template> ASTs.

Make sure you have one of the following settings in your .eslintrc*:

"extends": ["plugin:vue/recommended"]
"extends": ["plugin:vue/base"]
If you already use other parser (e.g. "parser": "babel-eslint"), please move it into parserOptions, so it doesn't collide with the vue-eslint-parser used by this plugin's configuration:

```sh

- "parser": "babel-eslint"

```

### Why doesn't it work on .vue file?


VSCode targets only JavaScript or HTML files by default.
You have to add {"autoFix": true, "language": "vue"} into eslint.validate entry.
This works for me after I install the Vetur extension which adds the vue language mode and adding this to the settings.

```json

"eslint.validate": [
    "javascript",
    "javascriptreact",
    "vue",
    {
        "language": "vue",
        "autoFix": true
    }
]

```
