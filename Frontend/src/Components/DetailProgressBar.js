import React from 'react';
import { LinearProgress } from '@material-ui/core';
import "../Components/DetailProgressBar.css";

const DetailProgressBar = ({ value, icon, progressBarTitle }) => (
  <div className="barDetail">
    <div className="barLabel">{icon}{progressBarTitle}</div>
    <div className="barItem">
      <LinearProgress
        variant="determinate"
        value={value}
        style={{
          height: "40px",
          border: "solid black 0.5px",
          borderRadius: "15px",
          marginLeft: "1%",
          marginTop: "0.5%",
          width: "80%",
        }}
      />
    </div>
  </div>
);

export default DetailProgressBar;