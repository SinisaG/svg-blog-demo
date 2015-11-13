module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            dist: {
                options: {
                    port: 3000,
                    base: {
                        path: '.'
                    },
                    open: true,
                    keepalive: true
                }
            }
        }
    });

    grunt.registerTask('serve', ['connect:dist']);
};