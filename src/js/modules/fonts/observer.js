import FontFaceObserver from 'fontfaceobserver';

/**
 * FontFaceObserver
 * https://github.com/bramstein/fontfaceobserver
 */

// The class that will be added to the document when
// the font(s) are loaded.
const loadedClass = 'fonts-loaded';

// The fonts to load and their variations (weights, styles).
const fonts = {
  worksans: [
    {
      weight: 400
    },
    {
      weight: 700
    }
  ]
};

export default function observe() {
  // Check if the fonts have been previously loaded
  // in the current session.
  if(sessionStorage.FontsLoaded) {
    document.documentElement.classList.add(loadedClass);
    return;
  }

  // Create observers for each font and it's variations.
  const observers = [];

  Object.keys(fonts).forEach((font) => {
    fonts[font].forEach((options) => {
      observers.push(new FontFaceObserver(font, options).load());
    });
  });

  // When all fonts are loaded, add a class to the <html/>
  // node and update the sessionStorage.
  Promise.all(observers)
    .then(() => {
      document.documentElement.classList.add(loadedClass);
      sessionStorage.FontsLoaded = true;
    })
    .catch(() => {});
}
