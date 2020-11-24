import React, { useState, useEffect } from 'react';
import Navbar from "../Components/Navbar";
import { useAuth0 } from "@auth0/auth0-react";
import "../Pages/Header.css";
import Toast from "../Components/Generics/Toast";
import { loginAuth0 } from "../Utils/Api";
import { useTranslation } from "react-i18next";
import { useHistory, useLocation } from "react-router-dom";
import ParticlesBg from "particles-bg";

const Header = () => {

   const [t] = useTranslation("global");
   const history = useHistory();
   const location = useHistory();
   const [toast, setToast] = useState(false);
   const { user, isLoading, getAccessTokenSilently } = useAuth0();

   useEffect(() => {
      if (!isLoading) {
         const test = getAccessTokenSilently();
         console.log(test);
         actionInNotLoggedUser();
         actionInAuth0User();
      };
   });

   const actionInNotLoggedUser = () => {
      if (!localStorage.getItem("accessToken") && !user) history.push("/login")
   }

   const actionInAuth0User = () => {
      if (!localStorage.getItem("accessToken") && user) {
         loginAuth0(user.nickname, user.email, user.given_name, "ndeahhh")
            .then(response => {
               localStorage.setItem("email", response.data.email);
               localStorage.setItem("userID", response.data.id);
               localStorage.setItem("nick", response.data.nick);
               localStorage.setItem("accessToken", response.data.token);
               setToast(true);
               setTimeout(() => { window.location.reload() }, 2000)
            });
      };
   };


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

         <Toast
            open={toast}
            handleClose={() => setToast(false)}
            content={`Se logeo correctamente con el usuario ${localStorage.getItem("email")}`}
            succes
         />

      </header>

   );
}

export default Header;
