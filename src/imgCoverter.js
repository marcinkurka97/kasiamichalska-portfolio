const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');

(async () => {
  const files = await imagemin(['assets/imagesAnim/*.{jpg,png}'], {
    destination: 'build/images',
    plugins: [
      imageminJpegtran(),
      imageminPngquant({
        quality: [1, 1],
      }),
    ],
  });

  console.log(files);
  //=> [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …]
})();
