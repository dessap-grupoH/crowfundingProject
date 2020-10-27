import React, { useState, useEffect } from 'react';
import { Grid, LinearProgress } from '@material-ui/core';
import { useTranslation } from "react-i18next"
import DetailItem from "../Components/DetailItem";
import { fetchUser } from "../Utils/Api";
import Navbar from "../Components/Navbar";
import DonationTable from "../Components/DonationTable";

const Profile = () => {

  const [userDetails, setUserDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [t] = useTranslation("global");

  useEffect(() => {
    if (isLoading) {
      fetchUser(2).then((response) => {
        setUserDetails(response.data);
        setIsLoading(false);
      }).catch((error) => console.log(error));
    };
  });

  return isLoading ? (
    <LinearProgress variant="indeterminate" />
  ) : (
      <div className="projectDetail-container">
        <Navbar
          refIntro="/"
          refProjects="/#currentProjects"
        />

        <div className="section-one">
          <div className="projectDetails-cont">
            <Grid container spacing={8}>
              <Grid container spacing={8}>
                  <Grid item xs={8}>
                    <Grid item xs={12}>
                      <Grid container spacing={8}>
                        <DetailItem
                          detailTitle={t("profile.name")}
                          detail={userDetails.username}
                        />
                        <DetailItem
                          detailTitle={t("profile.nickname")}
                          detail={userDetails.nick}
                        />
                        <DetailItem
                          detailTitle={t("profile.email")}
                          detail={userDetails.email}
                        />
                        <DetailItem
                          detailTitle={t("profile.points")}
                          detail={userDetails.actualPoints.toLocaleString(t("locale"))}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              <Grid item xs={8}>
                <DonationTable donations={userDetails.donationList} />
              </Grid>
            </Grid>
          </div>

          <div className="section-two">
            <svg className="separator__svg"
              width="100%"
              height="200"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              fill="#1f2447"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M 100 100 V 10 L 0 100" />
              <path d="M 30 73 L 100 18 V 10 Z" fill="#0a0e2c" strokeWidth="0" />
            </svg>
          </div>
        </div >
      </div >
    );
}

export default Profile;
