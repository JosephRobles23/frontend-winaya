import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import EventCard from './EventCard';
import { MapPin } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  description: string;
  image: string;
  location: string;
  date: string;
  attending?: boolean;
}

export default function Events() {
  const [events, setEvents] = useState<Event[]>([
    {
      id: '1',
      title: 'Workshop de Emprendimiento',
      description: 'Aprende las bases para iniciar tu propio negocio con expertos del sector.',
      image: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      location: 'Centro Empresarial Lima',
      date: '2024-03-15',
    },
    {
      id: '2',
      title: 'Conferencia Tech Women',
      description: 'Únete a las mujeres líderes en tecnología para una jornada de networking.',
      image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      location: 'Hotel Westin Lima',
      date: '2024-03-20',
    },
    {
      id: '3',
      title: 'Feria de Emprendedoras',
      description: 'Exhibe tus productos y conecta con otras emprendedoras.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      location: 'Parque Kennedy, Miraflores',
      date: '2024-03-25',
    },
  ]);

  const handleAttendance = (eventId: string) => {
    setEvents(events.map(event => 
      event.id === eventId 
        ? { ...event, attending: !event.attending }
        : event
    ));
  };

  const calendarEvents = events
    .filter(event => event.attending)
    .map(event => ({
      title: event.title,
      date: event.date,
    }));

  return (
    <div className="max-w-7xl mx-auto py-6 px-4">
      <div className="mb-8 bg-white rounded-lg shadow-md p-4">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={calendarEvents}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth'
          }}
          height="auto"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map(event => (
          <EventCard
            key={event.id}
            event={event}
            onAttend={() => handleAttendance(event.id)}
          />
        ))}
      </div>
    </div>
  );
}