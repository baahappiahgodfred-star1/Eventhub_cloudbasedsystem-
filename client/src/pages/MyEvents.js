import { useEffect, useState } from "react";
import axios from "axios";

function MyEvents() {

    const [events, setEvents] = useState([]);

    useEffect(() => {

        const loadEvents = async () => {

            const token =
                localStorage.getItem("token");

            const res = await axios.get(
                "https://eventhub-backend-dmsu.onrender.com/api/events/mine",
                {
                    headers: {
                        Authorization: token
                    }
                }
            );

            setEvents(res.data);

        };

        loadEvents();

    }, []);
    const deleteEvent = async (id) => {

        const token =
            localStorage.getItem("token");

        await axios.delete(
            `https://eventhub-backend-dmsu.onrender.com/api/events/${id}`,
            {
                headers: {
                    Authorization: token
                }
            }
        );

        setEvents(
            events.filter(
                event => event._id !== id
            )
        );

    };
    return (

        <div className="container mt-4">

            <h2>My Events</h2>

            {events.map(event => (

                <div
                    key={event._id}
                    className="card mb-3"
                >

                    <div className="card-body">

                        <h5>{event.title}</h5>

                        <p>{event.description}</p>

                        <p>{event.location}</p>

                        <p>{event.date}</p>
                        <button
                            className="btn btn-danger"
                            onClick={() =>
                                deleteEvent(event._id)
                            }
                        >
                            Delete
                        </button>
                    </div>

                </div>

            ))}

        </div>

    );

}

export default MyEvents;