import {
  ADD_CONTENT,
  DELETE_CONTENT,
  GET_CONTENT,
  UPDATE_CONTENT,
} from "./type";

export const getBlogs = (data) => {
  return {
    type: GET_CONTENT,
    payload: data,
  };
};

export const addBlog = (blog) => {
  return {
    type: ADD_CONTENT,
    payload: blog,
  };
};

export const deleteBlog = (id) => {
  return {
    type: DELETE_CONTENT,
    payload: id,
  };
};

export const updateBlog = (id, data) => {
  return {
    type: UPDATE_CONTENT,
    payload: id,
    data,
  };
};
