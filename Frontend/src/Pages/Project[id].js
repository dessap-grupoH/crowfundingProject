import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import "../Pages/Projects.css";
import {
  Grid, List, LinearProgress, ListItem, ListItemText, Divider
} from '@material-ui/core';
import { useTranslation } from "react-i18next";
import "../Pages/Project[id].css";
import Navbar from "../Components/Navbar";
import DetailProgressBar from "../Components/DetailProgressBar";
import DonateItem from "../Components/DonateItem";
import { fetchProjectDetail } from "../Utils/Api";
import LocationIcon from '@material-ui/icons/LocationOn';
import DetailItem from "../Components/DetailItem";
import DetailHeader from "../Components/DetailHeader";
import EventIcon from '@material-ui/icons/Event';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Project = () => {

  const [t] = useTranslation("global");
  const [projectDetail, setProjectDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { projectId } = useParams();

  const totalMoneyNeeded = () => {
    return projectDetail.placeToConnect.population * projectDetail.pricePerInhabitant
  };

  useEffect(() => {
    if (isLoading) {
      fetchProjectDetail(projectId).then((response) => {
        setProjectDetail(response.data);
        setIsLoading(false);
      }).catch((error) => console.log(error));
    };
  });

  const donationItems = () => {
    console.log(projectDetail)
    return (
      <List>
        {projectDetail.donors.map(d => (
          <div>
            <ListItem>
              <AccountCircleIcon style={{ marginRight: "5%" }} />
              <ListItemText primary={d.nick} />
            </ListItem>
            <Divider />
          </div>
        ))
        }
      </List>
    );
  };


  return isLoading ? (
    <LinearProgress variant="indeterminate" />
  ) : (
      <div className="projectDetail-container">
        <Navbar
          refIntro="/home#intro"
          refProjects="/home#currentProjects"
          refMyDonations="/home#myDonations"
        />

        <div className="section-one">
          <div className="projectDetails-cont">
            <Grid container direction="row" spacing={8}>
              <DetailHeader
                projectName={projectDetail.name}
              />

              <Grid container spacing={8}>
                <Grid item xs={8}>

                  <Grid item xs={12}>
                    <Grid container spacing={8}>
                      <DetailItem
                        detailTitle={t("projects.city")}
                        icon={<LocationIcon
                          style={{
                            width: "20%",
                            marginLeft: "5%",
                          }}
                        />}
                        detail={projectDetail.placeToConnect.name}
                      />
                      <DetailItem
                        detailTitle={t("projects.start-date")}
                        icon={<EventIcon
                          style={{
                            width: "20%",
                            marginLeft: "5%",
                          }}
                        />}
                        detail={projectDetail.startDate}
                      />
                      <DetailItem
                        detailTitle={t("projects.raised")}
                        icon={<MonetizationOnIcon
                          style={{
                            width: "20%",
                            marginLeft: "5%",
                          }}
                        />}
                        detail={projectDetail.moneyCollected}
                      />
                      <DetailItem
                        detailTitle={t("projects.state")}
                        icon={<SupervisorAccountIcon
                          style={{
                            width: "20%",
                            marginLeft: "5%",
                          }}
                        />}
                        detail={projectDetail.projectState}
                      />
                      <DetailItem
                        detailTitle={t("projects.price-per-habitant")}
                        icon={<EmojiPeopleIcon
                          style={{
                            width: "20%",
                            marginLeft: "5%",
                          }}
                        />}
                        detail={projectDetail.pricePerInhabitant}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Grid container spacing={8}>
                        <DetailProgressBar
                          progressBarTitle={t("projects.percentaje-completed")}
                          value={40}
                          min={0}
                          max={totalMoneyNeeded()}
                        />
                      </Grid>
                    </Grid>

                    <Grid item xs={12}>
                      <Grid container spacing={8}>
                        <DonateItem
                          donateItemTitle={t("projects.donate-select")}
                          donateButtonText={t("projects.donate-send")}
                          userId={2}
                          projectId={projectDetail.id}
                        />
                      </Grid>
                    </Grid>

                  </Grid>
                </Grid>

                <Grid item xs={3}>
                  <div className="projectList-label">{t("projects.donators-list")}</div>
                  <div className="projectDetails-infoContainer">
                    {donationItems()}
                  </div>
                </Grid>
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

export default Project;
