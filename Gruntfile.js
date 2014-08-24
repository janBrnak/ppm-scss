module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'css/style.css' : 'css/core/import.scss'
				}
			}
		},
		jshint: {
	      	files: ['Gruntfile.js', 'js/**/*.js'],
	      	options: {
	        	globals: {
	          		console: true,
	          		module: true,
	          		document: true
	        	}
	      	}
	    },
	    watch: {
	    	jshint: {
	    		files: ['<%= jshint.files %>'], 
	    		tasks: ['jshint']
	    	},
	    	sass: {
	    		files: 'css/**/*.scss',
				tasks: ['sass']	
	    	}
	    }
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
};