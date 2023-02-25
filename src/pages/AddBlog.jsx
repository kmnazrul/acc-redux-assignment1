import React, { useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import addNewBlog from "../redux/thunk/addBlog";

const AddBlog = () => {
  const [user] = useAuthState(auth);

  const [error, setError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const authorRef = useRef("");
  const headlineRef = useRef("");
  const imageRef = useRef("");
  const bodyRef = useRef("");

  const postHandle = () => {
    const author = authorRef.current.value;
    const headline = headlineRef.current.value;
    const image = imageRef.current.value;
    const body = bodyRef.current.value;

    let data = { author, headline, image, body };

    dispatch(addNewBlog(data));
    navigate("/");
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 rounded-lg">
        <div className="hero-content flex-col">
          <div className="text-center ">
            <h1 className="text-4xl font-bold">Create new blog!</h1>
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
                  defaultValue={user.displayName}
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
                  placeholder="Body"
                  id=""
                />
              </div>
              <div className="form-control mt-6">
                <button
                  onClick={postHandle}
                  className="btn btn-primary text-white"
                >
                  Post
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

export default AddBlog;
