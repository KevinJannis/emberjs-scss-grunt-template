var routes = function(){
  this.resource('auth', function() {
    this.route('login', { path: '/login' });
    this.route('logout', { path: '/logout' });
    this.route('forgotPassword', { path: '/forgot-password '});
  });

  this.resource('dashboards', function() {
    this.route('overview', { path: '/overview' });
    this.route('pagesOverview', { path: '/:dashboardId/pages/overview' });
    this.route('pagesDetail', { path: '/:dashboardId/pages/:pageId' });
  });

  this.route('missing', { path: "/*path" });
};

module.exports = routes;
