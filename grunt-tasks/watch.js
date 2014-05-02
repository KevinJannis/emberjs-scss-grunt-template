module.exports = {
  js: {
    tasks: ['browserify'],
    files: ['js/**/*.js', '!js/application.js', '!js/application.min.js']
  },
  hbs: {
    tasks: ['emberTemplates:dev'],
    files: ['templates/**/*.hbs']
  },
  scss: {
    tasks: ['compass:dev'],
    files: ['scss/**']
  }
};
