module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'main.css': 'main.less'
                }
            }
        },
        uglify: {
            target: {
                files:{
                    'dist/scrpts/main.min.js':'src/scripts/main.js'
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less'); //compilaçao do less
    grunt.loadNpmTasks('grunt-contrib-uglify'); //minificaçao javascript
    
    grunt.registerTask('default',['less', 'uglify']);
}