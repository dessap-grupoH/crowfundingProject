import axios from "axios";

const HOST_URL = "http://localHost:8080";
const USER_URL = "/api/user";
const TOWNS_URL = "/api/towns";
const DONATION_URL = "/api/donation";
const PROJECT_URL = "/api/projects";


const fetchUser = (userID) =>
  axios.get(`${HOST_URL}${USER_URL}?id=${userID}`);

const fetchTowns = () =>
  axios.get(`${HOST_URL}${TOWNS_URL}`);

const fetchProjects = () =>
  axios.get(`${HOST_URL}${PROJECT_URL}`);

const fetchOpenProjects = () =>
  axios.get(`${HOST_URL}${PROJECT_URL}/open`);

const fetchProjectDetail = (proejctID) =>
  axios.get(`${HOST_URL}${PROJECT_URL}/details?id=${proejctID}`);

const postDonation = (donation) =>
  axios.post(`${HOST_URL}${DONATION_URL}`, donation);


export {
  fetchUser,
  fetchTowns,
  fetchProjects,
  fetchOpenProjects,
  fetchProjectDetail,
  postDonation
};
