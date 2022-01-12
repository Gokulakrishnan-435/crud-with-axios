import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../Axios/axios";
const EditList = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  let [state, setState] = useState({
    create: "",
    loading: false,
  });
  let { create, loading } = state;
  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setState({ loading: true });
      let payload = { create };
      await axios.put(`/posts/${id}`, payload);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
    setState({ loading: false });
  };
  useEffect(() => {
    let fetchPosts = async () => {
      let existsData = await axios.get(`/posts/${id}`);
      console.log(existsData.data);
    };
    fetchPosts();
  }, [id]);
  return (
    <form onSubmit={handleSubmit} className="mt-40 ml-28">
      <div>
        <input
          className="w-1/4 h-12 border-4 rounded-md"
          type="text"
          name="create"
          placeholder="create ur list"
          onChange={handleChange}
          value={create}
        />
        <button
          className="bg-red-500 font-bold h-12 w-52 rounded-md"
          onSubmit={handleSubmit}
        >
          {loading === true ? "Loading" : "Update"}
        </button>
      </div>
    </form>
  );
};

export default EditList;
