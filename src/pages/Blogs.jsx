import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import BlogsCard from "../components/BlogsCard";
import removeBlog from "../redux/thunk/deleteBlog";
// import { deleteBlog, updateBlog } from "../redux/actions/index";
import getBlogsData from "../redux/thunk/fetchBlogs";

const Blogs = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs.blogs);
  // console.log("🚀 ~ file: Blogs.jsx:10 ~ Blogs ~ blogs", blogs);

  useEffect(() => {
    dispatch(getBlogsData());
  }, [dispatch]);

  // const handleEdit = (_id, blog) => {
  //   dispatch(updateBlog(_id, blog));
  // };
  const handleDelete = (_id) => {
    dispatch(removeBlog(_id));
    alert("deleted");
  };

  return (
    <div>
      <h1 className="text-3xl text-center font-bold mb-5">All Blogs </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {blogs?.map((blog) => (
          <BlogsCard
            key={blog._id}
            blog={blog}
            /* handleEdit={handleEdit}*/
            handleDelete={handleDelete}
          ></BlogsCard>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
