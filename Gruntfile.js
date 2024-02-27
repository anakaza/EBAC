// 1) Criar um arquivo Gruntfile;

module.exports = function (grunt){

    grunt.initConfig({
        less: {
            development:{
                options:{
                    paths: ['src/less'],
                },
// 2) Executar a compilação do LESS sem a minificação;
                files:{
                    'dist/styles/main.css':'src/*.less' 
                }
            }
        },

        uglify:{
            options:{
// 3) Executar a compressão de código JavaScript;
                compress:true
            },
        compressao:{
            files:{
                'dist/scripts/main.min.js': ['src/*.js']
            }
        }

    }

    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default',['less','uglify']);

}