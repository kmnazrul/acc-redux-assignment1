import axios from "axios";
import { deleteBlog } from "../actions/blogsActions";

const removeBlog = (id) => {
  return async (dispatch, getState) => {
    const res = await axios.delete(
      `https://tech-trends.onrender.com/blogs/${id}`
    );
    // console.log(res);

    dispatch(deleteBlog(id));
  };
};

export default removeBlog;
