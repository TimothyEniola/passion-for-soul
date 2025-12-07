import { Users, Building, Globe, BookOpen } from 'lucide-react';

const OurStructurePage = () => {
  const structure = [
    {
      icon: Users,
      title: 'General Overseer',
      description: 'Pastor E.A. Adeboye leads the global ministry as the General Overseer of RCCG Worldwide.',
    },
    {
      icon: Globe,
      title: 'Continental Overseers',
      description: 'Regional leaders overseeing RCCG operations across different continents.',
    },
    {
      icon: Building,
      title: 'National Overseers',
      description: 'Country-level leadership managing parishes and operations within each nation.',
    },
    {
      icon: BookOpen,
      title: 'Parish Pastors',
      description: 'Local church leaders serving congregations in communities worldwide.',
    },
  ];

  return (
    <div className="pt-20">
      {/* Page Header */}
      <div className="bg-[#011F5B] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Structure</h1>
          <div className="w-24 h-1 bg-[#d4af37]"></div>
          <p className="mt-6 text-xl text-white/90 max-w-3xl">
            Understanding the organizational structure of The Redeemed Christian Church of God.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Leadership Structure */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {structure.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="bg-[#011F5B] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#011F5B] mb-4">{item.title}</h3>
                <p className="text-[#718096] leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Organizational Chart */}
        <div className="bg-[#f8f9fa] rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-[#011F5B] mb-8 text-center">Organizational Hierarchy</h2>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-block bg-[#011F5B] text-white px-8 py-4 rounded-lg font-bold text-lg">
                General Overseer
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-[#d4af37] text-[#011F5B] px-6 py-3 rounded-lg font-semibold">
                  Continental Overseers
                </div>
              </div>
              <div className="text-center">
                <div className="bg-[#d4af37] text-[#011F5B] px-6 py-3 rounded-lg font-semibold">
                  Continental Overseers
                </div>
              </div>
              <div className="text-center">
                <div className="bg-[#d4af37] text-[#011F5B] px-6 py-3 rounded-lg font-semibold">
                  Continental Overseers
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-white border-2 border-[#011F5B] text-[#011F5B] px-6 py-3 rounded-lg font-semibold">
                  National Overseers
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white border-2 border-[#011F5B] text-[#011F5B] px-6 py-3 rounded-lg font-semibold">
                  National Overseers
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white border-2 border-[#d4af37] text-[#2d3748] px-6 py-3 rounded-lg font-semibold">
                Parish Pastors & Local Churches
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStructurePage;