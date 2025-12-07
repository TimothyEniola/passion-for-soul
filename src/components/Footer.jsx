// import { Link } from 'react-router-dom';
// import { Church, Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   const footerLinks = {
//     quickLinks: [
//       { label: 'Our History', href: '/our-history' },
//       { label: 'Mission & Vision', href: '/mission-vision' },
//       { label: 'Our Beliefs', href: '/our-beliefs' },
//       { label: 'Contact', href: '/contact' }
//     ],
//     resources: [
//       { label: 'Online Giving', href: '/giving' },
//       { label: 'Service Times', href: '/#services' },
//       { label: 'Events', href: '/#events' },
//       { label: 'Sermons', href: '/#media' }
//     ],
//     connect: [
//       { label: 'Contact Us', href: '/contact' },
//       { label: 'Find a Parish', href: '/contact' },
//       { label: 'Prayer Request', href: '/contact' },
//       { label: 'Visit Us', href: '/contact' }
//     ]
//   };

//   const socialLinks = [
//     { icon: Facebook, href: '#', label: 'Facebook' },
//     { icon: Twitter, href: '#', label: 'Twitter' },
//     { icon: Instagram, href: '#', label: 'Instagram' },
//     { icon: Youtube, href: '#', label: 'YouTube' }
//   ];

//   return (
//     <footer className="bg-[#011F5B] text-white">
//       {/* Main Footer */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
//           {/* Brand Section */}
//           <div>
//             <div className="flex items-center gap-3 mb-6">
//               <Church className="w-10 h-10 text-[#d4af37]" />
//               <div>
//                 <h3 className="text-xl font-bold">RCCG</h3>
//                 <p className="text-[#d4af37] text-sm">Parish Name</p>
//               </div>
//             </div>
//             <p className="text-white/80 mb-6 leading-relaxed">
//               The Redeemed Christian Church of God - A place where lives are transformed and destinies are fulfilled.
//             </p>
//             {/* Social Links */}
//             <div className="flex gap-3">
//               {socialLinks.map((social) => {
//                 const Icon = social.icon;
//                 return (
//                   <a
//                     key={social.label}
//                     href={social.href}
//                     aria-label={social.label}
//                     className="bg-white/10 hover:bg-[#d4af37] p-2 rounded-lg transition-all duration-300 transform hover:scale-110"
//                   >
//                     <Icon className="w-5 h-5" />
//                   </a>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-lg font-bold mb-6 text-[#d4af37]">Quick Links</h4>
//             <ul className="space-y-3">
//               {footerLinks.quickLinks.map((link) => (
//                 <li key={link.label}>
//                   <Link
//                     to={link.href}
//                     className="text-white/80 hover:text-[#d4af37] transition-colors duration-200 flex items-center gap-2"
//                   >
//                     <span className="w-1 h-1 bg-[#d4af37] rounded-full"></span>
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Resources */}
//           <div>
//             <h4 className="text-lg font-bold mb-6 text-[#d4af37]">Resources</h4>
//             <ul className="space-y-3">
//               {footerLinks.resources.map((link) => (
//                 <li key={link.label}>
//                   <Link
//                     to={link.href}
//                     className="text-white/80 hover:text-[#d4af37] transition-colors duration-200 flex items-center gap-2"
//                   >
//                     <span className="w-1 h-1 bg-[#d4af37] rounded-full"></span>
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Newsletter */}
//           <div>
//             <h4 className="text-lg font-bold mb-6 text-[#d4af37]">Stay Connected</h4>
//             <p className="text-white/80 mb-4 text-sm">
//               Subscribe to our newsletter for updates and inspiration.
//             </p>
//             <form className="space-y-3">
//               <div className="relative">
//                 <input
//                   type="email"
//                   placeholder="Your email"
//                   className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none transition-all duration-300"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-[#d4af37] text-[#011F5B] py-3 rounded-lg font-semibold hover:bg-white transition-all duration-300 flex items-center justify-center gap-2"
//               >
//                 <Mail className="w-4 h-4" />
//                 Subscribe
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Footer */}
//       <div className="border-t border-white/10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
//             <p>
//               © {currentYear} RCCG Parish Name. All Rights Reserved.
//             </p>
//             <div className="flex gap-6">
//               <a href="#" className="hover:text-[#d4af37] transition-colors duration-200">
//                 Privacy Policy
//               </a>
//               <a href="#" className="hover:text-[#d4af37] transition-colors duration-200">
//                 Terms of Service
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import logo from "../assets/logo.png"; // your logo path

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111] text-white min-h-[70vh] flex flex-col justify-center py-12">
      <div className="flex flex-col items-center justify-center space-y-20">

        {/* LOGO WITH GLOW */}
        <div className="relative group">
          {/* Glow behind */}
          <div className="absolute inset-0 rounded-full blur-2xl bg-[#d4af37]/30 scale-125 group-hover:bg-[#d4af37]/50 transition-all duration-500 h-[100px]"></div>

          <img
            src={logo}
            alt="RCCG Logo"
            className="relative w-24 h-24 object-contain transition-all duration-500 group-hover:scale-110 "
          />
        </div>

        {/* COPYRIGHT */}
        <p className="text-sm text-white/70 text-center px-4">
          © Copyright PSCM {currentYear}. All Rights Reserved. 
          Designed and Developed by PSCM IT DEPARTMENT.
        </p>

        {/* SOCIAL ICONS WITH GOLD TOP & BOTTOM HOVER LINES */}
        <div className="flex gap-6">
          {[Facebook, Twitter, Youtube, Instagram].map((Icon, index) => (
            <a
              key={index}
              href="#"
              className="relative group text-white/80 hover:text-[#d4af37] transition-all duration-300"
            >
              {/* TOP LINE */}
              <span className="absolute -top-2 left-0 w-0 h-[2px] bg-[#d4af37] transition-all duration-300 group-hover:w-full"></span>

              {/* ICON */}
              <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-125" />

              {/* BOTTOM LINE */}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#d4af37] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}
