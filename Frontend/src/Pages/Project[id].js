import React, { useState, useEffect, } from 'react';
import { useParams } from "react-router";
import "../Pages/Projects.css";
import { Grid, Container, LinearProgress } from '@material-ui/core';
import { useTranslation } from "react-i18next";
import "../Pages/Project[id].css";
import Navbar from "../Components/Navbar";
import { fetchProjectDetail } from "../Utils/Api";

const Project = () => {

  const [t] = useTranslation("global");
  const [projectDetail, setProjectDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { projectId } = useParams();

  useEffect(() => {
    if (isLoading) {
      fetchProjectDetail(projectId).then((response) => {
        console.log(response)
        setProjectDetail(response.data);
        setIsLoading(false);
      }).catch((error) => console.log(error));
    };
  });


  return isLoading ? (
    <LinearProgress variant="indeterminate" />
  ) : (
      <div className="projectDetail-container">
        <Navbar
          refIntro="/home#intro"
          refProjects="/home#currentProjects"
          refDonate="/home#donate"
          refMyDonations="/home#myDonations"
        />

        <div className="section-one">
          <div className="projectDetails-cont">
            <Grid container direction="row">
              <Grid item xs={12}>
                <h2 className="projectDetails-title">{projectDetail.name}</h2>
                <hr style={{ width: "70%", align: "left" }}></hr>
              </Grid>
              <Grid>
                <p className="projectDetails-description" id="bioParagraph">{"hola"}</p>
              </Grid>
            </Grid>
          </div>


          <div className="section-two">
            <svg className="separator__svg"
              width="100%"
              height="400"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              fill="#1f2447"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M 100 100 V 10 L 0 100" />
              <path d="M 30 73 L 100 18 V 10 Z" fill="#0a0e2c" strokeWidth="0" />
            </svg>
          </div>
        </div>
      </div>
    );
}

export default Project;
