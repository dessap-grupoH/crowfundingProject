import React from 'react';
import { Grid } from '@material-ui/core';
import "../Components/DetailItem.css";

const DetailItem = ({ icon, detail, detailTitle }) => (
  <div className="detailContainer">
    <div className="detailLabel">{icon}{detailTitle}</div>
    <div className="detailItem">
      <p style={{ marginTop: "3px" }}>{detail}</p>
    </div>
  </div >
);

export default DetailItem;