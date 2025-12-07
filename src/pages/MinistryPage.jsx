import { BookOpen, Heart, Users, Globe } from 'lucide-react';

const MinistryPage = () => {
  const ministries = [
    {
      icon: BookOpen,
      title: 'Bible Study',
      description: 'Weekly Bible study sessions to deepen your understanding of God\'s Word.',
      image: 'https://images.pexels.com/photos/11696719/pexels-photo-11696719.jpeg?w=600&q=80'
    },
    {
      icon: Heart,
      title: 'Outreach Programs',
      description: 'Community outreach and evangelism to spread the gospel of Jesus Christ.',
      image: 'https://images.pexels.com/photos/16102709/pexels-photo-16102709.jpeg?w=600&q=80'
    },
    {
      icon: Users,
      title: 'Youth Ministry',
      description: 'Empowering young people to live purposeful lives for Christ.',
      image: 'https://images.pexels.com/photos/34328512/pexels-photo-34328512.jpeg?w=600&q=80'
    },
    {
      icon: Globe,
      title: 'Missions',
      description: 'Global missions to reach the unreached with the love of Christ.',
      image: 'https://images.pexels.com/photos/2774570/pexels-photo-2774570.jpeg?w=600&q=80'
    }
  ];

  return (
    <div className="pt-20">
      {/* Page Header */}
      <div className="bg-[#011F5B] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Ministries</h1>
          <div className="w-24 h-1 bg-[#d4af37]"></div>
          <p className="mt-6 text-xl text-white/90 max-w-3xl">
            Discover the various ways we serve God and our community through our ministries.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {ministries.map((ministry, index) => {
            const Icon = ministry.icon;
            return (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative h-48">
                  <img src={ministry.image} alt={ministry.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#011F5B]/80 to-transparent"></div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-[#011F5B] p-3 rounded-full">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#011F5B]">{ministry.title}</h3>
                  </div>
                  <p className="text-[#718096] leading-relaxed mb-6">{ministry.description}</p>
                  <button className="bg-[#d4af37] text-[#011F5B] px-6 py-2 rounded-lg font-semibold hover:bg-[#011F5B] hover:text-white transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MinistryPage;