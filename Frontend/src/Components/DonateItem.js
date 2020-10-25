import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { useTranslation } from "react-i18next"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "../Components/DonateItem.css";
import DonateForm from "../Components/DonateForm";

const DonateItem = ({ userId, projectId, onDonation }) => {

  const [isOpenDonate, setOpenDoanate] = useState(false);
  const [t] = useTranslation("global");

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
              {t("projects.donate-select")}
            </div>
          </Grid>
          {isOpenDonate &&
            <Grid item xs={12}>
              <DonateForm
                userId={userId}
                projectId={projectId}
                onDonation={onDonation}
              />
            </Grid>
          }
        </Grid>
      </div>
    </Grid>
  );
};

export default DonateItem;
