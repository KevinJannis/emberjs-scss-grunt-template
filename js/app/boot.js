var routes = require('./routes');

// Load default translations
Ember.I18n.translations = require('../i18n/en.js');

// Enable translateable properties & attributes
Ember.Object.reopen.call(Ember.Object, Ember.I18n.TranslateableProperties);
Ember.Object.reopen.call(Ember.Object, Ember.I18n.TranslateableAttributes);

var App = Ember.Application.create();
App.Router.map(routes);

module.exports = App;
