import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import ParticlesBg from "particles-bg";
import Navbar from "../Components/Navbar";
import NewProjectComponent from "../Components/NewProjectComponent";
import BackNext from "../Components/Generics/BackNext";
import { registerUser } from "../Utils/Api";


import "./NewProject.css";

const NewProject = () => {

  const history = useHistory();
  const [location, setLocation] = useState(null);
  const [province, setProvince] = useState(null);
  const [population, setPopulation] = useState(null);
  const [projectName, setProjectName] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [finishDate, setFinishDate] = useState(null);

  return (
    <div>
      <ParticlesBg color="#83adf181" type="cobweb" bg={true} />

      <Navbar
        refIntro="#intro"
        refProjects="#currentProjects"
        refProjectsToEndSoon="#projectsToEndSoon"
      />
      <div className="newProjectContainer">
        <div className="newProject">
          <NewProjectComponent
            onChangeLocation={e => setLocation(e.target.value)}
            onChangeProvince={e => setProvince(e.target.value)}
            onChangePopulation={e => setPopulation(e.target.value)}
            onChangeName={e => setProjectName(e.target.value)}
            onChangeStartDate={e => setStartDate(e.target.value)}
            onChangeEndDate={e => setFinishDate(e.target.value)}
          />
        </div>
      </div>
      <BackNext
        onClickBack={() => history.goBack()}
        width="35%"
        marginLeft="26%"
      />


    </div>
  )
};

export default NewProject;

