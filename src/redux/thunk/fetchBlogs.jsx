import axios from "axios";
import { getBlogs } from "../actions/blogsActions";

const getBlogsData = () => {
  return async (dispatch, getState) => {
    const res = await axios.get("https://tech-trends.onrender.com/blogs");
    // console.log(res.data.result);

    if (res.data.result.length) {
      dispatch(getBlogs(res.data.result));
    }
  };
};

export default getBlogsData;
