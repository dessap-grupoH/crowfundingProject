import React, { useState, useEffect, } from 'react';
import { useParams } from "react-router";
import "../Pages/Projects.css";
import { Grid, LinearProgress } from '@material-ui/core';
import { useTranslation } from "react-i18next";
import { fetchProjects } from "../Utils/Api";
import "../Pages/Project[id].css";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import Info from '@material-ui/icons/Info';

const Project = () => {

  const [t] = useTranslation("global");
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { projectId } = useParams();

  useEffect(() => {
    if (isLoading) {
      fetchProjects().then(response => {
        const tempProjects = response.data;
        setProjects(tempProjects);
        setIsLoading(false);
      })
    }
    console.log(projects);
  }, []);

  const projectsItem = (
    projects.map((project) => {
      return (
        <Grid item>
          <div className="individualProject-container">
            <Grid container spacing={2}>
              <Grid item xs={1}>
                <Info className="info-icon" />
              </Grid>
              <Grid item xs={3}>
                <div className="individualProject-text">
                  {project.name}
                </div>
              </Grid>
              <Grid item xs={3}>
                <div className="individualProject-text">
                  {project.placeToConnect.name}
                </div>
              </Grid>
              <Grid item xs={3}>
                <div className="individualProject-text">
                  {`$ ${project.moneyCollected}`}
                </div>
              </Grid>
              <Grid item xs={1}></Grid>
              <Grid item xs={1}>
                <StarBorderIcon className="star-icon" />
              </Grid>
            </Grid>
          </div>
        </Grid>
      );
    }))



  return isLoading ? (
    <LinearProgress variant="indeterminate" />
  ) : (
      <div className="projects-container">
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Grid container spacing={2}>
              <Grid item xs={1}></Grid>
              <Grid item xs={3}>
                <div className="headerProject-container">
                  {t("projects-headers.name")}
                </div>
              </Grid>
              <Grid item xs={3}>
                <div className="headerProject-container">
                  {t("projects-headers.city")}
                </div>
              </Grid>
              <Grid item xs={3}>
                <div className="headerProject-container">
                  {t("projects-headers.raised")}
                </div>
              </Grid>
            </Grid>
          </Grid>
          {projectsItem}
        </Grid>
      </div>
    );
}


export default Project;
