// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint"
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  globals: {
    document: true,
    window: true
  },
  settings: {
    "import/resolver": {
      "babel-module": {
        "alias": {
          "@": './src'
        }
      }
    }
  },
  extends: [
    "airbnb", //使用Airbnb风格的代码规范
  ],

  plugins: ["react", "jsx-a11y", "import"],
  // add your custom rules here
  rules: {
    // allow async-await
    "generator-star-spacing": "off",
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "jsx-a11y/href-no-hash": "off",
    "react/prop-types": [1, { ignore: ["children"] }],
    "react/prefer-stateless-function": 0,
    "react/forbid-prop-types": [0],
    "import/extensions": [1, { js: "never", json: "never" }],
    "import/no-extraneous-dependencies": [0]
  }
};
