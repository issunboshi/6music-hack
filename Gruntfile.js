module.exports = function (grunt) {

	var pathCSS 		= 'library/css/style.css';
	//var pathScss 		= "library/scss/custom-style.css";
	var pathDefer_js	= "library/js/defer/defer.js";

	grunt.initConfig({

		pkg: grunt.file.readJSON("package.json"),

		sass: {
			options: {
				style: "compressed",
			},
			dist: {									//whole dir
				files: [{
					expand: true,
					cwd: "library/scss",
					src: ["*.scss"],
					dest: "library/css",
					ext: ".css"
				}]
			}	
			//files: {
			//	src: "library/scss/custom-style.scss",	//single files
			//	dest: "library/css/custom-style.css"
			//}
		},

		autoprefixer: {
			single_file: {
				options: {
			  		browsers: ['last 2 versions'],
			  		map: {
		        		inline: false
		    		}	
			  	},
			  		src: pathCSS,
			  		dest: pathCSS
			},		
		},
			
		// concat: {
		// 	options: {
		// 		seperator: ";",
		// 		banner: "/* Northern Badger Concat */\n"
		// 	},
		// 	target: {
		// 		src: "library/js/defer/src/*.js",
		// 		dest: pathDefer_js
		// 	}
		// },

		// uglify: {
		// 	options: {
		// 		mangle: true,
		// 		compress: true,
		// 		sourceMap: true,
  //       		sourceMapName: 'library/js/uglify-sourcemap.map',
		// 		//banner: "/*  <%= pgk.author %> | <% pgk.license %>" + "| <%= grunt.template.date('dd-mm-yyyy') %> Defer JS File */\n"
		// 	},
		// 	target: {
		// 	 	src: pathDefer_js,      
 	// 			dest: "library/js/min/defer.min.js"	
		// 	}
		// },	

		
 		//imagemin: {                          		// Task
 		//  	squash: {                          		// Target
 		//  	  	options: {                       	// Target options
 		//  	  	  	optimizationLevel: 4,
 		//  	  	  	svgoPlugins: [{ removeViewBox: false }],
 		//  	  	},                        
 		//  	  	files: [{
 		//  	  	  	expand: true,                  	// Enable dynamic expansion
 		//  	  	  	cwd: 'library/img/',            // Src matches are relative to this path
 		//  	  	  	src: ['**/*.{png,jpg,gif}'],   	// Actual patterns to match
 		//  	  	  	dest: 'library/optim/'  			// Destination path prefix
 		//  	  	}]
 		//  	}
 		//},


 		//imageoptim: {
		//  	allImg: {
		//  	  	options: {
		//  	  	  jpegMini: false,
		//  	  	  imageAlpha: true,
		//  	  	  quitAfter: true
		//  	  	},
		//  	  	src: ['library/img']
		//  	}
		//},


		//uncss: {
		//  dist: {
		//    options: {
		//      ignore       : [/expanded/,/js/,/wp-/,/align/,/admin-bar/,/node_modules/],
		//      stylesheets  : ['library/css/custom-style.css'],
		//      ignoreSheets : [/fonts.googleapis/],
		//      urls         : [], //Overwritten in load_sitemap_and_uncss task
		//    },
		//    files: {
		//      'library/css/custom-style.css': ['**/*.php', '**/*.html']
		//    }
		//  }
		//},


		notify_hooks: {
		    options: {
		      	enabled: true,
		      	success: false, // whether successful grunt executions should be notified automatically
		      	duration: 3 // the duration of notification in seconds, for `notify-send only
		    }
		},


		watch: {
			all: {
				files: ["library/scss/*", "library/js/script.js", "index.html" ],	//Specify dir
				//files: ["library/**/*"],								//all files inside dir
				//files: ['!lib/dontwatch.js']							//!before/path means excluded
				tasks: ["sass", "autoprefixer", "notify_hooks"]
				//tasks: ["sass", "autoprefixer", "concat", "uglify", "newer:imagemin:img"]
			},	
			options: {
    		  livereload: true,
    		}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	//grunt.loadNpmTasks('grunt-uncss');
	//grunt.loadNpmTasks('grunt-imageoptim');
	//grunt.loadNpmTasks('grunt-contrib-imagemin');

	grunt.loadNpmTasks('grunt-notify');
	grunt.loadNpmTasks('grunt-contrib-watch');		//Must be 2nd to last
	grunt.loadNpmTasks('grunt-newer');				//Must be last


	grunt.registerTask("default", ['sass', 'autoprefixer', 'notify_hooks']);
	grunt.registerTask('img', ['newer:imageoptim:allImg']);
	grunt.registerTask('preDeploy', ['imageoptim:allImg', 'uncss']);
};
