import { addBlog } from "../actions/blogsActions";

const addNewBlog = (blog) => {
  return async (dispatch, getState) => {
    const res = await fetch(`http://localhost:5000/blogs`, {
      method: "POST",
      body: JSON.stringify(blog),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);

    dispatch(addBlog({ _id: data.newBlog._id, ...blog }));

    if (data) {
      alert("Blog created");
    }
  };
};

export default addNewBlog;
