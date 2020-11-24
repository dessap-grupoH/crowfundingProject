import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { fetchAboutEnd } from "../Utils/Api";
import {
   Grid, Card, CardActions, CardContent, Button, Typography, LinearProgress
} from '@material-ui/core';
import ParticlesBg from "particles-bg";
import "../Pages/ProjectsToEndSoon.css";

const ProjectsToEndSoon = () => {

   const [t] = useTranslation("global");
   const [projects, setProjects] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
   const history = useHistory();

   useEffect(() => {
      if (isLoading) {
         fetchAboutEnd().then(response => {
            const tempProjects = response.data;
            setProjects(tempProjects);
            setIsLoading(false);
         });
      }
   }, []);


   return !localStorage.getItem("accessToken") ? "" :
      isLoading ? (
         <LinearProgress variant="indeterminate" />
      ) : (
            <section id="projectsToEndSoon">

               <ParticlesBg color="#83adf181" type="cobweb" bg={true} />

            <Grid container direction="row">
               {
                  projects.map(p => {
                     return (
                        <Grid item xs={6}>
                           <Card className="card">
                              <CardContent>
                                 <Typography gutterBottom>
                                    {`${t("projects-to-end-soon.estimated-finish-date")} ${new Date(p.estimatedFinishDate).toLocaleDateString(t("locale"))}`}
                                 </Typography>
                                 <hr></hr>
                                 <Typography variant="h5" component="h2">
                                    {p.name}
                                 </Typography>
                                 <Typography variant="body2" component="p">
                                    {`${t("projects-to-end-soon.percentaje-completed")} ${p.actualPercentageCompleted} %`}
                                 </Typography>
                              </CardContent>
                              <CardActions>
                                 <Button
                                    onClick={() => history.push(`/project/${p.id}`)}
                                    style={{ color: "white" }}
                                    size="small">
                                    {`${(t("projects-to-end-soon.see-more"))}`}
                                 </Button>
                              </CardActions>
                           </Card>
                        </Grid>

                        );
                     })
                  }
               </Grid>
            </section>
         )
};


export default ProjectsToEndSoon;
