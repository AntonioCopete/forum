import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

const fetchPosts = async (page) => {
  const { data } = await axios.get(`${apiUrl}/posts?_page=${page}`);
  return data;
};

const fetchPostAuthor = async (userId) => {
  const { data } = await axios.get(`${apiUrl}/users/${userId}`);
  return data;
};

export { fetchPosts, fetchPostAuthor };
