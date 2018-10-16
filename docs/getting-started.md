# Getting Started

This file will detail how to get this project up and running on your machine.

If you are starting a new project from scratch and would like to include this FE base into your new project, start by following the steps detailed in the [Starting a new Project](#starting-a-new-project) section.

If you are working on an existing project and just want to get this front-end up and running, you can skip the section below and just jump straight to the [Install Prerequisites](#install-prerequisites) section.

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

4) `gulp/config.js`: Update the production directory in the `production` configuration in this file (if required - see [Building for Production](tasks.md#build-for-production) for more information on this).

5) Replace all instances of `__SITE_NAME__` with the name of your site.

6) Replace all instances of `__SITE_DESCRIPTION__` with a description of your site.

7) Replace all instances of `__SITE_THEME_COLOUR__` with the hex theme colour of your site.

8) Replace all instances of `__SITE_THEME_BACKGROUND__` with the hex background colour of your site.

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
$ yarn
```

This will install all the project dependencies that are defined in the `package.json` file.

### Running the project

Each individual gulp task will be documented in more detail in the [Tasks](tasks.md) doc.
However, in the spirit of getting up and running, open a terminal window and type the following:

```sh
$ yarn start
```
This will start local dev server, serve your files and start watching for changes in .html, .scss and .js files.

### Production Builds

If you don't want to watch for changes and you just want to compile the front end, replace the `gulp watch` command with `gulp build`. Please see the [Environments](tasks.md#environments) section of the tasks docs for more information on this.
