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
    logo: logo,
  },
  menu: {
    logo: logo,
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
      "app.components.LeftMenu.navbrand.title": "Dashboard",
      "app.components.LeftMenu.navbrand.workplace": " ",
      "app.components.HomePage.welcome": "Hello World",
    },
  },

  theme: {
    // overwrite light theme properties
    light: {
      colors: {
        primary100: "#fef3c7",
        primary200: "#fde68a",
        primary500: "#f59e0b",
        buttonPrimary500: "#f59e0b",
        primary600: "#d97706",
        buttonPrimary600: "#d97706",
        primary700: "#b45309",
        buttonPrimary700: "#b45309",
        danger700: "#b72b1a",

        secondary100: "#dcfce7",
        secondary200: "#bbf7d0",
        secondary500: "#22c55e",
        secondary600: "#16a34a",
        secondary700: "#15803d",
      },
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
