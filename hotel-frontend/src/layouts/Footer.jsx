import React, { useState } from 'react';

const Footer = ({ translations, language }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  // Footer translations
  const footerText = {
    en: {
      about: "About Kimjai",
      aboutDesc: "Experience luxury hospitality in the heart of Nairobi. Your comfort is our priority.",
      quickLinks: "Quick Links",
      services: "Our Services",
      contact: "Contact Us",
      address: "123 Kenyatta Avenue, Nairobi, Kenya",
      phone: "+254 712 345 678",
      email: "info@kimjaihotel.ke",
      hours: "24/7 Service",
      followUs: "Follow Us",
      newsletter: "Newsletter",
      newsletterDesc: "Subscribe for exclusive offers and updates",
      emailPlaceholder: "Enter your email",
      subscribe: "Subscribe",
      subscribed: "Subscribed! ✓",
      legal: "Legal",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
      cancellation: "Cancellation Policy",
      cookies: "Cookie Policy",
      copyright: "© 2025 Kimjai Hotel. All rights reserved.",
      paymentMethods: "We Accept",
      roomService: "Room Service",
      restaurant: "Restaurant & Bar",
      spa: "Spa & Wellness",
      events: "Event Spaces",
      parking: "Free Parking",
      wifi: "Free WiFi",
    },
    es: {
      about: "Sobre Kimjai",
      aboutDesc: "Experimente la hospitalidad de lujo en el corazón de Nairobi. Su comodidad es nuestra prioridad.",
      quickLinks: "Enlaces Rápidos",
      services: "Nuestros Servicios",
      contact: "Contáctenos",
      address: "123 Avenida Kenyatta, Nairobi, Kenia",
      phone: "+254 712 345 678",
      email: "info@kimjaihotel.ke",
      hours: "Servicio 24/7",
      followUs: "Síguenos",
      newsletter: "Boletín",
      newsletterDesc: "Suscríbase para ofertas exclusivas",
      emailPlaceholder: "Ingrese su correo",
      subscribe: "Suscribirse",
      subscribed: "¡Suscrito! ✓",
      legal: "Legal",
      privacy: "Política de Privacidad",
      terms: "Términos y Condiciones",
      cancellation: "Política de Cancelación",
      cookies: "Política de Cookies",
      copyright: "© 2025 Hotel Kimjai. Todos los derechos reservados.",
      paymentMethods: "Aceptamos",
      roomService: "Servicio de Habitaciones",
      restaurant: "Restaurante y Bar",
      spa: "Spa y Bienestar",
      events: "Espacios para Eventos",
      parking: "Estacionamiento Gratuito",
      wifi: "WiFi Gratuito",
    },
    fr: {
      about: "À Propos de Kimjai",
      aboutDesc: "Découvrez l'hospitalité de luxe au cœur de Nairobi. Votre confort est notre priorité.",
      quickLinks: "Liens Rapides",
      services: "Nos Services",
      contact: "Contactez-Nous",
      address: "123 Avenue Kenyatta, Nairobi, Kenya",
      phone: "+254 712 345 678",
      email: "info@kimjaihotel.ke",
      hours: "Service 24/7",
      followUs: "Suivez-Nous",
      newsletter: "Newsletter",
      newsletterDesc: "Abonnez-vous pour des offres exclusives",
      emailPlaceholder: "Entrez votre email",
      subscribe: "S'abonner",
      subscribed: "Abonné! ✓",
      legal: "Légal",
      privacy: "Politique de Confidentialité",
      terms: "Termes et Conditions",
      cancellation: "Politique d'Annulation",
      cookies: "Politique des Cookies",
      copyright: "© 2025 Hôtel Kimjai. Tous droits réservés.",
      paymentMethods: "Nous Acceptons",
      roomService: "Service en Chambre",
      restaurant: "Restaurant & Bar",
      spa: "Spa & Bien-être",
      events: "Espaces Événements",
      parking: "Parking Gratuit",
      wifi: "WiFi Gratuit",
    },
    sw: {
      about: "Kuhusu Kimjai",
      aboutDesc: "Furahia ukarimu wa kifahari katikati ya Nairobi. Starehe yako ni kipaumbele chetu.",
      quickLinks: "Viungo vya Haraka",
      services: "Huduma Zetu",
      contact: "Wasiliana Nasi",
      address: "123 Barabara ya Kenyatta, Nairobi, Kenya",
      phone: "+254 712 345 678",
      email: "info@kimjaihotel.ke",
      hours: "Huduma 24/7",
      followUs: "Tufuate",
      newsletter: "Jarida",
      newsletterDesc: "Jisajili kwa ofa maalum",
      emailPlaceholder: "Weka barua pepe yako",
      subscribe: "Jisajili",
      subscribed: "Umejisajili! ✓",
      legal: "Kisheria",
      privacy: "Sera ya Faragha",
      terms: "Vigezo na Masharti",
      cancellation: "Sera ya Kufuta",
      cookies: "Sera ya Vidakuzi",
      copyright: "© 2025 Hoteli ya Kimjai. Haki zote zimehifadhiwa.",
      paymentMethods: "Tunakubali",
      roomService: "Huduma ya Chumba",
      restaurant: "Mkahawa & Bar",
      spa: "Spa & Afya",
      events: "Nafasi za Matukio",
      parking: "Maegesho Bure",
      wifi: "WiFi Bure",
    },
    zh: {
      about: "关于金杰",
      aboutDesc: "在内罗毕市中心体验奢华款待。您的舒适是我们的首要任务。",
      quickLinks: "快速链接",
      services: "我们的服务",
      contact: "联系我们",
      address: "肯尼亚内罗毕肯雅塔大街123号",
      phone: "+254 712 345 678",
      email: "info@kimjaihotel.ke",
      hours: "24/7服务",
      followUs: "关注我们",
      newsletter: "订阅",
      newsletterDesc: "订阅以获取独家优惠",
      emailPlaceholder: "输入您的邮箱",
      subscribe: "订阅",
      subscribed: "已订阅! ✓",
      legal: "法律",
      privacy: "隐私政策",
      terms: "条款和条件",
      cancellation: "取消政策",
      cookies: "Cookie政策",
      copyright: "© 2025 金杰酒店。版权所有。",
      paymentMethods: "支付方式",
      roomService: "客房服务",
      restaurant: "餐厅和酒吧",
      spa: "水疗与健康",
      events: "活动空间",
      parking: "免费停车",
      wifi: "免费WiFi",
    },
  };

  const t = footerText[language] || footerText.en;

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 relative overflow-hidden">
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500"></div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

          {/* Column 1: About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-lg">
                <span className="text-white text-xl font-bold">KJ</span>
              </div>
              <span className="text-xl font-bold text-white">Kimjai Hotel</span>
            </div>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              {t.aboutDesc}
            </p>

            {/* Awards/Ratings */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex text-amber-400">
                {'★'.repeat(5)}
              </div>
              <span className="text-xs text-gray-500">4.9/5.0</span>
            </div>

            {/* Certifications */}
            <div className="flex gap-2">
              <span className="text-xs bg-gray-800 px-2 py-1 rounded">🏆 TripAdvisor</span>
              <span className="text-xs bg-gray-800 px-2 py-1 rounded">✓ ISO Certified</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
              <span className="text-amber-500">→</span> {t.quickLinks}
            </h3>
            <ul className="space-y-2">
              {[
                { label: translations.home, id: 'home' },
                { label: translations.rooms, id: 'rooms' },
                { label: translations.dining, id: 'dining' },
                { label: translations.spa, id: 'spa' },
                { label: translations.events, id: 'events' },
                { label: translations.gallery, id: 'contact' },
              ].map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-gray-400 hover:text-amber-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
              <span className="text-amber-500">→</span> {t.services}
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-gray-400">
                <span className="text-amber-500">🛎️</span> {t.roomService}
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <span className="text-amber-500">🍽️</span> {t.restaurant}
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <span className="text-amber-500">🧖</span> {t.spa}
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <span className="text-amber-500">🎉</span> {t.events}
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <span className="text-amber-500">🚗</span> {t.parking}
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <span className="text-amber-500">📶</span> {t.wifi}
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
              <span className="text-amber-500">→</span> {t.contact}
            </h3>
            <ul className="space-y-3 text-sm mb-6">
              <li className="flex items-start gap-2 text-gray-400">
                <span className="text-amber-500 mt-1">📍</span>
                <span>{t.address}</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <span className="text-amber-500">📞</span>
                <a href="tel:+254712345678" className="hover:text-amber-400 transition-colors">
                  {t.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <span className="text-amber-500">✉️</span>
                <a href="mailto:info@kimjaihotel.ke" className="hover:text-amber-400 transition-colors">
                  {t.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <span className="text-amber-500">🕐</span>
                <span>{t.hours}</span>
              </li>
            </ul>

               {/* Newsletter */}
                        <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                          <h4 className="text-white font-semibold text-sm mb-2">{t.newsletter}</h4>
                          <p className="text-xs text-gray-400 mb-3">{t.newsletterDesc}</p>
                          <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                            <input
                              type="email"
                              required
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder={t.emailPlaceholder}
                              className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                              disabled={subscribed}
                            />
                            <button
                              type="submit"
                              disabled={subscribed}
                              className={`px-4 py-2 rounded font-semibold text-sm transition-all ${
                                subscribed
                                  ? 'bg-green-500 text-white'
                                  : 'bg-amber-600 hover:bg-amber-700 text-white'
                              }`}
                            >
                              {subscribed ? t.subscribed : t.subscribe}
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>

                    {/* Social Media Section */}
                    <div className="border-t border-gray-700 pt-8 mb-8">
                      <h3 className="text-white font-semibold text-center mb-4">{t.followUs}</h3>
                      <div className="flex justify-center gap-4">
                        <a
                          href="https://facebook.com/kimjaihotel"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 group"
                          aria-label="Facebook"
                        >
                          <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                        </a>

                        <a
                          href="https://instagram.com/kimjaihotel"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 transition-all duration-300 group"
                          aria-label="Instagram"
                        >
                          <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                        </a>

                        <a
                          href="https://twitter.com/kimjaihotel"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-sky-500 transition-all duration-300 group"
                          aria-label="Twitter/X"
                        >
                          <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                          </svg>
                        </a>

                        <a
                          href="https://linkedin.com/company/kimjaihotel"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-300 group"
                          aria-label="LinkedIn"
                        >
                          <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </a>

                        <a
                          href="https://youtube.com/@kimjaihotel"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-all duration-300 group"
                          aria-label="YouTube"
                        >
                          <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                          </svg>
                        </a>

                        <a
                          href="https://wa.me/254712345678"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-all duration-300 group"
                          aria-label="WhatsApp"
                        >
                          <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                          </svg>
                        </a>
                      </div>
                    </div>

                    {/* Payment Methods & Legal */}
                    <div className="border-t border-gray-700 pt-6">
                      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
                        {/* Payment Methods */}
                        <div className="text-center md:text-left">
                          <p className="text-sm text-gray-400 mb-2">{t.paymentMethods}</p>
                          <div className="flex gap-3 flex-wrap justify-center md:justify-start">
                            <div className="bg-white px-3 py-1 rounded flex items-center gap-1">
                              <span className="text-blue-600 font-bold text-xs">VISA</span>
                            </div>
                            <div className="bg-white px-3 py-1 rounded flex items-center gap-1">
                              <span className="text-orange-500 font-bold text-xs">Mastercard</span>
                            </div>
                            <div className="bg-white px-3 py-1 rounded flex items-center gap-1">
                              <span className="text-blue-700 font-bold text-xs">PayPal</span>
                            </div>

<div className="bg-green-600 px-3 py-1 rounded flex items-center gap-1">
                  <span className="text-white font-bold text-xs">M-PESA</span>
                </div>
                <div className="bg-white px-3 py-1 rounded flex items-center gap-1">
                  <span className="text-blue-800 font-bold text-xs">AMEX</span>
                </div>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-4 text-xs text-gray-400 justify-center">
              <a href="#privacy" className="hover:text-amber-400 transition-colors">
                {t.privacy}
              </a>
              <span className="text-gray-600">|</span>
              <a href="#terms" className="hover:text-amber-400 transition-colors">
                {t.terms}
              </a>
              <span className="text-gray-600">|</span>
              <a href="#cancellation" className="hover:text-amber-400 transition-colors">
                {t.cancellation}
              </a>
              <span className="text-gray-600">|</span>
              <a href="#cookies" className="hover:text-amber-400 transition-colors">
                {t.cookies}
              </a>
            </div>
          </div>

          {/* Bottom Copyright Bar */}
          <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500 text-center md:text-left">
              {t.copyright}
            </p>

            {/* Additional Info */}
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>Verified Business</span>
              </span>
              <span className="hidden md:inline">•</span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                </svg>
                <span>Secure Booking</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 opacity-50"></div>
    </footer>
  );
};

export default Footer;