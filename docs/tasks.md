# Tasks

This section will briefly detail each of the gulp/npm tasks in this project which are used to build the various assets for the front end.
Reading the code for each task will help you to better understand how they work so I won't go into too much depth here but this will hopefully give you an intro into what each task does and how to use them.

### Watch

`./gulp/tasks/watch.js`

This is the task that you'll want to run when you're developing the site locally. It will run the main `build` task (see below) and then start a local dev server (serving the `dist` directory) using [browsersync](https://www.browsersync.io/) and is usually served on `http://localhost:3000`.

Once served, it will then start watching the .html, .js and .css files for changes.

To use, open up a terminal window, `cd` into the front end directory (usually front-end) and type:

```sh
$ gulp watch
```

### Build

`./gulp/tasks/build.js`

This is the task to run when you want to build and optimise the front end assets ready for dev or production.
This includes (but is not limited to) compiling the CSS, JS and HTML and minifying image and SVG assets. What this task does can vary from project to project so I recommend checkout out the source to learn more.

To use, open up a terminal window, `cd` into the front end directory (usually front-end) and type:

```sh
$ gulp build
```

### Build for Production

A few of the gulp tasks in this project do slightly different things depending on the environment you are building it for. The build currently accepts two environment settings: dev and production. The env can be set using the NODE_ENV variable. The default environment will be dev so if you're developing the FE locally, you won't need to do anything differently.

When building for production (e.g. on DEV or QA), you will want to build in production mode, so, you'll need to specify the env variable when running the gulp task:

```sh
$ NODE_ENV=production gulp build
```

**For windows users**, this has to be broken down into two seperate commands:

```sh
$ SET NODE_ENV=production
$ gulp build
```

The NODE_ENV flag can be used on any of the tasks in this document, this is not specific to the `build` task.

Currently, the main differences when building for production will be:

- JS will be minified (uglified) and sourcemaps will be excluded.
- CSS Sourcemaps will not be included.

**Production Asset Copying**

Once the production build is complete, the build task will copy the final compiled assets into a directory specified in the gulp config file (`./gulp/config.js`) in the `production` object.

Please remember to update the production path on a per project basis as it's name will change.

If you **do not** wish to do this, change the production config to the following:

```js
production: false
```

This will tell gulp not to copy any assets over once a production build has been completed.


### Browserify

`./gulp/tasks/browserify.js`

[Browserify](http://browserify.org/) is used in the project to bundle the scripts and their dependencies.

This task will firstly run the target file (usually ./src/js/main.js) file through the Javascript linter (currently eslint) and, if this passes the linter, it will run the file through Browserify. The bundled JS file will then be created and put into the dist directory.

The eslint configuration is defined in `/.eslintrc`. This file is an extension of the [sindresorhus eslint](https://github.com/sindresorhus/eslint-config-xo) config with some overriding/custom rules for this project. The linting configuration allows us to maintain consistent code standards and style across the project so please don't change this file without consulting the other devs first.

```sh
$ gulp browserify
```

The JS bundling task can also be ran as an npm task, because why not. The config for this can be found in `./package.json` under the `scripts` object.
This will essentially just bundle the JS with browserify and apply any transforms (currently just babelify).

```sh
$ npm run bundle
```


### CSS

`./gulp/tasks/css.js`

Fairly straightforward, run this if you want to compile the SASS to CSS.

Firstly, the CSS will be linted. If it passes linting, the CSS will be compiled. Then, the task will run the newly generated CSS through autoprefixer (automatically adds vendor prefixes to CSS rules) and cssnano (minifies the CSS). Finally, it will then put the final optimised CSS file into the ./dist directory.

The [stylelint](https://github.com/stylelint/stylelint) configuration is defined in `.src/.stylelintrc`. The linting configuration allows us to maintain consistent code standards and style across the project so please don't change this file without consulting the other devs first.

```sh
$ gulp css
```

### Icons

`./gulp/tasks/icons.js`

This task will generate an SVG sprite containing the SVG files located in ./src/svg/icons. If at any point you need to add new icons to the sprite, just add them to that directory and on the next `build` or `icons` task, they will be added to the spritesheet.

```sh
$ gulp icons
```

### Images

`./gulp/tasks/images.js`

Another fairly straightforward task, this will compress and copy any images from ./src/img into ./dist/img.

```sh
$ gulp images
```

### Serve

`./gulp/tasks/serve.js`

This starts a new local dev server using [browsersync](https://www.browsersync.io/) and will serve the contents of the ./dist directory. This will not run a build or watch for changes so it's just handy if you need to run the site locally but don't require live reloading.

```sh
$ gulp serve
```

