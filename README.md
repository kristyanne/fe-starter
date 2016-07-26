# Project Front End

> Front end source and usage instructions.

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

## Starting a new Project

If you are not setting up a new project but you are running this existing FE for the first time, you can skip this step and continue on to the [Install Prerequisites](#install-prerequisites) section.

Please follow these instructions for using this FE in a new project. This assumes you will clone this FE from Git/Bitbucket into an existing project and that the directory structure will be `project-name-here/front-end`.

1) In a terminal window, cd into the project directory:

```sh
$ cd ~/project-name-here
```

2) Either Clone this repo into the project, or, download a .zip file from git/bitbucket containing the source.

```sh
$ git clone <bitbucket-url-here> front-end
```

3) By now, you should have this FE source inside your project in a directory called front-end.

4) If you've cloned this from git/bitbucket, clear out any `git` data to start a fresh history. In a terminal window, cd into the FE directory and type the following:

```sh
$ cd ~/project-name-here/front-end
$ rm -rf .git
```

### Customisation

Once this FE code is part of your new project, you will need to follow some customisation steps to tailor it to your project:

1) `package.json`: Update `name` to the name of your project. E.g:

```json
{
    "name": "project-name-front-end"
}
```

2) `package.json`: Update `description` with a description of your project. E.g:

```json
{
    "description": "Front end source for the <project-name-here> project."
}
```

3) `package.json`: Update the `repository` details to match those of your new project. E.g:

```json
{
    "repository": {
        "type": "git",
        "url": "git@bitbucket.org:connectgroup/project-name-here.git"
    }
}
```

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

## Docs

As mentioned above, you can read more about the various aspects of the front end setup in the /docs directory:

Doc | Description
----| -----------
[Getting Started](docs/getting-started.md) | This is a description of getting started.
[File Appendix](docs/file-appendix.md) | An overview of what the various files used in the project do.
[Gulp Tasks](docs/tasks.md) | An overview of each individual Gulp task.

## Inspiration & Credits

This FE base is developed and maintained by [Kristy Nolan](https://github.com/kristyanne) for [Connect Group](http://www.connect-group.com/) and takes inspiration and best practice ideas from:

- [Gulp Starter](https://github.com/vigetlabs/gulp-starter)
- [HTML5 Boilerplate](https://html5boilerplate.com/)
- [Google WSK](https://github.com/google/web-starter-kit/blob/master/docs/install.md)
- [idiomatic-css](https://github.com/necolas/idiomatic-css)
- [inuitcss](https://github.com/inuitcss)

And many more that I can't remember but when I do I'll add links!
