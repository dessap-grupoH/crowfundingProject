import React from 'react';
import "../Pages/Footer.css"
import { useTranslation } from "react-i18next";

const Footer = () => {

  const [t] = useTranslation("global");

  return (
    <footer>
      <div className="row">
        <div>
          <ul>
            {`${t("header.crowdfunding-project")} - 2020`}
          </ul>
        </div>
      </div>
    </footer>
  )
};


export default Footer;
