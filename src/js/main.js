import demo from './modules/demo';
import svg4e from 'svg4everybody';

// Modules Init.
demo();

// Add SVG Support for legacy browsers that don't support
// extenal SVG content.
// https://github.com/jonathantneal/svg4everybody
svg4e();
