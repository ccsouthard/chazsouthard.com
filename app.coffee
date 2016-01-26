axis            = require 'axis'
jeet            = require 'jeet'
rupture         = require 'rupture'
autoprefixer    = require 'autoprefixer-stylus'
ArtworkResize   = require './artwork-resize'
dynamic_content = require 'dynamic-content'
ClientTemplates = require 'client-templates'

module.exports =
  ignores: ['readme.md', '**/layout.*', '**/_*', '.gitignore', 'ship.*conf']

  extensions: [
    dynamic_content(),
    ClientTemplates(base: 'views/templates/'),
    ArtworkResize()
  ]

  stylus:
    use: [axis(), jeet(), rupture(), autoprefixer()]
    sourcemap: true

  'coffee-script':
    sourcemap: true

  jade:
    pretty: true