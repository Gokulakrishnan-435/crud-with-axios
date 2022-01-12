import React, { useState } from "react";
import axios from "../Axios/axios";
import { useNavigate } from "react-router-dom";
const CreateList = () => {
  let navigate = useNavigate();
  let [state, setState] = useState({
    create:"",
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
          await axios.post("/posts", payload)
          navigate("/")
      }
      catch(error) {
          console.log(error);
      }
      setState({loading:false})
  };
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
          {loading === true ? "Loading" : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default CreateList;
