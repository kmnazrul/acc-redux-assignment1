import axios from "axios";
import { deleteBlog } from "../actions/blogsActions";

const removeBlog = (id) => {
  return async (dispatch, getState) => {
    const res = await axios.delete(`http://localhost:5000/blogs/${id}`);
    // console.log(res);

    dispatch(deleteBlog(id));
  };
};

export default removeBlog;
