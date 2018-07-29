import _ from "lodash";
import { FETCH_ALL_POSTS, FETCH_POST, DELETE_POST } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_ALL_POSTS:
      return _.mapKeys(action.payload.data, "id");
    case FETCH_POST:
      const post = action.payload.data;
      return { ...state, [post.id]: post };
    case DELETE_POST:
      return _.omit(state, action.payload);
    default:
      return state;
  }
}
