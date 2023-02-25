import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleBlog = () => {
  let { id } = useParams();
  const [blog, setBlog] = useState({});
  let date = +blog?.createdAt?.slice(8, 10) + 1;
  console.log(blog);
  if (date < 9) {
    date = "0" + date;
  }

  const { author, headline, image, body } = blog;

  useEffect(() => {
    fetch(`http://localhost:5000/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => setBlog(data.result));
  }, []);

  if (!blog) {
    return <p className="text-center font-bold text-3xl">Loading....</p>;
  }

  return (
    <div className="w-[90vw] mx-auto">
      <img className="w-ful;l h-[60vh]" src={image} alt="" />
      <h3 className="text-2xl font-bold">{headline}</h3>
      <p className="font-bold">
        Author: <span className="text-orange-600">{author}</span>
      </p>
      <p>
        {date ? (
          <>
            {" "}
            Date: {blog?.createdAt?.slice(0, 8)}
            {date}
          </>
        ) : null}
      </p>
      <br />

      <p>{body}</p>
    </div>
  );
};

export default SingleBlog;
