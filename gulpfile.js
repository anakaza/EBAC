const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'))

function styles(){
    return gulp.src('./src/styles/*.scss')
    //compressão dos estilos
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('./dist/css'));
}

exports.default = styles;
// watcher: Serve para manter os arquivos atualizados e upado em tempo real para evitar o uso do comando run gulp toda vez
exports.watch = function (){
    gulp.watch('./src/styles/*.scss', gulp.parallel (styles))
}

//No primeiro bloco colocamos o arquivo a ser observado e na sequencia o comando a ser executado.

