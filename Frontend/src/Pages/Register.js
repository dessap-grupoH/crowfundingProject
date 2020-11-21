import React from 'react';
import ParticlesBg from "particles-bg";
import Navbar from "../Components/Navbar";
import RegisterComponent from "../Components/RegisterComponent";
import Button from "../Components/Generics/Button";
import back from "../Assets/back.png";

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
          <div className="displayInlineBlock">
            <Button
              cssClass="buttonAuth0"
              icon={<img src={back} style={{ width: "60px", marginLeft: "10%" }} />}
              onClickButton={() => history.goBack()}
            />
          </div>
          <RegisterComponent />
        </div>
      </div>

    </div>
  )
};

export default Register;

