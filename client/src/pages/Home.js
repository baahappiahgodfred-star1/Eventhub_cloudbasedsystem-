import { useEffect, useState } from "react";
import api from "../services/api";

function Home() {

  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {

    try {

      const res = await api.get("/events");

      setEvents(res.data);

    } catch (err) {

      console.log(err);

    }

  };

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(search.toLowerCase()) ||
    event.category.toLowerCase().includes(search.toLowerCase())
  );
  const deleteEvent = async (id) => {

    try {
  
      await api.delete(`/events/${id}`);
  
      loadEvents();
  
    } catch (err) {
  
      console.log(err);
  
    }
  
  };

  return (
    <div className="container mt-4">

      <h1 className="mb-4">
        EventHub Algeria
      </h1>

      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search by title or category..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="row">

        {filteredEvents.map((event) => (

          <div
            className="col-md-4"
            key={event._id}
          >

            <div className="card shadow mb-4">

              <div className="card-body">

                <h4>{event.title}</h4>

                <p>{event.description}</p>

                <span className="badge bg-primary">
                  {event.category}
                </span>

                <br />
                <br />

                <strong>
                  📍 {event.wilaya}
                </strong>

                <br />

                <small>
                  {new Date(event.date)
                    .toLocaleDateString()}
                </small>
                <button
  className="btn btn-danger mt-3"
  onClick={() => deleteEvent(event._id)}
>
  Delete
</button>
              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Home;