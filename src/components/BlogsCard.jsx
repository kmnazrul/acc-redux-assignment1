import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import auth from "../firebase.init";
import removeBlog from "../redux/thunk/deleteBlog";

const BlogsCard = ({ blog }) => {
  const { author, body, headline, image, _id } = blog;

  const [user] = useAuthState(auth);

  const dispatch = useDispatch();

  return (
    <div className="flex justify-center ">
      <div className="card w-96  bg-base-100 shadow-xl">
        <figure className="h-[40%]">
          <Link to={`/blogs/${_id}`}>
            <img className="" src={image} alt="Shoes" />
          </Link>
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <Link to={`/blogs/${_id}`}>{headline}</Link>
            <div className="badge badge-secondary">{author}</div>
          </h2>
          <p className="h-40 ">{body?.slice(0, 200)}</p>
        </div>
        <div className="flex justify-center mb-2">
          {user && (
            <>
              <Link to={`update/${_id}`} className="btn btn-sm btn-accent mx-1">
                Edit
              </Link>
              <button
                className="btn btn-sm btn-error"
                onClick={() => dispatch(removeBlog(_id))}
              >
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogsCard;
