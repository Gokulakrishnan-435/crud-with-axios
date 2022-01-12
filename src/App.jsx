import React from "react";
import CreateList from "./Component/CreateList";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./index.css";

import EditList from "./Component/EditList";
// import Navbar from "./Navbar";
import Home from "./Home";
import DeleteList from "./Component/DeleteList";
const App = () => {
  return (
    <Router>
      <div>
        <div id="createBlock" className="bg-black">
          <button id="createButton" >
            <Link to={"/create"}>
              Create List
            </Link>
          </button>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateList />} />
          <Route path="/edit/:id" element={<EditList />} />
          <Route path="/delete/:id" element={<DeleteList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
