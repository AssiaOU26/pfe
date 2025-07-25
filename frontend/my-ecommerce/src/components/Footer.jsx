export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-purple-700 via-pink-500 to-yellow-400 text-white pt-16 pb-8 px-4 shadow-2xl overflow-hidden">
      {/* Wavy SVG Top Border */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180" style={{height: '60px'}}>
        <svg viewBox="0 0 500 60" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,30 C150,80 350,0 500,30 L500,00 L0,0 Z" fill="#fff" fillOpacity="0.2" />
        </svg>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand Logo & Name */}
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <div className="bg-white rounded-full p-2 shadow-2xl mb-2 animate-pulse border-4 border-pink-300">
            {/* <img src={require('../assets/logo1.png')} alt="Finetude Logo" className="h-14 w-14 object-contain rounded-full" /> */}
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight gradient-text-animated drop-shadow-lg">Finetude Boutique</h2>
        </div>
        {/* Inspirational Quote */}
        <div className="text-center flex-1 px-4">
          <blockquote className="italic text-lg md:text-2xl text-white/90 font-medium animate-fade-in-up">
            "Fashion is the armor to survive the reality of everyday life."
          </blockquote>
          <span className="block mt-2 text-pink-100 text-sm animate-fade-in-up">— Bill Cunningham</span>
        </div>
        {/* Social Icons */}
        <div className="flex space-x-8 justify-center items-center">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform duration-300 animate-bounce text-3xl" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform duration-300 animate-bounce text-3xl delay-100" aria-label="Facebook">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="mailto:info@finetude.com" className="hover:scale-125 transition-transform duration-300 animate-bounce text-3xl delay-200" aria-label="Email">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform duration-300 animate-bounce text-3xl delay-300" aria-label="TikTok">
            <i className="fab fa-tiktok"></i>
          </a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform duration-300 animate-bounce text-3xl delay-400" aria-label="WhatsApp">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
      {/* Copyright */}
      <div className="relative z-10 text-center text-yellow-50 text-xs md:text-sm mt-10 opacity-80">
        &copy; {new Date().getFullYear()} Finetude Boutique. All rights reserved.
      </div>
    </footer>
  );
}
