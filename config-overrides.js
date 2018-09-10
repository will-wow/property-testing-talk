const rewireEslint = require("react-app-rewire-eslint");

function overrideEslintOptions(options) {
  options.rules = {
    "no-undef": 0,
    "no-unrestricted-globals": 0,
    "no-restricted-globals": 0
  };

  return options;
}

module.exports = function override(config, env) {
  // Eslint
  config = rewireEslint(config, env, overrideEslintOptions);

  // Raw load /code
  config.module.rules[1].oneOf.unshift({
    test: /code\//,
    use: "raw-loader",
    exclude: /node_modules/
  });

  return config;
};
