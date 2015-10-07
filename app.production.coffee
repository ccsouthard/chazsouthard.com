axis            = require 'axis'
jeet            = require 'jeet'
rupture         = require 'rupture'
autoprefixer    = require 'autoprefixer-stylus'
dynamic_content = require 'dynamic-content'
ClientTemplates = require 'client-templates'

module.exports =
  ignores: ['readme.md', '**/layout.*', '**/_*', '.gitignore', 'ship.*conf']

  extensions: [
    dynamic_content(),
    ClientTemplates(base: 'views/templates/')
  ]

  stylus:
    use: [axis(), jeet(), rupture(), autoprefixer()]