export default {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
    }
}

module.exports = {
    env: {
        node: true,
        commonjs: true,
        es2022: true,
    },
    extends: 'eslint:recommended',
    rules: {
        'no-unused-vars': 'off'
    },
};
