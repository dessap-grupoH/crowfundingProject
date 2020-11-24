import React, { useState, useEffect } from 'react';
import ParticlesBg from "particles-bg";
import Navbar from "../Components/Navbar";
import DonateForm from "../Components/DonateForm";
import donate from "../Assets/donate.png";

import { useLocation } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import "./Donate.css"

const Donate = () => {

  const location = useLocation();
  const [projectid] = useState(location.state)

  useEffect(() => { console.log(location) });
  return (
    <div>
      <ParticlesBg color="#83adf181" type="cobweb" bg={true} />

      <Navbar
        refIntro="/"
        refProjects="/#currentProjects"
        refProjectsToEndSoon="/#projectsToEndSoon"
      />
      <div className="donate">
        <div className="donateLabel">
          {<img alt="donate" src={donate} style={{ width: "55px", marginRight: "15px" }} />}{"Donar"}
        </div>
        <DonateForm
          userId={2}
          projectId={projectid}
        />
      </div>
    </div>
  )
};

export default Donate;

