import axios from "axios";

const getTestsEndpoint = () =>
  axios.get("https://jsonplaceholder.typicode.com/photos/1");

export { getTestsEndpoint };
