// Import Olympe runtime. This includes Draw.
import 'olympe';

// We need to import the bricks implementation so that Webpack can register them
// We employ webpack-import-glob-loader to import all bricks implementation
import './Core/**/*.js';
