import React from 'react';
import ParticlesBg from "particles-bg";
import Navbar from "../Components/Navbar";
import LoginComponent from "../Components/LoginComponent";
import BackNext from "../Components/Generics/BackNext";
import { useTranslation } from "react-i18next"
import "./Login.css";

const Login = () => {

  return (
    <div>
      <ParticlesBg color="#83adf181" type="cobweb" bg={true} />

      <Navbar
        refIntro="#intro"
        refProjects="#currentProjects"
        refProjectsToEndSoon="#projectsToEndSoon"
      />

      <div className="containerLog">
        <LoginComponent />
      </div>
      <BackNext
        width="35%"
        marginLeft="26%"
      />

    </div >
  )


};

export default Login;

