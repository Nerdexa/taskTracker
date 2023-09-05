module.exports = {
  extends: [
    'stylelint-config-recess-order',
    'stylelint-config-recommended-scss',
    'stylelint-config-sass-guidelines', // NOTE: Style Guide (https://www.gaji.jp/blog/2022/02/08/9086/)
  ],
  rules: {
    // ::before, ::afterのコロンを2つにする
    'selector-pseudo-element-colon-notation': 'double',
    // クラス名でアンパサンド（&）は禁止（&:hoverなどはOK）
    'scss/selector-no-union-class-name': true,
    // import時の`_`を許容する
    'scss/at-import-no-partial-leading-underscore': null,
    // cssの改行の有無を無視する
    'rule-empty-line-before': null,
  },
  ignoreFiles: ['**/node_modules/**', 'css/reset.css'],
};
