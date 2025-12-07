const OurHistoryPage = () => {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <div className="bg-[#011F5B] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our History</h1>
          <div className="w-24 h-1 bg-[#d4af37]"></div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-3xl font-bold text-[#011F5B] mb-6">The Beginning</h2>
              <p className="text-[#718096] leading-relaxed mb-4">
                The Redeemed Christian Church of God (RCCG) was founded in 1952 by Late Pa Josiah Olufemi Akindayomi, 
                a man of God who was born on November 28, 1909, in Ondo State, Nigeria. Before founding RCCG, 
                Pa Akindayomi was a member of the Cherubim and Seraphim Church.
              </p>
              <p className="text-[#718096] leading-relaxed mb-4">
                In July 1952, God spoke to him audibly and instructed him to start a church that would go to the 
                ends of the earth to preach the gospel. This divine instruction led to the birth of what we know 
                today as The Redeemed Christian Church of God.
              </p>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/15382617/pexels-photo-15382617.jpeg?w=800&q=80" 
                alt="Church History" 
                className="rounded-xl shadow-lg w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="bg-[#f8f9fa] rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-[#011F5B] mb-6">Growth and Expansion</h2>
            <p className="text-[#718096] leading-relaxed mb-4">
              Under the leadership of Pa Akindayomi, the church grew steadily. In 1981, Pastor Enoch Adejare Adeboye 
              became the General Overseer of the church. Under his leadership, RCCG has experienced unprecedented 
              growth both in Nigeria and internationally.
            </p>
            <p className="text-[#718096] leading-relaxed">
              Today, RCCG has presence in over 197 countries and territories with millions of members worldwide. 
              The church continues to fulfill its mandate of taking the gospel to the ends of the earth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-[#d4af37] mb-2">1952</div>
              <p className="text-[#718096]">Church Founded</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-[#d4af37] mb-2">197+</div>
              <p className="text-[#718096]">Countries & Territories</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-[#d4af37] mb-2">50K+</div>
              <p className="text-[#718096]">Parishes Worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurHistoryPage;