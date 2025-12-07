import { Target, Eye, Heart } from 'lucide-react';

const MissionVisionPage = () => {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <div className="bg-[#011F5B] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Mission & Vision</h1>
          <div className="w-24 h-1 bg-[#d4af37]"></div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Mission */}
          <div className="bg-gradient-to-br from-[#011F5B] to-[#00356B] text-white rounded-2xl p-8 shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#d4af37] p-4 rounded-full">
                <Target className="w-8 h-8 text-[#011F5B]" />
              </div>
              <h2 className="text-3xl font-bold">Our Mission</h2>
            </div>
            <div className="space-y-4 text-white/90 leading-relaxed">
              <p className="font-semibold text-lg">To accomplish the following:</p>
              <ol className="list-decimal list-inside space-y-3 pl-4">
                <li>To make heaven</li>
                <li>To take as many people with us</li>
                <li>To have a member of RCCG in every family of all nations</li>
                <li>To accomplish No. 1 above, holiness will be our lifestyle</li>
                <li>To accomplish No. 2 and 3 above, we will plant churches within five minutes walking distance in every city and town of developing countries and within five minutes driving distance in every city and town of developed countries</li>
              </ol>
              <p className="italic text-[#d4af37] mt-6">
                "We will pursue these objectives until every nation in the world is reached for the Lord Jesus Christ."
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl border-2 border-[#d4af37]">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#011F5B] p-4 rounded-full">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-[#011F5B]">Our Vision</h2>
            </div>
            <div className="space-y-4 text-[#718096] leading-relaxed">
              <p>
                We see a church that is committed to the Great Commission, passionate about worship, 
                dedicated to prayer, and devoted to reaching the lost.
              </p>
              <p>
                A church where every member is equipped and empowered to fulfill their God-given purpose 
                and make a lasting impact in their communities and beyond.
              </p>
              <p>
                We envision a global movement of believers who are transformed by the power of God's Word 
                and are actively engaged in transforming their world through the gospel of Jesus Christ.
              </p>
              <p className="font-semibold text-[#011F5B] mt-6">
                "A church in every neighborhood, reaching every nation with the love of Christ."
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-[#f8f9fa] rounded-2xl p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-[#011F5B] p-4 rounded-full">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-[#011F5B]">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Biblical Truth and Sound Doctrine',
              'Prayer and Worship',
              'Evangelism and Missions',
              'Holiness and Righteousness',
              'Love and Unity',
              'Excellence in Service'
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#d4af37] rounded-full mt-2"></div>
                  <p className="text-[#2d3748] font-medium">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVisionPage;