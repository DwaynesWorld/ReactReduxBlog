import axios from "axios";

const API_KEY = "key=14tf55";
const BASE_URL = "http://reduxblog.herokuapp.com/api";

export const FETCH_POST = "FETCH_POST";

export function fetchPosts() {
  const url = `${BASE_URL}/posts?${API_KEY}`;
  const request = axios.get(url);

  return {
    type: FETCH_POST,
    payload: request
  };
}
