import { Link } from 'react-router-dom';
import { Church, Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { label: 'Our History', href: '/our-history' },
      { label: 'Mission & Vision', href: '/mission-vision' },
      { label: 'Our Beliefs', href: '/our-beliefs' },
      { label: 'Contact', href: '/contact' }
    ],
    resources: [
      { label: 'Online Giving', href: '/giving' },
      { label: 'Service Times', href: '/#services' },
      { label: 'Events', href: '/#events' },
      { label: 'Sermons', href: '/#media' }
    ],
    connect: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'Find a Parish', href: '/contact' },
      { label: 'Prayer Request', href: '/contact' },
      { label: 'Visit Us', href: '/contact' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-[#011F5B] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Church className="w-10 h-10 text-[#d4af37]" />
              <div>
                <h3 className="text-xl font-bold">RCCG</h3>
                <p className="text-[#d4af37] text-sm">Parish Name</p>
              </div>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              The Redeemed Christian Church of God - A place where lives are transformed and destinies are fulfilled.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="bg-white/10 hover:bg-[#d4af37] p-2 rounded-lg transition-all duration-300 transform hover:scale-110"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#d4af37]">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/80 hover:text-[#d4af37] transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-[#d4af37] rounded-full"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#d4af37]">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/80 hover:text-[#d4af37] transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-[#d4af37] rounded-full"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#d4af37]">Stay Connected</h4>
            <p className="text-white/80 mb-4 text-sm">
              Subscribe to our newsletter for updates and inspiration.
            </p>
            <form className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none transition-all duration-300"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#d4af37] text-[#011F5B] py-3 rounded-lg font-semibold hover:bg-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>
              © {currentYear} RCCG Parish Name. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#d4af37] transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#d4af37] transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;