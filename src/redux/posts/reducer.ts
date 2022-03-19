import { AnyAction } from "redux";
import { Post } from "../../interfaces";
import { SAVE_POSTS, DELETE_POST } from "./types";

type AppState = Post[];

const initialState: AppState = [];

const postReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SAVE_POSTS: {
      return action.payload;
    }
    case DELETE_POST: {
      // console.log(state.filter((post: Post) => post.id !== action.payload));

      return state.filter((post: Post) => post.id !== action.payload);
    }
    default: {
      return state;
    }
  }
};

export default postReducer;
