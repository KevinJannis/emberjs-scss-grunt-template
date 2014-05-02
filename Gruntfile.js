var config = function(name) {
  return require('./grunt-tasks/' + name + '.js');
};

module.exports = function (grunt) {
  require('matchdep')
    .filterDev('grunt-*')
    .forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: config('watch'),
    emberTemplates: config('ember-templates'),
    browserify: config('browserify'),
    compass: config('compass'),
    uglify: config('uglify'),
    cssmin: config('cssmin')
  });

  grunt.registerTask('development', ['browserify', 'emberTemplates:dev', 'compass:dev', 'watch']);
  grunt.registerTask('production', ['browserify', 'emberTemplates:dist', 'compass:dist', 'cssmin', 'uglify']);

  grunt.registerTask('default', ['development']);
};
