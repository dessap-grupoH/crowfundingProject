import React from 'react';
import "../Pages/Projects.css";
import { Grid } from '@material-ui/core';

const Projects = () => (
   <section id="currentProjects">
      <div className="projects-container">
         <Grid container direction="column" spacing={2}>
            <Grid item>
               <Grid container spacing={2}>
                  <Grid item xs={3}>
                     <div className="headerProject-container">
                        Nombre del oroyecto
                     </div>
                  </Grid>
                  <Grid item xs={3}>
                     <div className="headerProject-container">
                        Ciudad a conectar
                     </div>
                  </Grid>
                  <Grid item xs={3}>
                     <div className="headerProject-container">
                        Fecha de inicio
                     </div>
                  </Grid>
                  <Grid item xs={3}>
                     <div className="headerProject-container">
                        Recaudacion(en ars)
                     </div>
                  </Grid>
               </Grid>
            </Grid>
            <Grid item>
               <div className="individualProject-container">
                  <Grid container spacing={2}>
                     <Grid item xs={3}>
                        Proyecto  #1
                     </Grid>
                     <Grid item xs={3}>
                        Carmen de Patagones
                     </Grid>
                     <Grid item xs={3}>
                        17/10/2020
                     </Grid>
                     <Grid item xs={3}>
                        15000$
                     </Grid>
                  </Grid>
               </div>
            </Grid>
            <Grid item>
               <div className="individualProject-container">
                  <Grid container spacing={2}>
                     <Grid item xs={3}>
                        Proyecto  #2
                     </Grid>
                     <Grid item xs={3}>
                        Pergamino
                     </Grid>
                     <Grid item xs={3}>
                        17/10/2020
                     </Grid>
                     <Grid item xs={3}>
                        22000$
                     </Grid>
                  </Grid>
               </div>
            </Grid>
            <Grid item>
               <div className="individualProject-container">
                  <Grid container spacing={2}>
                     <Grid item xs={3}>
                        Proyecto  #3
                     </Grid>
                     <Grid item xs={3}>
                        Santa Rosa
                     </Grid>
                     <Grid item xs={3}>
                        17/10/2020
                     </Grid>
                     <Grid item xs={3}>
                        150000$
                     </Grid>
                  </Grid>
               </div>
            </Grid>
            <Grid item>
               <div className="individualProject-container">
                  <Grid container spacing={2}>
                     <Grid item xs={3}>
                        Proyecto  #4
                     </Grid>
                     <Grid item xs={3}>
                        Quilmes
                     </Grid>
                     <Grid item xs={3}>
                        17/10/2020
                     </Grid>
                     <Grid item xs={3}>
                        450$
                     </Grid>
                  </Grid>
               </div>
            </Grid>
         </Grid>
      </div>
   </section>
);


export default Projects;
