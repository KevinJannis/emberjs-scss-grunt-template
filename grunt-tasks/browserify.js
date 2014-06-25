module.exports = {
  dist: {
    files: {
      'js/application.js': ['js/main.js'],
    },
    options: {
      debug: true,

      shim: {
        jquery: {
          path: 'bower_components/jquery/dist/jquery.js',
          exports: '$'
        },
        handlebars: {
          path: 'bower_components/handlebars/handlebars.js',
          exports: 'Handlebars'
        },
        ember: {
          path: 'bower_components/ember/ember.js',
          exports: 'Ember',
          depends: {
            handlebars: 'Handlebars',
            jquery: '$'
          }
        },
        emberData: {
          path: 'bower_components/ember-data/ember-data.js',
          exports: 'EmberData',
          depends: {
            ember: 'Ember'
          }
        },
        emberI18n: {
          path: 'bower_components/ember-i18n/lib/i18n.js',
          exports: 'EmberI18n',
          depends: {
            ember: 'Ember'
          }
        },
        async: {
          path: 'bower_components/async/lib/async.js',
          exports: 'async'
        }
      },

      noParse:
      [
        // 'bower_components/**/*.js'
        'bower_components/jquery/dist/jquery.js',
        'bower_components/handlebars/handlebars.js',
        'bower_components/ember/ember.js',
        'bower_components/ember-i18n/lib/i18n.js',
        'bower_components/async/lib/async.js'
      ]
    }
  }
};
