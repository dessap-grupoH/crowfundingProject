import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "./global.css";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import globalEs from "../src/Translations/Es/global.json";
import globalEn from "../src/Translations/En/global.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      global: globalEs
    },
    en: {
      global: globalEn
    }
  }
});

ReactDOM.render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>,
  document.getElementById('root')
);
