var routes = function(){
  this.resource('auth', function() {
    this.route('login', { path: '/login' });
    this.route('logout', { path: '/logout' });
    this.route('forgotPassword', { path: '/forgot-password '});
  });

  this.route('missing', { path: "/*path" });
};

module.exports = routes;
