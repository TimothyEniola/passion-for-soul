import { Play, Calendar, Clock } from 'lucide-react';
import { latestSermons } from '../data/mockData';

const MediaSection = () => {
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  return (
    <section id="media" className="py-20 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#011F5B] mb-4">
            Latest Sermons
          </h2>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-6"></div>
          <p className="text-[#718096] text-lg max-w-2xl mx-auto">
            Watch and listen to our recent messages
          </p>
        </div>

        {/* Sermons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestSermons.map((sermon) => (
            <div
              key={sermon.id}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Thumbnail */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={sermon.thumbnailUrl}
                  alt={sermon.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#011F5B]/40 group-hover:bg-[#011F5B]/60 transition-colors duration-300"></div>
                
                {/* Play Button */}
                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#d4af37] w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  <Play className="w-8 h-8 text-[#011F5B] ml-1" fill="currentColor" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#011F5B] mb-2 group-hover:text-[#d4af37] transition-colors duration-300">
                  {sermon.title}
                </h3>
                
                <p className="text-[#718096] font-medium mb-4">
                  {sermon.preacher}
                </p>
                
                <div className="flex items-center justify-between text-sm text-[#718096]">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#d4af37]" />
                    <span>{formatDate(sermon.date)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#d4af37]" />
                    <span>{sermon.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-[#011F5B] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#d4af37] hover:text-[#011F5B] transition-all duration-300 transform hover:scale-105">
            View All Sermons
          </button>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;