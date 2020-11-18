import React from 'react';
import ParticlesBg from "particles-bg";
import Navbar from "../Components/Navbar";
import Login from "../Components/Login";
import { useTranslation } from "react-i18next"
import "./Auth.css";

const Auth = () => {

  return (
    <div>
      <ParticlesBg color="#83adf181" type="cobweb" bg={true} />

      <Navbar
        refIntro="#intro"
        refProjects="#currentProjects"
        refProjectsToEndSoon="#projectsToEndSoon"
      />

      <div className="marginAuth">

        <Login />
      </div>

    </div>
  )


};

export default Auth;

