import axios from "axios";
const BASE_URL = "http://localhost:1337";

const getPost = axios.get(BASE_URL + "/api" + "/test1s?populate=*");
const getPostById = (id: any) =>
  axios.get(BASE_URL + "/api" + "/test1s/" + id + "?populate=*");
export default {
  getPost,
  getPostById,
  BASE_URL,
};
