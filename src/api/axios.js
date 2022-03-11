import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

const fetchPosts = async (page) => {
  const { data } = await axios.get(`${apiUrl}/posts?_page=${page}`);
  return data;
};

export { fetchPosts };
