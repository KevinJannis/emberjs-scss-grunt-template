module.exports = {
  options: {
    sassDir: 'scss',
    cssDir: 'css'
  },
  dev: {
    environment: 'development',
    outputStyle: 'expanded'
  },
  dist: {
    environment: 'production',
    outputStyle: 'compressed'
  }
};
