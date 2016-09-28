const path = require('path');

const consumes = [];
const provides = [];

function setup(options, imports, register) {
  const metadata = {};

  const viewsPath = path.join(__dirname, '/views');
  const layoutsDir = path.resolve(path.join(viewsPath, 'layouts'));
  const partialsDir = path.resolve(path.join(viewsPath, 'partials'));
  const publicPath = path.join(__dirname, '/public');
  
  metadata = {
    layoutsDir: layoutsDir,
    partialsDir: partialsDir,
    defaultLayout: 'main',
    publicPath: publicPath
  };

  return register(null, {
    'grevil.template': metadata
  });
}

setup.consumes = consumes;
setup.provides = provides;

module.exports = setup;
