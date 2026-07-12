import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AddEvent from "./pages/AddEvent";
import MyEvents from "./pages/MyEvents";

function App() {
  const token =
    localStorage.getItem("token");
  return (
    <BrowserRouter>

      <nav className="navbar navbar-dark bg-dark">
        <div className="container">

          <Link className="navbar-brand" to="/">
            EventHub
          </Link>

          <div>
            {
              token && (

                <Link
                  className="btn btn-warning me-2"
                  to="/add-event"
                >
                  Add Event
                </Link>

              )
            }

            <Link className="btn btn-outline-light me-2" to="/register">
              Register
            </Link>

            <Link className="btn btn-outline-success" to="/login">
              Login
            </Link>
            {
              token && (

                <button
                  className="btn btn-danger"
                  onClick={() => {

                    localStorage.removeItem("token");

                    window.location.reload();

                  }}
                >
                  Logout
                </button>

              )
            }
            {
              token && (

                <Link
                  className="btn btn-info me-2"
                  to="/my-events"
                >
                  My Events
                </Link>

              )
            }
          </div>

        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-event" element={<AddEvent />} />
        <Route
          path="/my-events"
          element={<MyEvents />}
        />
      </Routes>

    </BrowserRouter>
  );
}

export default App;