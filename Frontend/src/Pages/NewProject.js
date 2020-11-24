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
  const [selectedTown, setSelectedTown] = useState(null);
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
            onChangeTown={e => setSelectedTown(e.target.value)}
            town={selectedTown}
            onChangeName={e => setProjectName(e.target.value)}
            name={projectName}
            onChangeStartDate={e => setStartDate(e.target.value)}
            startDate={startDate}
            onChangeEndDate={e => setFinishDate(e.target.value)}
            endDate={finishDate}
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

