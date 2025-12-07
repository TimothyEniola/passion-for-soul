import { Book, Cross, Users, Heart } from 'lucide-react';

const OurBeliefsPage = () => {
  const beliefs = [
    {
      icon: Book,
      title: 'The Holy Bible',
      description: 'We believe in the divine inspiration and authority of the Holy Scriptures as the infallible Word of God.'
    },
    {
      icon: Cross,
      title: 'The Trinity',
      description: 'We believe in one God eternally existing in three persons: Father, Son, and Holy Spirit.'
    },
    {
      icon: Heart,
      title: 'Salvation',
      description: 'We believe in salvation through faith in Jesus Christ, His death, burial, and resurrection.'
    },
    {
      icon: Users,
      title: 'The Church',
      description: 'We believe in the universal church, the body of Christ, composed of all believers in Jesus Christ.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Page Header */}
      <div className="bg-[#011F5B] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Beliefs</h1>
          <div className="w-24 h-1 bg-[#d4af37]"></div>
          <p className="mt-6 text-xl text-white/90 max-w-3xl">
            The fundamental truths we hold dear and the biblical principles that guide our faith and practice.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Core Beliefs Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {beliefs.map((belief, index) => {
            const Icon = belief.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-[#d4af37]">
                <div className="bg-[#011F5B] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#011F5B] mb-4">{belief.title}</h3>
                <p className="text-[#718096] leading-relaxed">{belief.description}</p>
              </div>
            );
          })}
        </div>

        {/* Detailed Beliefs */}
        <div className="bg-[#f8f9fa] rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-[#011F5B] mb-8">Statement of Faith</h2>
          <div className="space-y-6 text-[#718096] leading-relaxed">
            <div>
              <h3 className="text-xl font-bold text-[#011F5B] mb-3">1. The Holy Scriptures</h3>
              <p>
                We believe that the Bible is the inspired Word of God, inerrant in its original writings, 
                and the final authority for faith and practice.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#011F5B] mb-3">2. The Godhead</h3>
              <p>
                We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit, 
                co-equal in nature, power, and glory.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#011F5B] mb-3">3. The Lord Jesus Christ</h3>
              <p>
                We believe in the deity of our Lord Jesus Christ, His virgin birth, His sinless life, 
                His miracles, His vicarious and atoning death, His bodily resurrection, His ascension 
                to the right hand of the Father, and His personal return in power and glory.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#011F5B] mb-3">4. Salvation</h3>
              <p>
                We believe that salvation is by grace through faith in Jesus Christ alone, and that 
                regeneration by the Holy Spirit is absolutely essential for personal salvation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#011F5B] mb-3">5. The Holy Spirit</h3>
              <p>
                We believe in the present ministry of the Holy Spirit, by whose indwelling the Christian 
                is enabled to live a godly life and to serve God effectively.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#011F5B] mb-3">6. Water Baptism</h3>
              <p>
                We believe in water baptism by immersion in the name of the Father, Son, and Holy Spirit 
                as a public declaration of faith in Jesus Christ.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#011F5B] mb-3">7. The Church</h3>
              <p>
                We believe in the universal church, the living spiritual body of which Christ is the head 
                and all regenerated persons are members.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#011F5B] mb-3">8. Second Coming</h3>
              <p>
                We believe in the personal, visible, and imminent return of our Lord Jesus Christ to 
                establish His kingdom on earth.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-[#011F5B] to-[#00356B] rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Want to Learn More?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join us for worship and discover more about what we believe and how you can grow in your faith.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[#d4af37] text-[#011F5B] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white transition-all duration-300 transform hover:scale-105"
          >
            Visit Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default OurBeliefsPage;