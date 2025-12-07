import { Heart, Users, Building, Gift } from 'lucide-react';

const GivingPage = () => {
  const givingOptions = [
    {
      icon: Heart,
      title: 'Tithes & Offerings',
      description: 'Give your tithes and offerings to support the work of the ministry.',
      link: '#'
    },
    {
      icon: Building,
      title: 'Building Fund',
      description: 'Contribute to our church building and expansion projects.',
      link: '#'
    },
    {
      icon: Users,
      title: 'Missions Support',
      description: 'Support our missionaries and outreach programs around the world.',
      link: '#'
    },
    {
      icon: Gift,
      title: 'Special Projects',
      description: 'Give towards specific projects and initiatives in the church.',
      link: '#'
    }
  ];

  return (
    <div className="pt-20">
      {/* Page Header */}
      <div className="bg-[#011F5B] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Online Giving</h1>
          <div className="w-24 h-1 bg-[#d4af37]"></div>
          <p className="mt-6 text-xl text-white/90 max-w-3xl">
            "Give, and it will be given to you. A good measure, pressed down, shaken together and running over." - Luke 6:38
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Giving Options */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {givingOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center">
                <div className="bg-[#011F5B] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#011F5B] mb-3">{option.title}</h3>
                <p className="text-[#718096] text-sm mb-6">{option.description}</p>
                <a 
                  href={option.link}
                  className="inline-block bg-[#d4af37] text-[#011F5B] px-6 py-2 rounded-lg font-semibold hover:bg-[#011F5B] hover:text-white transition-all duration-300"
                >
                  Give Now
                </a>
              </div>
            );
          })}
        </div>

        {/* Why Give Section */}
        <div className="bg-[#f8f9fa] rounded-2xl p-12 mb-12">
          <h2 className="text-3xl font-bold text-[#011F5B] mb-8 text-center">Why Give?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🙏</div>
              <h3 className="text-xl font-bold text-[#011F5B] mb-3">Worship</h3>
              <p className="text-[#718096]">
                Giving is an act of worship and obedience to God's Word.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">⛪</div>
              <h3 className="text-xl font-bold text-[#011F5B] mb-3">Support Ministry</h3>
              <p className="text-[#718096]">
                Your gifts enable us to spread the gospel and serve our community.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-[#011F5B] mb-3">Make Impact</h3>
              <p className="text-[#718096]">
                Together, we can reach more people with the love of Christ.
              </p>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="bg-gradient-to-br from-[#011F5B] to-[#00356B] rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">Secure & Easy Giving</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            We accept various payment methods to make your giving experience convenient and secure.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="bg-white/10 px-6 py-3 rounded-lg">Credit Card</div>
            <div className="bg-white/10 px-6 py-3 rounded-lg">Debit Card</div>
            <div className="bg-white/10 px-6 py-3 rounded-lg">Bank Transfer</div>
            <div className="bg-white/10 px-6 py-3 rounded-lg">Mobile Money</div>
          </div>
          <p className="text-sm text-white/70">
            All transactions are encrypted and secure. Your information is safe with us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GivingPage;