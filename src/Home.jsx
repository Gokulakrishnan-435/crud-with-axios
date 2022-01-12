import React, { Fragment } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "./Axios/axios";

const Home = () => {
  let { id } = useParams();

  let [state, setState] = useState([]);
  let [loading, setloading] = useState(false);

  useEffect(() => {
    let fetchData = async () => {
      let payload = await axios.get("/posts");
      setState(payload.data);
    };
    fetchData();
  }, [id]);

  let mapData = state.map(x => {
    return (
      <Fragment key={x.id} className="border-collapse border-8">
        <tr>
          <td>{x.id}</td>
          <td>{x.create}</td>

          <td  className="flex ">
            <div>
              <Link to={`/edit/${x.id}`} className="bg-red-500 w-20 h-10 ">
                edit
              </Link>
            </div>
            <div>
              <Link to={`/delete/${x.id}`} className="bg-green-500 w-20 h-10 ">
                Delete
              </Link>
            </div>
          </td>
        </tr>
      </Fragment>
    );
  });
  return (
    <div>
      <Fragment>
        <div>
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>title</th>
                <th></th>
              </tr>
            </thead>
            <tbody>{mapData}</tbody>
          </table>
        </div>
      </Fragment>
    </div>
  );
};

export default Home;
