// Load required libs (defined with Bower )
require('ember');
require('emberI18n');
require('jquery');
require('handlebars');

// Boot app
var App = window.App = require('./app/boot');

// Include all dependencies
App.ApplicationView = require('./views/application');
App.ApplicationController = require('./controllers/application');
App.ApplicationRoute = require('./routes/application');

// 404 route redirects to home
App.MissingRoute = require('./routes/general/missing');
