/* import axios from "axios";
import {
  ADD_CONTENT,
  DELETE_CONTENT,
  GET_CONTENT,
  UPDATE_CONTENT,
} from "./type";

const API_URL = "https://tech-trends.onrender.com/blogs";

export const addNewBlog = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${API_URL}`, { data });
    dispatch({ type: ADD_CONTENT, payload: res.data.blog });
  } catch (error) {
    console.log("Error while calling addNewBlog API", error.message);
  }
};

export const getAllBlogs = () => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}`);
    dispatch({ type: GET_CONTENT, payload: res.data });
  } catch (error) {
    console.log("Error while calling getAllBlogs API", error.message);
  }
};

export const updateBlog = (id, data) => async (dispatch) => {
  try {
    const res = await axios.put(`${API_URL}/${id}`, { data });
    dispatch({ type: UPDATE_CONTENT, payload: res.data });
  } catch (error) {
    console.log("Error while calling updateBlog API", error.message);
  }
};

export const deleteBlog = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`${API_URL}/${id}`);
    dispatch({ type: DELETE_CONTENT, payload: res.data });
  } catch (error) {
    console.log("Error while calling deleteBlog API", error.message);
  }
};
 */
