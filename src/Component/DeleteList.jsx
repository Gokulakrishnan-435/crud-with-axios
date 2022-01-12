import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../Axios/axios";
const DeleteList = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  let [state, setState] = useState({
    create: "",
    loading: false,
  });
  let { create, loading } = state;
  let handleDelete = async e => {
    await axios.delete(`/posts/${id}`);
    navigate("/");
  };
  useEffect(() => {
    let fetchData = async () => {
      let deletedata = await axios.get(`/posts/${id}`);
      setState(deletedata.data);
      console.log(deletedata);
    };
    fetchData();
  }, [id]);
  return (
    <div className="mt-10 ml-52">
      <h1 className="font-bold text-5xl">{create}</h1>
      <button className="bg-red-500 w-28 h-10 rounded-md mt-10 " onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteList;
