# EmberJS Grunt template

This repository is a template for a project that consists of the following technologies:

  - jQuery
  - EmberJS
  - Handlebars
  - Compass (scss-syntax)
  - Bower
  - Grunt

## Get ready to start developping

To get started and make sure all the things are available you should have the following installed:

  - Npm
  - Grunt
  - Bower

After these conditions have been met run the following at the start of a project, or to update your project dependencies:

  - `npm install`
  - `bower install`


## What next?

Make sure you change the application name and/or version in:

  - bower.json
  - package.json
  - js/i18n/en.js

To build your app for development you can run one of the following commands:

  - `grunt development`
  - `grunt watch`

To build your app for production and minify all assets, you can run the following command:

  - `grunt production`

Note: Make sure to remove the dev files when deploying to production :)

  - scss folder
  - everything in js, except application.min.js
  - templates folder
  - bower_components folder
  - grunt-tasks folder
  - node_modules folder

  - bower.json
  - Gruntfile.js
  - package.json
  - README.md
  - npm-debug.log
  - anything git-related

