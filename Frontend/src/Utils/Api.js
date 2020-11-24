import axios from "axios";
//const HOST_URL = "https://crowdfunding-project.herokuapp.com/";
const HOST_URL = "http://localhost:8080";
const USER_URL = "/api/user";
const TOWNS_URL = "/api/towns";
const DONATION_URL = "/api/donation";
const PROJECT_URL = "/api/projects";

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  config.headers.Authorization = token ? token : '';
  return config
});

const loginUser = (email, password) =>
  axios.post(`${HOST_URL}${USER_URL}/login`, { email: email, password: password })

const loginAuth0 = (nick, email, username, token) =>
  axios.post(`${HOST_URL}${USER_URL}/loginAuth0`, { email: email, nick: nick, username: username, token: token });

const fetchUser = (userID) =>
  axios.get(`${HOST_URL}${USER_URL}?id=${userID}`);

const fetchTowns = () =>
  axios.get(`${HOST_URL}${TOWNS_URL}`);

const fetchProjects = () =>
  axios.get(`${HOST_URL}${PROJECT_URL}`);

const fetchOpenProjects = () =>
  axios.get(`${HOST_URL}${PROJECT_URL}/open`);

const fetchAboutEnd = () =>
  axios.get(`${HOST_URL}${PROJECT_URL}/aboutToEnd`);

const fetchProjectDetail = (proejctID) =>
  axios.get(`${HOST_URL}${PROJECT_URL}/details?id=${proejctID}`);

const postDonation = (donation) =>
  axios.post(`${HOST_URL}${DONATION_URL}`, donation);

const closeProject = (projectId) =>
  axios.post(`${HOST_URL}${PROJECT_URL}/close?id=${projectId}`);

export {
  loginUser,
  fetchUser,
  fetchTowns,
  fetchProjects,
  fetchOpenProjects,
  fetchProjectDetail,
  postDonation,
  fetchAboutEnd,
  closeProject,
  loginAuth0
};
