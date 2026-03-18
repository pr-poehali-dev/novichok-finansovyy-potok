import Icon from "@/components/ui/icon";

export default function HeroSection() {
  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-oswald font-bold text-xl tracking-widest uppercase">
            <span className="text-[#E30613]">ПОТОК</span>
            <span className="text-black"> НОВИЧКА</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            <a href="#about" className="hover:text-[#E30613] transition-colors">О проекте</a>
            <a href="#author" className="hover:text-[#E30613] transition-colors">Автор</a>
            <a href="#consultation" className="hover:text-[#E30613] transition-colors">Консультация</a>
            <a href="#faq" className="hover:text-[#E30613] transition-colors">FAQ</a>
          </nav>
          <a href="https://t.me/m/SYXK-lRPMzFi" target="_blank" rel="noopener noreferrer" className="bg-[#E30613] text-white font-oswald font-semibold px-6 py-2 text-sm uppercase tracking-wider hover:bg-red-700 transition-colors rounded-full">
            Записаться на Бесплатную Консультацию
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        className="relative min-h-[70vh] flex items-center pt-16 overflow-hidden border-b border-gray-100"
        style={{ backgroundImage: "url('https://cdn.poehali.dev/projects/d448d1bd-9c2b-478e-9d96-bfe44c396f34/bucket/05dfa0db-4f5b-4adb-b3a4-bae87cdac722.png')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="relative z-10 max-w-5xl mx-auto px-4 py-24 text-center md:text-left">
          <div className="animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
            <h1 className="font-oswald font-bold leading-tight mb-8 text-4xl md:text-6xl">
              <span className="text-gray-700">Поток Новичка — </span>
              <span className="text-[#E30613]">Твой квантовый скачок</span>
              <span className="text-gray-700"> к финансовой свободе.</span>
            </h1>
            <blockquote className="border-l-4 border-[#E30613] pl-5 mt-6 max-w-2xl md:mx-0 mx-auto">
              <p className="text-gray-700 text-xl italic leading-relaxed">
                «Для тех, кто хочет выйти на новый уровень финансовой стабильности, преодолев страхи и неуверенность.»
              </p>
            </blockquote>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-300 animate-bounce">
          <Icon name="ChevronDown" size={32} />
        </div>
      </section>

      {/* INTRO */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Вы устали от нестабильности в финансах и хотите построить надёжный источник дохода, который будет расти с каждым месяцем?
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Присоединяйтесь к <strong className="text-[#E30613]">«ПотокCash»</strong> и узнайте, как создавая поток с минимальными вложениями, можно получать стабильный доход уже с первого дня. Мы поможем вам не только стартовать, но и управлять финансовыми потоками.
          </p>
        </div>
      </section>
    </>
  );
}