import { updateBlog } from "../actions/blogsActions";

const updateBlogContent = (id, blog) => {
  return async (dispatch, getState) => {
    const res = await fetch(`https://tech-trends.onrender.com/blogs/${id}`, {
      method: "PUT",
      body: JSON.stringify(blog),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);

    dispatch(updateBlog(data));
  };
};

export default updateBlogContent;
