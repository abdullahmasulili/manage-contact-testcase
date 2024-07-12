import axios from "axios";

const APIManager = axios.create({
  baseURL: "https://contact.herokuapp.com",
});

APIManager.defaults.headers.common["Content-Type"] = "application/json";

export default APIManager;
