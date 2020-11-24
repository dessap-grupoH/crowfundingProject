import React, { useState, useEffect } from 'react';
import { Grid, LinearProgress } from '@material-ui/core';
import { useTranslation } from "react-i18next"
import DetailItem from "../Components/DetailItem";
import { fetchUser } from "../Utils/Api";
import Navbar from "../Components/Navbar";
import ParticlesBg from "particles-bg";
import DonationTable from "../Components/DonationTable";

const Profile = () => {

  const [userDetails, setUserDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [t] = useTranslation("global");

  useEffect(() => {
    if (isLoading) {
      fetchUser(localStorage.getItem("userID")).then((response) => {
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
          refProjectsToEndSoon="/#projectsToEndSoon"
        />

        <ParticlesBg color="#83adf181" type="cobweb" bg={true} />

        <div className="profile-cont">
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
          <DonationTable donations={userDetails.donationList} />
        </div >
      </div >
    );
}

export default Profile;
