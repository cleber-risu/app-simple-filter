import pluginVue from "eslint-plugin-vue";
import eslintConfigPrettier from "eslint-config-prettier";
import someConfig from "some-other-config-you-use";

export default [
  // add more generic rulesets here, such as:
  // js.configs.recommended,
  ...pluginVue.configs["flat/recommended"],

  someConfig,
  eslintConfigPrettier,
  // ...pluginVue.configs['flat/vue2-recommended'], // Use this if you are using Vue.js 2.x.
  {
    files: ["*.vue", "**/*.vue"],
    rules: {
      // override/add rules settings here, such as:
      // 'vue/no-unused-vars': 'error'
    },
  },
];
