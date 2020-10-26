import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { fetchOpenProjects } from "../Utils/Api";
import {
   Grid, Card, CardActions, CardContent, Button, Typography, LinearProgress
} from '@material-ui/core';
import "../Pages/ProjectsToEndSoon.css";

const ProjectsToEndSoon = ({ projectsToEndSoon }) => {

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
         });
      }
   }, []);

   const projectsToShow = projects.sort((f1, f2) =>
      new Date(f1.estimatedFinishDate) < new Date(f2.estimatedFinishDate)).slice(0, 4);



   return isLoading ? (
      <LinearProgress variant="indeterminate" />
   ) : (
         <section id="projectsToEndSoon">
            <Grid container direction="row">
               {
                  projectsToShow.map(p => {
                     return (
                        <Grid item xs={6}>
                           <Card className="card">
                              <CardContent>
                                 <Typography gutterBottom>
                                    {`Fecha de cierre estimada: ${p.estimatedFinishDate}`}
                                 </Typography>
                                 <hr></hr>
                                 <Typography variant="h5" component="h2">
                                    {p.name}
                                 </Typography>
                                 <Typography variant="body2" component="p">
                                    {`De este proyecto se completo el ${p.actualPercentageCompleted} %`}
                                 </Typography>
                              </CardContent>
                              <CardActions>
                                 <Button
                                    onClick={() => history.push(`/project/${p.id}`)}
                                    style={{ color: "white" }}
                                    size="small">
                                    Ver mas
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
