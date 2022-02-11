import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Axios from "./../Axios";

const DeletePosts = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  let [state, setState] = useState({
    loading: false,
    title: "",
    author: "",
  });

  let { title, author, loading } = state;
  useEffect(() => {
    let fetchData = async () => {
      let deletedData = await Axios.get(`/post/${id}`);
      setState(deletedData.data);
    };
    fetchData();
  }, [id]);

  let handleDelete = async () => {
    Axios.delete(`/post/${id}`);
    navigate("/");
  };

  return (
    <div className="removeBlock">
      <aside>
        <div className="float-left">
          <h1 className="h4">
            {title}
            <span className="text-success">{author}</span>
          </h1>
        </div>
        <div className="float-right">
          <button onClick={handleDelete} className="btn btn-danger">
            Delete
          </button>
        </div>
      </aside>
    </div>
  );
};

export default DeletePosts;
