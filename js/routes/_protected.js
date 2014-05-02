var Route = Ember.Route.extend({
  beforeModel: function() {
    var controller = this.controllerFor('application');

    if (!controller.get('isLoggedIn')) {
      this.redirectToLogin();
    }
  },

  redirectToLogin: function() {
    this.transitionTo('auth.login');
  }
});

module.exports = Route;
