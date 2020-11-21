import React from 'react';
import ParticlesBg from "particles-bg";
import Navbar from "../Components/Navbar";
import RegisterComponent from "../Components/RegisterComponent";
import BackNext from "../Components/Generics/BackNext";

import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./Register.css";

const Register = () => {

  const history = useHistory();

  return (
    <div>
      <ParticlesBg color="#83adf181" type="cobweb" bg={true} />

      <Navbar
        refIntro="#intro"
        refProjects="#currentProjects"
        refProjectsToEndSoon="#projectsToEndSoon"
      />
      <div className="authsContainer">
        <div className="auths">
          <RegisterComponent />
        </div>
      </div>
      <BackNext
        width="35%"
        marginLeft="26%"
      />


    </div>
  )
};

export default Register;

