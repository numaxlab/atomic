const Encore = require('@symfony/webpack-encore')

if (!Encore.isRuntimeEnvironmentConfigured()) {
  Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev')
}

Encore
  // directory where compiled assets will be stored
  .setOutputPath('dist/')
  // public path used by the web server to access the output path
  .setPublicPath('/').
  disableSingleRuntimeChunk().
  cleanupOutputBeforeBuild().
  enableSourceMaps(!Encore.isProduction())

  // enable Sass/SCSS support
  .enableSassLoader()
  // enable PostCss support
  .enablePostCssLoader()

  // add entry points
  .addStyleEntry('css/style', './src/scss/style.scss').
  addStyleEntry('css/fonts', './src/scss/fonts.scss').
  addStyleEntry('css/icons', './src/scss/icons.scss')

module.exports = Encore.getWebpackConfig()
