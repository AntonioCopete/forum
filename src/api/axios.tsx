import axios from "axios";
import CONFIG from "../config/config";
import Author from "../interfaces/Author";
import Comment from "../interfaces/Comment";
import Post from "../interfaces/Post";

const apiUrl = CONFIG.api.url;

const fetchPosts = async (page: number): Promise<Post[]> => {
  const { data } = await axios.get(`${apiUrl}/posts?_page=${page}`);
  return data;
};

const fetchAuthors = async (): Promise<Author[]> => {
  const { data } = await axios.get(`${apiUrl}/users`);
  return data;
};
const fetchPostAuthor = async (userId: number): Promise<Author> => {
  const { data } = await axios.get(`${apiUrl}/users/${userId}`);
  return data;
};

const fetchPostComments = async (postId: number): Promise<Comment[]> => {
  const { data } = await axios.get(`${apiUrl}/comments?postId=${postId}`);
  return data;
};

export { fetchPosts, fetchPostAuthor, fetchPostComments, fetchAuthors };
