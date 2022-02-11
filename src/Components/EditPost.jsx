import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Axios from "../Axios";

const EditPost = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  let [state, setState] = useState({
    loading: false,
    title: "",
    author: "",
  });

  let { loading, title, author } = state;

  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setState({ loading: true });
      let payload = { title, author };
      await Axios.put(`/post/${id}`, payload);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let fetchPosts = async () => {
      let existsData = await Axios.get(`/post/${id}`);
      setState(existsData.data);
    };
    fetchPosts();
  }, [id]);

  return (
    <section id="postsBlock" className="col-md-4 mx-auto bg-white p-2 mt-5">
      <article>
        <div className="h4 font-weight-bold text-success text-uppercase border-bottom">
          Update Post
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

export default EditPost;
