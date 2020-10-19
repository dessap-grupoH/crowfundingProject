import React from 'react';
import ParticlesBg from "particles-bg";
import Navbar from "../Components/Navbar";
import "../Pages/Header.css"
import { useTranslation } from "react-i18next"

const Header = () => {

   const [t, i18n] = useTranslation("global");

   return (
      <header id="intro">
         <ParticlesBg type="cobweb" bg={true} />

         <Navbar
            refIntro="#intro"
            refProjects="#currentProjects"
            refDonate="#donate"
            refMyDonations="#myDonations"
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
