import React, { useState, useEffect } from 'react';
import ParticlesBg from "particles-bg";
import Navbar from "../Components/Navbar";
import Button from "../Components/Generics/Button";
import back from "../Assets/back.jpg";
import "./Donate.css"
import DonateForm from "../Components/DonateForm";

import { useLocation } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./Auth.css";

const Donate = () => {

  const history = useHistory();
  const location = useLocation();
  const [projectid] = useState(location.state)

  useEffect(() => { console.log(location) });
  return (
    <div>
      <ParticlesBg color="#83adf181" type="cobweb" bg={true} />

      <Navbar
        refIntro="#intro"
        refProjects="#currentProjects"
        refProjectsToEndSoon="#projectsToEndSoon"
      />
      <div className="donateContainer">
        <div className="donate">
          <DonateForm
            userId={2}
            projectId={projectid}
          />
        </div>
      </div>

    </div>
  )
};

export default Donate;

