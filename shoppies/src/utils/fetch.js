import axios from "axios";
const URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&type=movie&s=`;

const fetch = async (query) => {
  return await axios.get(`${URL}${query}`);
};

export default fetch;
