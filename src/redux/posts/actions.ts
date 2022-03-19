import { Post } from "../../interfaces";
import { SAVE_POSTS, DELETE_POST } from "./types";

export const savePosts = (posts: Post[]) => {
  return { type: SAVE_POSTS, payload: posts };
};

export const deletePost = (postId: number) => {
  return { type: DELETE_POST, payload: postId };
};
