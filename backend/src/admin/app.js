import logo from "./extensions/ly.svg";
import favicon from "./extensions/favicon.ico";

const config = {
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
  auth: {
    logo,
  },
  menu: {
    logo,
  },
  head: {
    favicon,
  },
  tutorials: false,
  notifications: {
    releases: false,
  },

  translations: {
    en: {
      "app.components.HomePage.welcome": "Hello World",
    },
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
