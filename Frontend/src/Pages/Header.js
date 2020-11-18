import React from 'react';
import Navbar from "../Components/Navbar";
import "../Pages/Header.css"
import { useTranslation } from "react-i18next"
import ParticlesBg from "particles-bg";
import { Grid } from '@material-ui/core';
import Login from "../Components/Login";

const Header = () => {

   const [t] = useTranslation("global");

   return (

      <header id="intro">
         <ParticlesBg color="#83adf181" type="cobweb" bg={true} />
         <Navbar
            refIntro="#intro"
            refProjects="#currentProjects"
            refProjectsToEndSoon="#projectsToEndSoon"
         />

         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline"> {t("header.crowdfunding-project")} </h1>
               <h3>
                  {t("header.project-description")}
               </h3>
               <hr />
            </div>
         </div>

      </header>

   );
}

export default Header;
