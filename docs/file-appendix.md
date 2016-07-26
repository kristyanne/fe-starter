# TODO: Document the root/dot files of the project (e.g. .editorconfig, package.json etc)

## Files

This will cover the basics of what the various files in the root of the project do.

### .babelrc

This is a configuration file for [Babel](https://babeljs.io/) which is a Javascript transpiler. In a nutshell, Babel will allow us to write our JS in es6 (ES2015) and it will then transpile this into ES5 so that the browsers who do not support es6 features can read it.
In this file, we will tell babel that we want to use Babel with the [ES2015 Preset](http://babeljs.io/docs/plugins/preset-es2015/).

If, for example, you were using this FE as the foundation for a React project, you would add the [React Preset](http://babeljs.io/docs/plugins/preset-react/) to the array of presets in this file so that Babel knows we will be transpiling React JSX syntax.

### .editorconfig

Since there can potentially be multiple devs who will work on the FE of a project, it's important that we try and maintain consistent code style where we can so that we can keep the project from becoming a mish mash of different styles and formats.
For this, we're using [EditorConfig](http://editorconfig.org/) which is essentially a configuration file which determines the code format and style for the project.

Some editors come with native support for editorconfig files (meaning you don't need to do anything for it to work in the project). If yours doesn't ([see here for list](http://editorconfig.org/#download)) then you will need to install a plugin for your text editor for it to work.

For sublime users, the [Sublime EditorConfig Plugin](https://github.com/sindresorhus/editorconfig-sublime/blob/master/readme.md) can be installed via [Package Control](https://packagecontrol.io).

### .eslintrc

### .gitignore

### .stylelintrc

### gulpfile.js

### icons.yml

### package.json

