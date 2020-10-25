import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import "../Components/DonateItem.css";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DonateForm from "../Components/DonateForm";

const DonateItem = ({ userId, projectId, donateButtonText, donateItemTitle }) => {

  const [isOpenDonate, setOpenDoanate] = useState(false);


  return (
    <Grid item xs={12}>
      <div className="donate-container">
        <Grid container>
          <Grid item xs={2}>
            <div onClick={() => setOpenDoanate(!isOpenDonate)} style={{ cursor: "pointer" }}>
              <ExpandMoreIcon
                style={{
                  fontSize: "35px",
                  width: "30%",
                  marginLeft: "5%",
                }}
              />
            </div>
          </Grid>
          <Grid item xs={10}>
            <div className="donate-text">
              {donateItemTitle}
            </div>
          </Grid>
          {isOpenDonate &&
            <Grid item xs={12}>
              <DonateForm
                buttonText={donateButtonText}
                userId={userId}
                projectId={projectId}
              />
            </Grid>
          }
        </Grid>
      </div>
    </Grid>
  );
};

export default DonateItem;
