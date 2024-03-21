//Importação de plugins instalados
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'))
const imagemin = require('gulp-imagemin');


//funções

//compressão scss para css
function styles(){
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('./dist/css'));
}

//minificação de imagens copm gulp
function images(){
    return gulp.src('./src/images/**/*')
    .pipe(imagemin()) //função
    .pipe(gulp.dest('./dist/images'));
}

//execução
exports.default = gulp.parallel (styles, images);


// watcher: Serve para manter os arquivos atualizados e upado em tempo real para evitar o uso do comando run gulp toda vez
exports.watch = function (){
    gulp.watch('./src/styles/*.scss', gulp.parallel (styles))
}
//No primeiro bloco colocamos o arquivo a ser observado e na sequencia o comando a ser executado.

//minificação de imagens copm gulp


