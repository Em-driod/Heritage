import React, { useEffect, useState } from 'react';
import EventForm from '../components/EventForm';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
}

const Home: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:5000/events');
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await response.json();
        setEvents(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Upcoming Events</h2>
      <EventForm onSubmit={(event, id) => {
        console.log('Event submitted:', event, id);
        // Add your logic to handle the submitted event here
      }} />

      {loading && <p className="text-center text-gray-500">Loading events...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <ul className="space-y-4">
        {events.length > 0 ? (
          events.map((event) => (
            <li
              key={event.id}
              className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p className="text-gray-700">{event.date} at {event.time}</p>
              <p className="text-gray-600">{event.location}</p>
              
           
            </li>
            
          ))
        ) : (
          !loading && <p className="text-center text-gray-500">No events found.</p>
        )}
      </ul>
    </div>
  );
};

export default Home;
