import axios from "axios";

//base URL to make request to db
const instance = axios.create({
  baseURL : 'https://api.themoviedb.org/3',
});

//get function appends the route in baseURL

export default instance;
