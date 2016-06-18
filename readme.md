# boilerplate-es6

> A boilerplate for creating ECMAScript 2015 programs.

## Files
    readme.md
    license
    index.js

## Configurations

### npm
    package.json

#### Scripts

##### start
`[ -d ./dist ] && node ./dist/index.js || node index.js` Without building or publishing the development version of the program will run. After building or publishing the program it will run a transpiled version.

##### prebuild
`npm i; echo '{\"presets\":[\"babel-preset-es2015\"]}' > .babelrc && npm i -D babel-cli babel-preset-es2015` Installs all the declared development dependencies and Babel.

##### build
`npm run prebuild; babel *.js -d dist` Babel transpiles to ES5.

##### release
`echo '.*\n/*.js' > .npmignore ; npm run build ; npm publish` Publishes the package to npm. Also creates a .npmignore file that excludes most of the development files from the npm package.

#### devDependencies
* [eslint](https://www.npmjs.com/package/eslint)
* [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
* [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)

### EditorConfig
    .editorconfig

* `indent_style = space`
* `indent_size = 2`

### ESLint
    .eslintrc.json

#### Extended config
* [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)

#### Extended rules
* `no-console: 0`
* `func-names: 0`

### Tern
    .tern-project

#### Plugins
* `node`
* `node_resolve`
* `es_modules`
* `complete_strings`
* `doc_comment`

### Gitignore
    .gitignore

* `node_modules`
* `npm-debug.log`
