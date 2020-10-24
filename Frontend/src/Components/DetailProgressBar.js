import React from 'react';
import { Grid, LinearProgress } from '@material-ui/core';
import "../Components/DetailItem.css";
import BarChartIcon from '@material-ui/icons/BarChart';

const DetailProgressBar = ({ value, min, max }) => (
  <Grid item xs={12}>
    <div className="projectDetails-infoContainer">
      <Grid container>
        <Grid item xs={1}>
          {<BarChartIcon
            style={{
              width: "50%",
              marginTop: "3%",
              marginLeft: "5%",
            }}
          />}
        </Grid>
        <Grid item xs={10}>
          <div className="projectDetails-bar">
            <div style={{ display: "inline-block", float: "left" }}>{min}</div>
            <LinearProgress
              variant="determinate"
              value={value}
              style={{
                height: "13px",
                border: "solid black 0.5px",
                marginLeft: "3%",
                marginTop: "0.5%",
                width: "80%",
                display: "inline-block",
                float: "left"
              }}
            />
            <div style={{ display: "inline-block", float: "left", marginLeft: "2%" }}>{max}</div>
          </div>
        </Grid>
      </Grid>
    </div>
  </Grid >
);

export default DetailProgressBar;