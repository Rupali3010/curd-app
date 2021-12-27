import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "../Axios";

const CreatePosts = () => {
  let navigate = useNavigate();
  let [state, setState] = useState({
    title: "",
    author: "",
    loading: false,
  });

  let { title, author, loading } = state;
  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setState({ loading: true });
      let payload = { title, author };
      await Axios.post("/post", payload);
      navigate("/");
      //   console.log({ title, author });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section id="postsBlock" className="col-md-4 mx-auto bg-white p-2 mt-5">
      <article>
        <div className="h4 font-weight-bold text-success text-uppercase border-bottom">
          Create Post
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">title</label>
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="enter title"
              value={title}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">author</label>
            <input
              type="text"
              name="author"
              className="form-control"
              placeholder="enter author name"
              value={author}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <button className="btn btn-success">
              {loading ? " loading" : "Submit"}
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default CreatePosts;
