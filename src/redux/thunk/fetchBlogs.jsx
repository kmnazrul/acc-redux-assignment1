import axios from "axios";
import { getBlogs } from "../actions/blogsActions";

const getBlogsData = () => {
  return async (dispatch, getState) => {
    const res = await axios.get("http://localhost:5000/blogs");
    // console.log(res.data.result);

    if (res.data.result.length) {
      dispatch(getBlogs(res.data.result));
    }
  };
};

export default getBlogsData;
