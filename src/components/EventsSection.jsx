import { Calendar, Clock, MapPin } from 'lucide-react';
import { upcomingEvents } from '../data/mockData';

const EventsSection = () => {
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#011F5B] mb-4">
            Upcoming Events
          </h2>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-6"></div>
          <p className="text-[#718096] text-lg max-w-2xl mx-auto">
            Stay connected with what's happening in our church community
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Event Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#011F5B]/80 to-transparent"></div>
              </div>

              {/* Event Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#011F5B] mb-3 group-hover:text-[#d4af37] transition-colors duration-300">
                  {event.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-[#718096] text-sm">
                    <Calendar className="w-4 h-4 text-[#d4af37]" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#718096] text-sm">
                    <Clock className="w-4 h-4 text-[#d4af37]" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#718096] text-sm">
                    <MapPin className="w-4 h-4 text-[#d4af37]" />
                    <span>{event.location}</span>
                  </div>
                </div>
                
                <p className="text-[#718096] text-sm leading-relaxed mb-4">
                  {event.description}
                </p>
                
                <button className="w-full bg-[#011F5B] text-white py-2 rounded-lg font-semibold hover:bg-[#d4af37] hover:text-[#011F5B] transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;