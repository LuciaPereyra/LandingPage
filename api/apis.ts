import axios from "axios";

const apis = axios.create({
  baseURL: "https://api-test-ln.herokuapp.com",
});

export default apis;