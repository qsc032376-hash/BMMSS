import React from 'react';
import { Calendar, MapPin, Sparkles } from 'lucide-react';
import { Event } from '../types';

const events: Event[] = [
  {
    id: '1',
    title: 'Inaugural Meeting & Welcome',
    date: 'Sep 2026 (TBD)',
    location: 'Mathematics Building',
    description: 'Join us for the very first meeting of BMMSS! Meet the officers, learn about our mission, and enjoy some pizza.',
    type: 'social'
  },
  {
    id: '2',
    title: 'Workshop: Intro to Mathematical Modeling',
    date: 'Oct 2026 (TBD)',
    location: 'Dreese Labs',
    description: 'A beginner-friendly workshop covering the basics of MCM/ICM contest problems and how to approach them.',
    type: 'workshop'
  },
  {
    id: '3',
    title: '2027 MCM Team Formation',
    date: 'Nov 2026 (TBD)',
    location: 'Online / In-person',
    description: 'Start finding teammates for the upcoming Mathematical Contest in Modeling.',
    type: 'competition'
  }
];

const EventsSection: React.FC = () => {
  return (
    <div>
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
        <div className="flex">
          <div className="flex-shrink-0">
            <Sparkles className="h-5 w-5 text-blue-400" aria-hidden="true" />
          </div>
          <div className="ml-3">
            <p className="text-sm text-blue-700">
              The society is officially launching in <strong>Fall 2026</strong>. The events below are tentative examples of what we have planned!
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
            <div className={`h-2 w-full rounded-t-xl ${
              event.type === 'workshop' ? 'bg-blue-500' :
              event.type === 'competition' ? 'bg-[#BB0000]' :
              'bg-green-500'
            }`} />
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <span className={`px-2 py-1 text-xs font-bold uppercase rounded tracking-wide ${
                  event.type === 'workshop' ? 'bg-blue-100 text-blue-800' :
                  event.type === 'competition' ? 'bg-red-100 text-red-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {event.type.replace('_', ' ')}
                </span>
                <div className="flex flex-col items-end text-gray-500 text-sm font-medium">
                  <span className="flex items-center"><Calendar className="w-3 h-3 mr-1"/> {event.date}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
              <p className="text-gray-600 text-sm mb-4 flex-1">{event.description}</p>
              
              <div className="pt-4 border-t border-gray-100 flex items-center text-sm text-gray-500">
                <MapPin className="w-4 h-4 mr-1 text-gray-400" />
                {event.location}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsSection;