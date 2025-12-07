import { Clock, Calendar } from 'lucide-react';
import { serviceTimes } from '../data/mockData';

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#011F5B] mb-4">
            Service Times
          </h2>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-6"></div>
          <p className="text-[#718096] text-lg max-w-2xl mx-auto">
            Join us for worship and fellowship. All are welcome!
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceTimes.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-[#d4af37]"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-[#011F5B]/10 p-3 rounded-lg">
                  <Calendar className="w-6 h-6 text-[#011F5B]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#011F5B] mb-1">
                    {service.name}
                  </h3>
                  <p className="text-[#d4af37] font-semibold">{service.day}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 mb-4 text-[#718096]">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">{service.time}</span>
              </div>
              
              <p className="text-[#718096] text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;