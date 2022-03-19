import { AnyAction } from "redux";
import { Post } from "../../interfaces";
import { SAVE_POSTS, DELETE_POST } from "./types";

// interface IAppState {
//   posts: Post[];
// }

// const initialState: IAppState = {
//   posts: [],
// };

const postReducer = (state = [], action: AnyAction) => {
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
