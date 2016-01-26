whn = require 'when'
path = require 'path'
Jimp = require 'jimp'

module.exports = ->
  class ArtworkResize
    constructor: ->
      @category = 'artwork'

    fs: ->
      extract: true
      detect: (f) ->
        artwork_dir = path.join('content', 'artwork')
        artwork_ext = ['.jpg', '.png']
        path.dirname(f.relative).slice(0, artwork_dir.length) == artwork_dir and path.extname(f.relative) in artwork_ext


    compile_hooks: ->
      write: (ctx) ->
        file_ext = path.extname(ctx.file.path)
        file_path = ctx.file.path.slice(0, ctx.file.path.length - file_ext.length)

        whn.promise (resolve, reject, notify) ->
          Jimp.read ctx.content, (err, img) ->
            if err
              reject err

            # crop and resize the image
            h = img.bitmap.height
            w = img.bitmap.width
            if w > h
              x = (w/2) - (h/2)
              img.crop(x, 0, h, h)
            else if w < h
              y = (h/2) - (w/2)
              img.crop(0, y, w, w)
            img.resize(400, 400)

            img.getBuffer Jimp.MIME_JPEG, (err, buffer) ->
              if err
                reject err
              resolve [
                {'path':file_path+file_ext},
                {'path':file_path+'-400x400'+file_ext, 'content':buffer}
              ]