# PROJECT__NAME__HERE Front End

> Front end source and usage instructions for the PROJECT__NAME__HERE Website.

## Overview

This README will give a brief overview of how to get the project front end up and running. For more detailed about the setup and build, see the /docs directory in this project.

### Includes

- [gulp](http://gulpjs.com/) to build the project assets.
- [sass](http://sass-lang.com/) to compile CSS.
- [browsersync](http://www.browsersync.io/) to run a local development server and handle live reloading on file updates.
- [browserify](http://browserify.org/) to bundle the project's JS and dependencies.
- [gulp-hb](https://github.com/shannonmoeller/gulp-hb) to compile Handlebars templates to html.
- [bourbon](http://bourbon.io/) Just a handy mixin lib for sass.
- [normalize](https://github.com/necolas/normalize.css) to reset/normalise the base site styles.

### Customisation

When used in a project, please make sure you update the following files with details of the project:

- `README.md` - Replace any instances of PROJECT__NAME__HERE with project name.
- `package.json` - Replace any instances of PROJECT__NAME__HERE with project name.
- `package.json` - Replace git repo details with those of the new project.

## Install Prerequisites

This project has the following requirements:

### Node

You will need to have both [Node.js](https://nodejs.org) and [NPM](https://www.npmjs.com/) installed on your machine.
To check that you have it installed, type `node --version` into a terminal window. You should see a version number which needs to be at least 0.12.x (at the time of writing).

If you don't have it, or need to upgrade then you can install it via [Homebrew](http://brew.sh/) (if on OSX):

```sh
$ brew install node
```

This will (unless told otherwise) install both node and NPM.

### Gulp

You will need to have [Gulp](http://gulpjs.com/) installed globally on your machine.
If you're not sure if you have it, type `gulp --version` into a terminal window. If you have it, you should see a version number. This version should be at least 3.9.x (at the time of writing).

If you don't have it, or need to upgrade, type the following into a terminal window:

```sh
$ npm install --global gulp
```

## Install Local Dependencies

To install the local/project dependencies, open a terminal window and ensure that you're in the root of the FE directory (commonly /front-end in most projects) and type the following:

```sh
$ npm install
```

This will install all the project dependencies that are defined in the `package.json` file.

### Running the project

Each individual gulp task will be documented in more detail in the `docs/gulp-tasks.md` file.
However, in the spirit of getting up and running, open a terminal window and type the following:

```sh
$ gulp watch
```
This will start local dev server, serve your files and start watching for changes in .html, .scss and .js files.

**PLEASE NOTE:** Only ever work with the files in the ./src directory of the project. The ./dist directory is where compiled files will be placed so if you change anything in dist, your changes will be overwritten.

## Find out More

As mentioned above, you can read more about the various aspects of the front end setup in the /docs directory:

- `file-appendix.md`: An overview of what the various files used in the project do.
- `gulp-tasks.md`: An overview of each individual Gulp task.

## Inspiration & Credits

This FE base is developed and maintained by [Kristy Nolan](https://github.com/kristyanne) for [Connect Group](http://www.connect-group.com/) and takes inspiration and best practice ideas from:

- [Gulp Starter](https://github.com/vigetlabs/gulp-starter)
- [HTML5 Boilerplate](https://html5boilerplate.com/)
- [Google WSK](https://github.com/google/web-starter-kit/blob/master/docs/install.md)
- [idiomatic-css](https://github.com/necolas/idiomatic-css)
- [inuitcss](https://github.com/inuitcss)

And many more that I can't remember but when I do I'll add links!
