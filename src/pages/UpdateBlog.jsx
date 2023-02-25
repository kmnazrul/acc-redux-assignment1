import React, { useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import auth from "../firebase.init";
import updateBlogContent from "../redux/thunk/updateBlog";

const UpdateBlog = () => {
  let { id } = useParams();

  const [blog, setBlog] = useState({});
  const { author, headline, image, body } = blog;

  const [user] = useAuthState(auth);

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://tech-trends.onrender.com/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => setBlog(data.result));
  }, []);

  if (!blog) {
    return <p className="text-center font-bold text-3xl">Loading....</p>;
  }

  const authorRef = useRef("");
  const headlineRef = useRef("");
  const imageRef = useRef("");
  const bodyRef = useRef("");

  const handleUpdate = () => {
    const author = authorRef.current.value;
    const headline = headlineRef.current.value;
    const image = imageRef.current.value;
    const body = bodyRef.current.value;

    let data = { author, headline, image, body };

    dispatch(updateBlogContent(id, data));
    navigate("/");
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200 rounded-lg">
        <div className="hero-content flex-col">
          <div className="text-center ">
            <h1 className="text-4xl font-bold">Update blog!</h1>
          </div>
          <div className="card w-[90vw] shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Author</span>
                </label>
                <input
                  ref={authorRef}
                  className="input input-bordered w-full"
                  type="text"
                  defaultValue={author}
                  placeholder="Author"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Headline</span>
                </label>
                <input
                  ref={headlineRef}
                  className="input input-bordered w-full"
                  type="text"
                  defaultValue={headline}
                  placeholder="Headline"
                  id=""
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  ref={imageRef}
                  className="input input-bordered w-full"
                  type="text"
                  defaultValue={image}
                  placeholder="Image url"
                  id=""
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Body</span>
                </label>
                <textarea
                  ref={bodyRef}
                  className="textarea textarea-bordered w-full"
                  defaultValue={body}
                  placeholder="Body"
                  id=""
                />
              </div>
              <div className="form-control mt-6">
                <button
                  onClick={handleUpdate}
                  className="btn btn-primary text-white"
                >
                  Update
                </button>
              </div>
              <p className="text-center text-red-700">{error} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateBlog;
