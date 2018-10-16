# Project Front End

> Front end source and usage instructions.

## Overview

Detailed information about the front end source and how get started with it can be found in the [Getting Started](#getting-started) section below.

Below is an overview of the various tools/features that are used in this project. While it is not essential that you are familiar with all of them in order to build and run the front-end, developers working on this project would find a working knowledge of gulp, sass, javascript and browserify to be helpful.

### Features

- [gulp](http://gulpjs.com/) to build the project assets.
- [sass](http://sass-lang.com/) to compile CSS.
- [browsersync](http://www.browsersync.io/) to run a local development server and handle live reloading on file updates.
- [webpack](https://webpack.js.org/) to bundle JS and dependencies.
- [babel](https://babeljs.io/) to compile JS.
- [gulp-hb](https://github.com/shannonmoeller/gulp-hb) to compile Handlebars templates to html.
- [normalize](https://github.com/necolas/normalize.css) to reset/normalise the base site styles.

## Getting Started

All of the information you'll need to get this front end up and running and/or to find out more about various aspects of the front end source will be detailed in the docs listed below. However, if you're in a rush and don't need any detailed instructions, just follow the [Quick Start](#quick-start) guide below.

Doc | Description
----| -----------
[Getting Started](docs/getting-started.md) | Read this to get started with integrating this FE into your project and/or getting the FE up and running on your machine in an existing project.
[File Appendix](docs/file-appendix.md) | An overview of what the various files used in the project are used for.
[Gulp Tasks](docs/tasks.md) | An overview of what each individual Gulp task does.

## Quick Start

This assumes you have all the code and necessary prerequisites installed on your machine as detailed in the [Getting Started](docs/getting-started.md) document. If you're not sure, head over to there to read more information about this.

To compile the front end, start a local server and start watching for changes, open up a terminal window and type the following:

```sh
$ cd project-name/front-end
$ yarn
$ yarn start
```

## Inspiration & Credits

This project is based upon the fe-base project which is is developed and maintained by [Kristy Nolan](https://github.com/kristyanne) for [Connect Group](http://www.connect-group.com/) and takes inspiration and best practice ideas from:

- [Gulp Starter](https://github.com/vigetlabs/gulp-starter)
- [HTML5 Boilerplate](https://html5boilerplate.com/)
- [Google WSK](https://github.com/google/web-starter-kit)
- [idiomatic-css](https://github.com/necolas/idiomatic-css)
- [inuitcss](https://github.com/inuitcss)

And many more that I can't remember but when I do I'll add links!
