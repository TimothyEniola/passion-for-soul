import ContactSection from '../components/ContactSection';

const ContactPage = () => {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <div className="bg-[#011F5B] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <div className="w-24 h-1 bg-[#d4af37]"></div>
          <p className="mt-6 text-xl text-white/90 max-w-3xl">
            We'd love to hear from you. Get in touch with us today.
          </p>
        </div>
      </div>

      <ContactSection />
    </div>
  );
};

export default ContactPage;