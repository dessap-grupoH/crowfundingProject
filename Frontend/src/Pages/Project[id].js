import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import { List, LinearProgress, ListItem, ListItemText, Divider } from '@material-ui/core';
import location from "../Assets/location.png";
import cost from "../Assets/cost.png";
import schedule from "../Assets/schedule.png";
import clipboard from "../Assets/clipboard.png";
import money from "../Assets/money.png";
import rising from "../Assets/rising.png";
import list from "../Assets/list.png";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useTranslation } from "react-i18next"
import DetailItem from "../Components/DetailItem";
import DetailHeader from "../Components/DetailHeader";
import { fetchProjectDetail, closeProject } from "../Utils/Api";
import Navbar from "../Components/Navbar";
import ParticlesBg from "particles-bg";
import DetailProgressBar from "../Components/DetailProgressBar";
import { useHistory } from "react-router-dom";
import "../Pages/Project[id].css";
import "../Pages/Projects.css";

const Project = () => {

  const [projectDetail, setProjectDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { projectId } = useParams();
  const [t] = useTranslation("global");
  const history = useHistory();

  useEffect(() => {
    if (isLoading) {
      fetchProjectDetail(projectId).then((response) => {
        setProjectDetail(response.data);
        setIsLoading(false);
      }).catch((error) => console.log(error));
    };
  });

  const donationItems = () => (
    <List>
      {projectDetail.donors.map(d => (
        <div>
          <ListItem>
            <AccountCircleIcon style={{ marginRight: "5%" }} />
            <ListItemText primary={d.nick} />
            <ListItemText primary={d.totalAmount} />
          </ListItem>
          <Divider />
        </div>
      ))
      }
    </List>
  );


  return isLoading ? (
    <LinearProgress variant="indeterminate" />
  ) : (
      <div className="projectDetail-container">

        <ParticlesBg color="#83adf181" type="cobweb" bg={true} />

        <Navbar
          refIntro="/"
          refProjects="/#currentProjects"
        />

        <div className="projectDetails-cont">
          <DetailHeader
            projectName={projectDetail.name}
          />

          <DetailItem
            detailTitle={t("projects.city")}
            detail={projectDetail.placeToConnect.name}
            icon={<img src={location} style={{ width: "40px", marginRight: "10px" }} />}
          />
          <DetailItem
            detailTitle={t("projects.start-date")}
            detail={projectDetail.startDate}
            icon={<img src={schedule} style={{ width: "35px", marginRight: "10px" }} />}
          />
          <DetailItem
            detailTitle={t("projects.raised")}
            detail={projectDetail.moneyCollected}
            icon={<img src={money} style={{ width: "40px", marginRight: "10px" }} />}
          />
          <DetailItem
            detailTitle={t("projects.state")}
            detail={projectDetail.projectState}
            icon={<img src={clipboard} style={{ width: "40px", marginRight: "10px" }} />}
          />
          <DetailItem
            detailTitle={t("projects.price-per-habitant")}
            detail={projectDetail.pricePerInhabitant}
            icon={<img src={cost} style={{ width: "40px", marginRight: "10px" }} />}
          />
          {false &&
            <DetailItem
              detail={t("projects.make-donation")}
              isDonation
              onClickItem={() => history.push({
                pathname: "/donate",
                state: projectDetail.id
              })
              }
            />}

          {projectDetail.projectState === "Opened" &&
            <DetailItem
              detail={t("projects.close-project")}
              isCloseProjectButton
              onClickItem={
                closeProject(projectId)
                  .then(resp => console.log(resp))
                  .catch(e => console.log(e))}
            />}

          <DetailProgressBar
            progressBarTitle={t("projects.percentaje-completed")}
            value={projectDetail.actualPercentageCompleted}
            icon={<img src={rising} style={{ width: "40px", marginRight: "15px" }} />}
          />

          <div className="listLabel">
            {<img src={list} style={{ width: "40px", marginRight: "10px" }} />}
            {t("projects.donators-list")}</div>
          <div className="listContainer">
            {donationItems()}
          </div>

        </div >
      </div >
    );
}

export default Project;
