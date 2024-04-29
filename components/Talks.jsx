import React from 'react';
import TalkCard from './TalkCard';
import { talks } from '@/constants'; // Assuming talks data

const Talks = () => {
  return (
    <section id="talks" className="mx-auto text-center mb-10">
      <h2 className="text-primary mb-4">Our Talks and Courses</h2>
      <p className="mb-6 text-gray-700">
        Explore Our Latest Talks
      </p>
      <div className="grid grid-cols-3 text-gray-700 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8 justify-items-center">
        {talks.map((talk, index) => (
          <TalkCard key={talk.title} {...talk} />
        ))}
      </div>
    </section>
  );
};

export default Talks;
