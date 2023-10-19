import React from "react";
import "./Blog.css";
import { blogData } from "../../helpers/data";

const Blog = () => {
  return (
    <div className="container">
      {blogData.map((blog) => (
        <div className="card">
          <div className="face front">
            <img src={blog.foto} alt="" />
            <h3>{blog.name}</h3>
          </div>
          <div className="face back">
            <h3>{blog.name}</h3>
            <p>{blog.desc}</p>
            <div className="link">
              <a href="#">Details</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
