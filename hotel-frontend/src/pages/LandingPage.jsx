import React, { useEffect, useState } from "react";
import Navbar from '../layouts/Navbar';
import Modal from '../components/Modal';
import WalkInForm from '../components/Customer/WalkInForm';
import BookingForm from '../components/Customer/BookingForm';
import Footer from '../layouts/Footer';

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [language, setLanguage] = useState("en");
  const [lightboxImage, setLightboxImage] = useState(null);
  const [tableNumber, setTableNumber] = useState(null);
  const [showWalkInModal, setShowWalkInModal] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  // Updated Translations with Navbar items
  const translations = {
    en: {
      welcome: "Kimjai Hotel",
      tagline: "Welcome to elegance, comfort, and world-class hospitality.",
      journey: "Your journey begins here.",
      walkIn: "Walk-In Guest",
      bookRoom: "Book a Room",
      dining: "Fine Dining",
      diningDesc: "Exquisite cuisine & drinks",
      spa: "Spa & Pool",
      spaDesc: "Relax and rejuvenate",
      events: "Events",
      eventsDesc: "Host your special occasions",
      gallery: "Our Gallery",
      contact: "Need Help?",
      tableWelcome: "Welcome to Table",
      home: "Home",
      rooms: "Rooms",
    },
    es: {
      welcome: "Hotel Kimjai",
      tagline: "Bienvenido a la elegancia, comodidad y hospitalidad de clase mundial.",
      journey: "Tu viaje comienza aquí.",
      walkIn: "Huésped sin reserva",
      bookRoom: "Reservar una habitación",
      dining: "Gastronomía",
      diningDesc: "Cocina exquisita y bebidas",
      spa: "Spa y Piscina",
      spaDesc: "Relájate y rejuvenece",
      events: "Eventos",
      eventsDesc: "Celebra tus ocasiones especiales",
      gallery: "Nuestra Galería",
      contact: "¿Necesitas ayuda?",
      tableWelcome: "Bienvenido a la Mesa",
      home: "Inicio",
      rooms: "Habitaciones",
    },
    fr: {
      welcome: "Hôtel Kimjai",
      tagline: "Bienvenue dans l'élégance, le confort et l'hospitalité de classe mondiale.",
      journey: "Votre voyage commence ici.",
      walkIn: "Client sans réservation",
      bookRoom: "Réserver une chambre",
      dining: "Gastronomie",
      diningDesc: "Cuisine exquise et boissons",
      spa: "Spa et Piscine",
      spaDesc: "Détendez-vous et rajeunissez",
      events: "Événements",
      eventsDesc: "Organisez vos occasions spéciales",
      gallery: "Notre Galerie",
      contact: "Besoin d'aide?",
      tableWelcome: "Bienvenue à la Table",
      home: "Accueil",
      rooms: "Chambres",
    },
    sw: {
      welcome: "Hoteli ya Kimjai",
      tagline: "Karibu kwa ubunifu, starehe na ukarimu wa hali ya juu.",
      journey: "Safari yako inaanza hapa.",
      walkIn: "Mgeni Bila Uhifadhi",
      bookRoom: "Hifadhi Chumba",
      dining: "Chakula Bora",
      diningDesc: "Chakula na vinywaji vya kipekee",
      spa: "Spa na Bwawa",
      spaDesc: "Pumzika na starehe",
      events: "Matukio",
      eventsDesc: "Andaa matukio yako maalum",
      gallery: "Galeri Yetu",
      contact: "Unahitaji Msaada?",
      tableWelcome: "Karibu kwa Meza",
      home: "Nyumbani",
      rooms: "Vyumba",
    },
    zh: {
      welcome: "宁静酒店",
      tagline: "欢迎来到优雅、舒适和世界一流的款待。",
      journey: "您的旅程从这里开始。",
      walkIn: "临时访客",
      bookRoom: "预订房间",
      dining: "精致餐饮",
      diningDesc: "精致美食和饮品",
      spa: "水疗与泳池",
      spaDesc: "放松和恢复活力",
      events: "活动",
      eventsDesc: "举办您的特殊场合",
      gallery: "我们的画廊",
      contact: "需要帮助？",
      tableWelcome: "欢迎来到桌",
      home: "主页",
      rooms: "客房",
    },
  };

  const t = translations[language];

  // Gallery images
  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      alt: "Luxury Hotel Room",
    },
    {
      url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
      alt: "Hotel Restaurant",
    },
    {
      url: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800",
      alt: "Hotel Pool",
    },
    {
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
      alt: "Hotel Lobby",
    },
  ];

  useEffect(() => {
    setIsVisible(true);

    // Extract table number from URL (e.g., ?table=5)
    const params = new URLSearchParams(window.location.search);
    const table = params.get("table");
    if (table) setTableNumber(table);

    // Enable smooth scrolling globally
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  const handleWalkInSubmit = (data) => {
  console.log('Walk-in submission:', data);
  // Here you would typically send to your backend API
  setShowWalkInModal(false);
  setSubmissionSuccess(true);
  setTimeout(() => setSubmissionSuccess(false), 3000);
};

const handleBookingSubmit = (data) => {
  console.log('Booking submission:', data);
  // Here you would typically send to your backend API
  setShowBookingModal(false);
  setSubmissionSuccess(true);
  setTimeout(() => setSubmissionSuccess(false), 3000);
};

 return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      {/* Add Navbar Component */}
      <Navbar 
        language={language} 
        onLanguageChange={setLanguage}
        translations={t}
      />

      {/* Floating Contact Buttons - Fixed Bottom Right */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a
          href="https://wa.me/254712345678"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 group"
          title="WhatsApp"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>

        <a
          href="tel:+254712345678"
          className="bg-amber-600 text-white p-4 rounded-full shadow-lg hover:bg-amber-700 hover:scale-110 transition-all duration-300"
          title={t.contact}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>
      </div>

      {/* Main Content with padding for navbar */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-12 pt-24">
        
        {/* HOME SECTION */}
        <section id="home" className="w-full max-w-6xl min-h-screen flex flex-col justify-center scroll-mt-20">
          {/* Table Number Welcome (if QR scanned with table parameter) */}
          {tableNumber && (
            <div className="mb-6 bg-amber-100 border-2 border-amber-400 text-amber-800 px-6 py-3 rounded-lg animate-pulse">
              <p className="font-semibold">
                {t.tableWelcome} {tableNumber} 🪑
              </p>
            </div>
          )}

          {/* Header / Branding with fade-in animation */}
          <div
            className={`text-center mb-12 transition-all duration-1000 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            }`}
          >
            {/* Animated Logo */}
            <div className="mx-auto w-28 h-28 mb-6 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 cursor-pointer">
              <span className="text-white text-5xl font-bold">KJ</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              {t.welcome}
            </h1>
            <p className="mt-4 text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
              {t.tagline}
              <br />
              <span className="text-amber-600 font-semibold">{t.journey}</span>
            </p>
          </div>

          {/* Quick Stats/Trust Indicators */}
          <div
            className={`grid grid-cols-3 gap-6 mb-12 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600">50+</div>
              <div className="text-sm text-gray-500">Premium Rooms</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600">4.9★</div>
              <div className="text-sm text-gray-500">Guest Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600">24/7</div>
              <div className="text-sm text-gray-500">Service</div>
            </div>
          </div>


{/* Hero Action Buttons with staggered animation */}
<div
  className={`flex flex-col md:flex-row gap-6 mb-12 transition-all duration-1000 delay-500 ${
    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
  }`}
>
  {/* Walk-In Button with Subtitle */}
  <div className="flex-1">
    <button
      onClick={() => setShowWalkInModal(true)}
      className="group w-full px-10 py-5 bg-amber-600 text-white text-lg font-semibold rounded-2xl shadow-lg hover:shadow-2xl hover:bg-amber-700 transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden"
    >
      {/* Animated Background Pulse */}
      <span className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>

      <span className="flex flex-col items-center gap-1 relative z-10">
        <span className="flex items-center gap-2">
          🍽️ {t.walkIn}
          <svg
            className="w-5 h-5 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
        <span className="text-xs font-normal text-amber-100 opacity-90">
          Skip the queue, dine now
        </span>
      </span>
    </button>
  </div>

  {/* Book Room Button with Subtitle */}
  <div className="flex-1">
    <button
      onClick={() => setShowBookingModal(true)}
      className="group w-full px-10 py-5 bg-white border-2 border-amber-600 text-amber-700 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-2xl hover:bg-amber-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden"
    >
      {/* Animated Background Pulse */}
      <span className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

      <span className="flex flex-col items-center gap-1 relative z-10">
        <span className="flex items-center gap-2">
          🛏️ {t.bookRoom}
          <svg
            className="w-5 h-5 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
        <span className="text-xs font-normal text-amber-600 group-hover:text-amber-100 opacity-90 transition-colors">
          Reserve your perfect stay
        </span>
      </span>
    </button>
  </div>
</div>

{/* Success Message Toast */}
{submissionSuccess && (
  <div className="fixed top-24 right-6 z-[70] bg-green-500 text-white px-6 py-3 rounded-lg shadow-2xl animate-slideInRight flex items-center gap-2">
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
    <span className="font-semibold">Request submitted successfully!</span>
  </div>
)}

{/* Modal Components */}
<Modal
  isOpen={showWalkInModal}
  onClose={() => setShowWalkInModal(false)}
  title="Walk-In Guest"
>
  <WalkInForm
    onSubmit={handleWalkInSubmit}
    translations={t}
  />
</Modal>

<Modal
  isOpen={showBookingModal}
  onClose={() => setShowBookingModal(false)}
  title="Book Your Room"
>
  <BookingForm
    onSubmit={handleBookingSubmit}
    translations={t}
  />
</Modal>
</section>

        {/* ROOMS SECTION - Placeholder */}
        <section id="rooms" className="w-full max-w-6xl min-h-screen flex flex-col justify-center scroll-mt-20 py-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t.rooms}
            </h2>
            <p className="text-gray-600 text-lg">Comfortable accommodations await you</p>
          </div>
          {/* Room cards will go here in future */}
        </section>

        {/* DINING SECTION - Quick Services Preview */}
        <section id="dining" className="w-full max-w-6xl min-h-screen flex flex-col justify-center scroll-mt-20 py-16">
          <div
            className={`grid md:grid-cols-3 gap-6 max-w-4xl mx-auto transition-all duration-1000 delay-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {[
              { icon: "🍽️", title: t.dining, desc: t.diningDesc },
              { icon: "🏊", title: t.spa, desc: t.spaDesc },
              { icon: "📅", title: t.events, desc: t.eventsDesc },
            ].map((service, i) => (
              <div
                key={i}
                className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-amber-100"
              >
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SPA SECTION - Placeholder */}
        <section id="spa" className="w-full max-w-6xl min-h-screen flex flex-col justify-center scroll-mt-20 py-16">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{t.spa}</h2>
            <p className="text-gray-600 text-lg">{t.spaDesc}</p>
          </div>
          {/* Spa content will go here in future */}
        </section>

        {/* EVENTS SECTION - Placeholder */}
        <section id="events" className="w-full max-w-6xl min-h-screen flex flex-col justify-center scroll-mt-20 py-16">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{t.events}</h2>
            <p className="text-gray-600 text-lg">{t.eventsDesc}</p>
          </div>
          {/* Events content will go here in future */}
        </section>

        {/* CONTACT/GALLERY SECTION */}
        <section id="contact" className="w-full max-w-6xl scroll-mt-20 py-16">
          {/* Image Gallery Section */}
          <div
            className={`w-full max-w-6xl mb-16 transition-all duration-1000 delay-900 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
              {t.gallery}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryImages.map((image, i) => (
                <div
                  key={i}
                  onClick={() => setLightboxImage(image.url)}
                  className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group h-48"
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Scroll Indicator */}
          <div className="animate-bounce mt-8 flex justify-center">
            <svg
              className="w-6 h-6 text-amber-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
          </section>


      {/* CONTACT/GALLERY SECTION */}
        <section id="contact" className="w-full max-w-6xl scroll-mt-20 py-16">
          {/* Image Gallery Section */}
          <div
            className={`w-full max-w-6xl mb-16 transition-all duration-1000 delay-900 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
              {t.gallery}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryImages.map((image, i) => (
                <div
                  key={i}
                  onClick={() => setLightboxImage(image.url)}
                  className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group h-48"
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Scroll to Top Button */}
          <div className="flex justify-center mt-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex flex-col items-center gap-2 text-amber-600 hover:text-amber-700 transition-colors group"
              aria-label="Scroll to top"
            >
              <svg
                className="w-6 h-6 animate-bounce group-hover:animate-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
              <span className="text-sm font-medium">Back to Top</span>
            </button>
          </div>
        </section>
      </div>

      {/* Replace old footer with new Footer component */}
      <Footer translations={t} language={language} />

      {/* Lightbox Modal for Gallery Images */}
      {lightboxImage && (
        <div
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4 cursor-pointer animate-fadeIn"
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 text-white hover:text-amber-400 transition-colors z-10"
            aria-label="Close lightbox"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={lightboxImage}
            alt="Gallery Preview"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}
    </div>
  );
};

export default LandingPage;
