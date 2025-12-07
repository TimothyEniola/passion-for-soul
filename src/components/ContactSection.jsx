import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    isPrayerRequest: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      isPrayerRequest: false
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#011F5B] mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-6"></div>
          <p className="text-[#718096] text-lg max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message or find a parish near you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-[#f8f9fa] rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#011F5B] mb-6">
              Send Us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-[#2d3748] font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#2d3748] font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-[#2d3748] font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none transition-all duration-300"
                  placeholder="(123) 456-7890"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-[#2d3748] font-medium mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none transition-all duration-300"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[#2d3748] font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none transition-all duration-300 resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="isPrayerRequest"
                  name="isPrayerRequest"
                  checked={formData.isPrayerRequest}
                  onChange={handleChange}
                  className="w-4 h-4 text-[#d4af37] border-gray-300 rounded focus:ring-[#d4af37]"
                />
                <label htmlFor="isPrayerRequest" className="text-[#2d3748]">
                  This is a prayer request
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#011F5B] text-white py-4 rounded-lg font-semibold hover:bg-[#d4af37] hover:text-[#011F5B] transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#011F5B] mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#011F5B] p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#011F5B] mb-1">Address</h4>
                    <p className="text-[#718096]">
                      123 Church Street<br />
                      City, State 12345<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#011F5B] p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#011F5B] mb-1">Phone</h4>
                    <p className="text-[#718096]">
                      +1 (234) 567-8900<br />
                      +1 (234) 567-8901
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#011F5B] p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#011F5B] mb-1">Email</h4>
                    <p className="text-[#718096]">
                      info@rccgparish.org<br />
                      pastor@rccgparish.org
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Parish Finder CTA */}
            <div className="bg-gradient-to-br from-[#011F5B] to-[#00356B] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Find A Parish Near You
              </h3>
              <p className="mb-6 text-white/90">
                Discover RCCG parishes in your area and join a community of believers.
              </p>
              <button className="bg-[#d4af37] text-[#011F5B] px-6 py-3 rounded-lg font-semibold hover:bg-white transition-all duration-300 transform hover:scale-105">
                Search Parishes
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;