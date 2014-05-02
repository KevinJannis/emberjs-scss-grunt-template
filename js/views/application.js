var View = Ember.View.extend({
  templateName: 'application',
  classNameBindings: ['controller.isLoggedIn:is-logged-in:is-not-logged-in'],
});

module.exports = View;
