import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from "./Routes"
import "./global.css";
import { I18nextProvider } from "react-i18next";
import { Auth0Provider } from "@auth0/auth0-react";
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

export const currentLanguaje = () => { return i18next; }

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientID = process.env.REACT_APP_AUTH0_CLIENT_ID

ReactDOM.render(
  <Auth0Provider domain={domain} clientId={clientID} redirectUri={window.location.origin}>
    <I18nextProvider i18n={i18next}>
      <Routes />
    </I18nextProvider>
  </Auth0Provider>,
  document.getElementById('root')
);
