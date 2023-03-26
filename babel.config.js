module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  env: {
    development: {
      // disable minification and other optimizations for development
      compact: false,
      minified: false
    }
  }
};
