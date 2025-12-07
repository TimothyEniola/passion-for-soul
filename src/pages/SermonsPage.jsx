import { Play, Calendar, Clock } from 'lucide-react';
import { latestSermons } from '../data/mockData';

const SermonsPage = () => {
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  return (
    <div className="pt-20">
      {/* Page Header */}
      <div className="bg-[#011F5B] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Sermons & Messages</h1>
          <div className="w-24 h-1 bg-[#d4af37]"></div>
          <p className="mt-6 text-xl text-white/90 max-w-3xl">
            Watch and listen to inspiring messages that will strengthen your faith.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestSermons.map((sermon) => (
            <div
              key={sermon.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={sermon.thumbnailUrl}
                  alt={sermon.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#011F5B]/40 group-hover:bg-[#011F5B]/60 transition-colors duration-300"></div>
                
                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#d4af37] w-16 h-16 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-xl">
                  <Play className="w-8 h-8 text-[#011F5B] ml-1" fill="currentColor" />
                </button>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-[#011F5B] mb-2">
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
      </div>
    </div>
  );
};

export default SermonsPage;