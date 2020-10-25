import React from 'react';
import "../Components/DetailHeader.css";
import { Grid, Avatar } from '@material-ui/core';

const DetailHeader = ({ projectName }) => {

  const extractInitialsLettersFrom = (projectName) => {
    const first = "P"
    const second = projectName.slice(9)[0].toUpperCase();
    return first.concat(second);
  }

  return (
    <Grid item xs={12}>
      <Grid container>
        <Grid item xs={1}>
          <Avatar
            style={{
              marginTop: "15%",
              backgroundColor: "#363b617",
              border: "white",
            }}
          >{extractInitialsLettersFrom(projectName)}
          </Avatar>
        </Grid>
        <Grid item xs={4}>
          <h2 className="projectDetails-title">{projectName}</h2>
        </Grid>
      </Grid>
      <hr style={{ width: "40%", marginRight: "60%" }}></hr>
    </Grid>
  );
};

export default DetailHeader;