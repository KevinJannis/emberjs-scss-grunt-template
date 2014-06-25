var routes = require('./routes');

// Load default translations
Ember.I18n.translations = require('../i18n/en.js');

// Enable translateable properties & attributes
Ember.Object.reopen.call(Ember.Object, Ember.I18n.TranslateableProperties);
Ember.Object.reopen.call(Ember.Object, Ember.I18n.TranslateableAttributes);

var App = Ember.Application.create();
App.Router.map(routes);

App.MyRestAdapter = DS.RESTAdapter.reopen({
  host: 'http://localhost',
  namespace: 'api/v0.1'
});

App.Store = DS.Store.extend({
	adapter: 'App.MyRestAdapter'
});

module.exports = App;
