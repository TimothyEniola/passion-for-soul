import { Target, Eye, Heart } from 'lucide-react';
import { aboutContent } from '../data/mockData';

const AboutSection = () => {
  const features = [
    {
      icon: Target,
      title: aboutContent.mission.title,
      description: aboutContent.mission.description
    },
    {
      icon: Eye,
      title: aboutContent.vision.title,
      description: aboutContent.vision.description
    },
    {
      icon: Heart,
      title: aboutContent.values.title,
      description: aboutContent.values.items.join(' • ')
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#011F5B] mb-4">
            Who We Are
          </h2>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto"></div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-[#f8f9fa] to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-[#011F5B] w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#d4af37] transition-colors duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#011F5B] mb-4">
                  {feature.title}
                </h3>
                <p className="text-[#718096] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;