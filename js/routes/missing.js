var Route = Em.Route.extend({
  redirect: function () {
    this.transitionTo('dashboards.overview');
  }
});

module.exports = Route;
