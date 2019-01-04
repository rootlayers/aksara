let mix = require('laravel-mix');
require('laravel-mix-purgecss');

let cssPath = 'css'

mix.disableNotifications();

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.sass('resources/assets/sass/website/app.scss', cssPath + '/main.css' )
    .purgeCss();
