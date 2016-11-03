module.exports = function(grunt) {

    grunt.initConfig({
        shell: {
            exportIcons: {
                command: 'sketchtool export slices src/icons.sketch --output=build/icons/'
            }
        },
        webfont: {
            icons: {
                src: 'build/icons/*.svg',
                dest: 'build/fonts/',
                destCss: 'build/css/',
                options: {
                    font: 'icons',
                    fontHeight: 96,
                    normalize: false,
                    ascent: 84,
                    descent: 12,
                    destHtml: 'build/',
                    templateOptions: {
                        classPrefix: 'icon-'
                    },
                    customOutputs: [{
                        template: 'src/template.js',
                        dest: 'build/js/icon.js'
                    }]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-webfont');
    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('default', [ 'shell:exportIcons', 'webfont:icons' ]);


    // Currently using the following command to export PNG's from icon font
    // 		mogrify -path pngs -background none -density 216 -format png *.svg
    // Should migrate this to sketchtool
};