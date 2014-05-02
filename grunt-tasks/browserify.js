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
        },
        cryptojs: {
          path: 'bower_components/cryptojslib/components/core.js',
          exports: 'CryptoJS'
        },
        cryptojsX64: {
          path: 'bower_components/cryptojslib/components/x64-core.js',
          exports: null,
          deps: {
            CryptoJS: 'cryptojs'
          }
        },
        cryptojsSha1: {
          path: 'bower_components/cryptojslib/components/sha1.js',
          exports: null,
          deps: {
            CryptoJS: 'cryptojs'
          }
        },
        cryptojsBase64: {
          path: 'bower_components/cryptojslib/components/enc-base64.js',
          exports: null,
          deps: {
            CryptoJS: 'cryptojs'
          }
        },
        spin: {
          path: 'bower_components/spin.js/spin.js',
          exports: null
        },
        jqspin: {
          path: 'bower_components/spin.js/jquery.spin.js',
          exports: null,
          deps: {
            jquery: '$',
            spin: 'spin'
          }
        }
      },

      noParse:
      [
        // 'bower_components/**/*.js'
        'bower_components/jquery/dist/jquery.js',
        'bower_components/handlebars/handlebars.js',
        'bower_components/ember/ember.js',
        'bower_components/ember-i18n/lib/i18n.js',
        'bower_components/async/lib/async.js',
        'bower_components/cryptojslib/components/core.js',
        'bower_components/cryptojslib/components/sha1.js',
        'bower_components/cryptojslib/components/enc-base64.js',
        'bower_components/cryptojslib/components/x64-core.js',
        'bower_components/spin.js/spin.js',
        'bower_components/spin.js/jquery.spin.js'
      ]
    }
  }
};
