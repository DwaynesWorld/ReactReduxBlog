import axios from "axios";

const API_KEY = "key=14tf55";
const BASE_URL = "http://reduxblog.herokuapp.com/api";

export const FETCH_ALL_POSTS = "FETCH_ALL_POSTS";
export const FETCH_POST = "FETCH_POST";
export const CREATE_POST = "CREATE_POST";
export const DELETE_POST = "DELETE_POST";

export function fetchAllPosts() {
  const url = `${BASE_URL}/posts?${API_KEY}`;
  const request = axios.get(url);

  return { type: FETCH_ALL_POSTS, payload: request };
}

export function fetchPost(id) {
  const url = `${BASE_URL}/posts/${id}?${API_KEY}`;
  const request = axios.get(url);

  return {
    type: FETCH_POST,
    payload: request
  };
}

export function createPost(values, callback) {
  const url = `${BASE_URL}/posts?${API_KEY}`;
  const request = axios.post(url, values).then(() => callback());

  return {
    type: CREATE_POST,
    payload: request
  };
}

export function deletePost(id, callback) {
  const url = `${BASE_URL}/posts/${id}?${API_KEY}`;
  const request = axios.delete(url).then(() => callback());

  return { type: DELETE_POST, payload: id };
}
