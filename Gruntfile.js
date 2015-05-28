module.exports = function(grunt) {


  grunt.initConfig({
	uglify: {
      build: {
        src: ['js/libs/*.js'],
        dest: 'dist/ember.js'
      }
    },
    watch :{
      scripts :{
        files : ['js/app.js','dist/*.js','css/*.css','index.html'],
        options : {
          livereload : 9090
        }
      }
    }

  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['uglify']);  
};
