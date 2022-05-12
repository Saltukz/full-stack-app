import "./App.css";
import axios from "axios";

import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3050/getUsers")
      .then((response) => setUsers(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      <div className="row ">
        {users.map((user) => {
          <div className="col-md-4 col-sm-12">
            <div className="card radius-15">
              <div className="card-body text-center">
                <div className="p-4 border radius-15">
                  <img
                    src={user.img}
                    width={110}
                    height={110}
                    className="rounded-circle shadow"
                    alt=""
                  />
                  <h5 className="mb-0 mt-5">{user.name}</h5>
                  <p className="mb-3">{user.age}</p>
                  <div className="list-inline contacts-social mt-3 mb-3">
                    {" "}
                    <a
                      href="javascript:;"
                      className="list-inline-item bg-facebook text-white border-0"
                    >
                      <i className="bx bxl-facebook" />
                    </a>
                    <a
                      href="javascript:;"
                      className="list-inline-item bg-twitter text-white border-0"
                    >
                      <i className="bx bxl-twitter" />
                    </a>
                    <a
                      href="javascript:;"
                      className="list-inline-item bg-linkedin text-white border-0"
                    >
                      <i className="bx bxl-linkedin" />
                    </a>
                  </div>
                  <div className="d-grid">
                    {" "}
                    <a href="#" className="btn btn-outline-primary radius-15">
                      Contact Me
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>;
        })}

        <div />
      </div>
    </div>
  );
}

export default App;
