import React, { useState, useEffect } from 'react';
import './Events.css';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Using the Vite environment variable
  const AUTH_TOKEN = import.meta.env.VITE_EVENTBRITE_TOKEN; 

  useEffect(() => {
  if (!AUTH_TOKEN) return;

  // Step 1: Get your Organization ID first
  fetch(`https://www.eventbriteapi.com/v3/users/me/organizations/?token=${AUTH_TOKEN}`)
    .then(res => res.json())
    .then(data => {
      console.log("GFC Organization Data:", data);
      
      // Pull the ID from the first organization in the list
      if (data.organizations && data.organizations.length > 0) {
        const orgId = data.organizations[0].id;
        console.log("Found Org ID:", orgId);

        // Step 2: Use that ID to get the events
        return fetch(`https://www.eventbriteapi.com/v3/organizations/${orgId}/events/?token=${AUTH_TOKEN}`);
      } else {
        throw new Error("No organizations found for this account.");
      }
    })
    .then(res => res.json())
    .then(eventData => {
      if (eventData.events) {
        setEvents(eventData.events);
      }
      setLoading(false);
    })
    .catch(err => {
      console.error("GFC API Error:", err);
      setLoading(false);
    });
}, [AUTH_TOKEN])

  useEffect(() => {
    if (!loading && events.length === 0) {
      setEvents([
        {
          id: 'mock1',
          name: { text: 'GFC Business Strategy Retreat' },
          start: { local: '2026-05-20T09:00:00' },
          url: 'https://www.eventbrite.com'
        },
        {
          id: 'mock2',
          name: { text: 'Faceless Content Mastery' },
          start: { local: '2026-06-12T13:00:00' },
          url: 'https://www.eventbrite.com'
        }
      ]);
    }
  }, [loading, events.length]);

  return (
    <div className="container page-content">
      <header className="events-header">
        <h1>Grown Folks Collective Events</h1>
        <p>Purchase your event tickets to attend our next social networking event.</p>
      </header>

      {loading ? (
        <div className="loader">Getting the latest sessions...</div>
      ) : (
        <div className="events-grid">
          {events.map((item) => (
            <div key={item.id} className="event-card">
              <h3>{item.name.text}</h3>
              <p className="date">
                {new Date(item.start.local).toLocaleDateString()}
              </p>
              <a href={item.url} className="btn" target="_blank" rel="noopener noreferrer">
                Save My Spot
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Events;