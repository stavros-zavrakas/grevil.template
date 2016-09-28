'use strict';

const path = require('path');

const exphbs = require('express-handlebars');

const consumes = [];
const provides = ['grevil.template'];

function setup(options, imports, register) {
  let metadata = {};

  const viewsPath = path.join(__dirname, '/views');
  const layoutsDir = path.resolve(path.join(viewsPath, 'layouts'));
  const partialsDir = path.resolve(path.join(viewsPath, 'partials'));

  const expHbs = exphbs({
    layoutsDir: layoutsDir,
    partialsDir: partialsDir,
    defaultLayout: 'main'
  });

  const publicPath = path.join(__dirname, '/public');
  
  metadata = {
    viewsPath: viewsPath,
    engine: 'handlebars',
    exphbs: expHbs,
    publicPath: publicPath
  };

  return register(null, {
    'grevil.template': metadata
  });
}

setup.consumes = consumes;
setup.provides = provides;

module.exports = setup;
