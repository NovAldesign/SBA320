import React, { useState, useEffect } from 'react';
import './Events.css';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // auth token coming from .env file
  const AUTH_TOKEN = import.meta.env.VITE_EVENTBRITE_TOKEN; 

  useEffect(() => {
   // Using fetch to pull hosted events from Eventbrite to show on page
    fetch(`https://www.eventbriteapi.com/v3/users/me/events/?token=${AUTH_TOKEN}`)
      .then(res => res.json())
      .then(data => {
        //check for events
        if (data.events) {
            setEvents(data.events);
        }
        setLoading(false);
    })
    .catch((err) => {
        console.error("Eventbrite sync failed:", err);
        setLoading(false);
    });
}, [AUTH_TOKEN]);

return (
    <div className="container">
        <header className="events-header">
            <h1>Grown Folks Collective Events</h1>
            <p>Purchase your event tickets to attend our next social networking event.</p>
        </header>
   {loading ? (
        <div className="loader">Getting the latest sessions...</div>
      ) : (
        <div className="events-grid">
          {events.length > 0 ? (
            events.map((item) => (
              <div key={item.id} className="event-card">
                {/* Using the Eventbrite name and start time for the card */}
                <h3>{item.name.text}</h3>
                <p className="date">
                  {new Date(item.start.local).toLocaleDateString()}
                </p>
                
                {/* CTA to register */}
                <a 
                  href={item.url} 
                  className="btn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Save My Spot
                </a>
              </div>
            ))
          ) : (
            <p>No upcoming events right now. Check back for the next even
                t!</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Events;