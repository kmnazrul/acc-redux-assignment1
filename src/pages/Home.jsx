import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BlogsCard from "../components/BlogsCard";
import auth from "../firebase.init";
import bg from "../img/bg.jpeg";
import getBlogsData from "../redux/thunk/fetchBlogs";

const Home = () => {
  const [user] = useAuthState(auth);

  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs.blogs);

  useEffect(() => {
    dispatch(getBlogsData());
  }, []);

  let [sortToggle, setSortToggle] = useState(true);

  const activeClass = "btn-active btn-primary text-white";

  let content;

  if (blogs && sortToggle) {
    content = (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {blogs
          .sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1))
          .map((blog) => (
            <BlogsCard key={blog._id} blog={blog}></BlogsCard>
          ))}
      </div>
    );
  } else if (blogs && !sortToggle) {
    content = (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {blogs
          .sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1))
          .map((blog) => (
            <BlogsCard key={blog._id} blog={blog}></BlogsCard>
          ))}
      </div>
    );
  }
  return (
    <div className="">
      <div
        className="hero rounded-lg "
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
        <div className="hero-content text-center text-white">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">
              Hello {user ? user.displayName : "there"}
            </h1>

            <div className="mb-5">
              {user ? (
                "Welcome to Tech Trends blog site"
              ) : (
                <>
                  <p>Welcome to Tech Trends blog site</p>
                  <p>Please login</p>
                  <Link to={"/login"} className="btn btn-sm btn-secondary">
                    Login
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <section className="ml-5 mt-3">
        <div>
          <span className="mr-1">Sort by:</span>
          <button
            onClick={() => setSortToggle(true)}
            className={`btn btn-xs ${sortToggle ? activeClass : "btn-ghost"}`}
          >
            Last Upload
          </button>
          <button
            onClick={() => setSortToggle(false)}
            className={`btn btn-xs ${!sortToggle ? activeClass : "btn-ghost"}`}
          >
            First Upload
          </button>
        </div>
      </section>
      <main className="mt-5">{content}</main>
    </div>
  );
};

export default Home;
