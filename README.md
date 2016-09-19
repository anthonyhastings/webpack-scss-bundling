# Webpack: SCSS Bundling

## Introduction

This repository demonstrates how to use Webpack to build your CSS bundles rather
than manually making your own and maintaining it's dependencies. By maintaining
the bundle yourself, the codebase needs to be carefully preened to ensure old
styles get removed as old components get removed. By moving your styling into
webpack we allow components to be truly compartmentalized, as the bundle will
now have the components CSS, HTML and JS.

## Installation

The entire project can be built via NPM scripts. Simply install the dependencies
then build:

```npm install && npm run-script build```

## Running

Load `dist/index.html` in a browser of your choice. There is no webserver
packaged as there isn't really a need for one. All assets are relative to the
HTML file.

## Notes

- The overall application view is the area of the application that loads the
global styles. This means we don't need to worry about loading them anywhere
else.

- Each component needs only include its styles, which should in turn import
any global sheets such as variables or mixins.

- There are a multitude of loaders and plugins at work here:
  - **sass-loader**: Converts SCSS into CSS (via `node-sass`).
  - **postcss-loader**: Runs the CSS through Autoprefixer.
  - **css-loader**: Makes it possible to load stylesheets into webpack.
  - **ExtractTextPlugin**: Outputs styles into an external stylesheet.

## Caveats

- `ExtractTextPlugin` has no way to ignore files currently. This means that both
of our JS bundles (unminified and minified) are outputting a stylesheet each.
There's already a ticket raised for this issue
[here](https://github.com/webpack/extract-text-webpack-plugin/issues/247).

- The UglifyJS webpack loader affects other loaders, and is actually minifying
the styles output from the loaders. This problem is fixed in Webpack 2. See
[this ticket](https://github.com/webpack/webpack/issues/283) for more details.