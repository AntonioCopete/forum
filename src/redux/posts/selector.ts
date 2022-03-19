import { createSelector } from "reselect";
import { Post } from "../../interfaces";

export interface RootState {
  posts: Post[];
}

const selectPostsState = (state: RootState) => state.posts;

export const postsSelector = createSelector(
  [selectPostsState],
  (posts) => posts
);
