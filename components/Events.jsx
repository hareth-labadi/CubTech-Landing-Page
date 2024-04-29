import React from 'react';
import EventCard from './EventCard';
import { events } from '@/constants'; // Assuming talks data

const Events = () => {
  return (
    <section id="events" className="mx-auto text-center mb-10">
      <h2 className="text-primary mb-4">Our Main Events</h2>
      <p className="mb-10">
      Explore Our Latest Events
      </p>
      <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-20 justify-items-center">
        {events.map((event, index) => (
          <EventCard key={event.title} {...event} />
        ))}
      </div>
    </section>
  );
};

export default Events;
