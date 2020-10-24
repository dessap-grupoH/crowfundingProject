import React from 'react';
import { Grid } from '@material-ui/core';
import "../Components/DetailItem.css";

const DetailItem = ({ icon, detail }) => (
  <Grid item xs={6}>
    <div className="projectDetails-infoContainer">
      <Grid container>
        <Grid item xs={4}>
          {icon}
        </Grid>
        <Grid item xs={8}>
          <div className="projectDetails-infoText">
            {detail}
          </div>
        </Grid>
      </Grid>
    </div>
  </Grid>
);

export default DetailItem;