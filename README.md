## Project Name Here

> Front-end source and usage instructions for the <project name here> Website.

## Includes
- [gulp](http://gulpjs.com/)
- [sass](http://sass-lang.com/)
- [bourbon](http://bourbon.io/)
- [normalize](https://github.com/necolas/normalize.css)
- [gulp-hb](https://github.com/shannonmoeller/gulp-hb)
- [browserify](http://browserify.org/)
- [browsersync](http://www.browsersync.io/)

## Getting Started

### Install Gulp

This project uses [gulp](http://gulpjs.com/) to build the front end so if you don't have that installed already, now's your chance:

`npm install --global gulp`

### Install Dependencies

In order to run the Gulp tasks, you'll need to install the project dependencies. `cd` into this directory and run:

`npm install`

## Gulp Tasks

The Gulp tasks for this project are broken out into individual task files in ./gulp/tasks. Each file will (or should!) have a brief comment explaining how to run it and what it does. If it doesn't then MY BAD.

Each task can be ran individually when needed, however, there are a set of build/dev tasks that will be explained in (a little bit) more detail below:

### Watching

This task is to be used during local development:

`gulp watch`

- Build the front-end assets (`gulp build`).
- Start a local dev server (`gulp browsersync`)
- Start watching for file changes.

### Building

The build task will clean out and re-build all the assets for the static front-end:

`gulp build`

This command also utilises the NODE_ENV environment variable which will allow us to detect the environment that we're building for. Currently, this project only supports `dev` or `production` environments (`dev` is the default).

#### Production Build

For a production build (e.g. on dev/QA servers), run this command:

`NODE_ENV=production gulp build`

The main differences when building for production mode:

- CSS will be minified and source maps exluded.
- JS will be minified and source maps exluded.

## TODO's/Improvements
1. Have added task and dependencies for stylelint (postcss linting). Keeping scss-lint for now too incase it's crap but if it works out then we can remove the Ruby/Bundler dependencies. Exciting.
2. jQuery - consider removing this, I would like to get to a place where it's not needed (Get better at ES6, Kristy. God.). Plugins may need it though...