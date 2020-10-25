import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import "../Pages/Projects.css";
import { Grid, LinearProgress } from '@material-ui/core';
import { useTranslation } from "react-i18next";
import { fetchOpenProjects } from "../Utils/Api";
import Info from '@material-ui/icons/Info';

const Projects = () => {

   const [t] = useTranslation("global");
   const [projects, setProjects] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
   const history = useHistory();

   useEffect(() => {
      if (isLoading) {
         fetchOpenProjects().then(response => {
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
                        <Info
                           className="info-icon"
                           onClick={() => history.push(`/project/${project.id}`)}
                        />
                     </Grid>
                     <Grid item xs={2}>
                        <div className="individualProject-text">
                           {project.placeToConnect.name}
                        </div>
                     </Grid>
                     <Grid item xs={2}>
                        <div className="individualProject-text">
                           {project.name}
                        </div>
                     </Grid>
                     <Grid item xs={2}>
                        <div className="individualProject-text">
                           {`$ ${project.moneyCollected}`}
                        </div>
                     </Grid>
                     <Grid item xs={2}>
                        <div className="individualProject-text">
                           {`80%`}
                        </div>
                     </Grid>
                     <Grid item xs={2}>
                        <div className="individualProject-text">
                           {project.donors.lenght || "0"}
                        </div>
                     </Grid>
                  </Grid>
               </div>
            </Grid>
         );
      }))



   return isLoading ? (
      <LinearProgress variant="indeterminate" />
   ) : (
         <section id="currentProjects">
            <div className="projects-container">
               <Grid container direction="column" spacing={2}>
                  <Grid item>
                     <Grid container spacing={2}>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={2}>
                           <div className="headerProject-container">
                              {t("projects.name")}
                           </div>
                        </Grid>
                        <Grid item xs={2}>
                           <div className="headerProject-container">
                              {t("projects.city")}
                           </div>
                        </Grid>
                        <Grid item xs={2}>
                           <div className="headerProject-container">
                              {t("projects.raised")}
                           </div>
                        </Grid>
                        <Grid item xs={2}>
                           <div className="headerProject-container">
                              {t("projects.percentaje-completed")}
                           </div>
                        </Grid>
                        <Grid item xs={2}>
                           <div className="headerProject-container">
                              {t("projects.number-of-contributors")}
                           </div>
                        </Grid>
                     </Grid>
                  </Grid>
                  {projectsItem}
               </Grid>
            </div>
         </section>
      );
}


export default Projects;
