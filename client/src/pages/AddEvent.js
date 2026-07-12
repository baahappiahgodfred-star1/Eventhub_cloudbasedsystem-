import { useState } from "react";
import api from "../services/api";

function AddEvent() {

  const [event, setEvent] = useState({
    title: "",
    description: "",
    category: "",
    wilaya: "",
    date: ""
  });

  const handleChange = (e) => {

    setEvent({
      ...event,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

        const token =
        localStorage.getItem("token");
        
        await api.post(
          "/events",
          event,
          {
            headers: {
              Authorization: token
            }
          }
        );

      alert("Event created successfully");

      setEvent({
        title: "",
        description: "",
        category: "",
        wilaya: "",
        date: ""
      });

    } catch (err) {

      console.log(err);

      alert("Error creating event");

    }

  };

  return (
    <div className="container mt-5">

      <h2>Add Event</h2>

      <form onSubmit={handleSubmit}>

        <input
          className="form-control mb-2"
          name="title"
          placeholder="Event Title"
          value={event.title}
          onChange={handleChange}
        />

        <textarea
          className="form-control mb-2"
          name="description"
          placeholder="Description"
          value={event.description}
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          name="category"
          placeholder="Category"
          value={event.category}
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          name="wilaya"
          placeholder="Wilaya"
          value={event.wilaya}
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          type="date"
          name="date"
          value={event.date}
          onChange={handleChange}
        />

        <button className="btn btn-primary">
          Create Event
        </button>

      </form>

    </div>
  );
}

export default AddEvent;