import Icon from "@/components/ui/icon";
import Timer from "./Timer";
import { forWhom, lifeChanges, strategyFeatures, idealFor } from "./data";

export default function StrategySection() {
  return (
    <>
      {/* STRATEGY BLOCK */}
      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 font-oswald text-2xl font-bold uppercase tracking-widest mb-4">
              <span>🔥</span>
              <span className="text-black">ВЗРАЩИВАЕМ </span>
              <span className="text-[#3183FF]">ПОТОК НОВИЧКА</span>
            </div>
            <h2 className="font-oswald text-3xl md:text-4xl font-bold uppercase mb-2">
              по стратегии «<span className="text-[#E30613]">КВАНТОВЫЙ СКАЧОК</span> — <span className="text-[#3183FF]">ПОТОК НОВИЧКА</span>»
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Цель: создать устойчивый денежный поток, который растёт и работает на участника, обеспечивая стабильный доход и возможность реинвеста.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Left: Circular scheme */}
            <div className="bg-[#D9D9D9]/30 border border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center min-h-[420px] w-full">
              <div className="font-oswald text-[#3183FF] uppercase tracking-widest text-2xl font-bold mb-8 text-center">Начало</div>
              <div className="relative w-full" style={{ paddingBottom: '100%' }}>
                <div className="absolute inset-0">
                  <svg className="w-full h-full" viewBox="0 0 400 400">
                    <circle cx="200" cy="200" r="185" fill="none" stroke="#E30613" strokeWidth="2.5" strokeDasharray="8 5" opacity="0.35"/>
                    <circle cx="200" cy="200" r="148" fill="none" stroke="#3183FF" strokeWidth="1.5" opacity="0.15"/>
                    <path d="M 315 100 A 148 148 0 0 1 360 240" fill="none" stroke="#E30613" strokeWidth="2.5" opacity="0.5" strokeLinecap="round"/>
                    <polygon points="363,240 355,228 368,225" fill="#E30613" opacity="0.7"/>
                    <path d="M 348 270 A 148 148 0 0 1 55 270" fill="none" stroke="#E30613" strokeWidth="2.5" opacity="0.5" strokeLinecap="round"/>
                    <polygon points="52,268 64,262 60,275" fill="#E30613" opacity="0.7"/>
                    <path d="M 40 230 A 148 148 0 0 1 285 95" fill="none" stroke="#E30613" strokeWidth="2.5" opacity="0.5" strokeLinecap="round"/>
                    <polygon points="287,94 276,103 281,91" fill="#E30613" opacity="0.7"/>
                  </svg>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-28 h-28 rounded-full bg-[#E30613] flex flex-col items-center justify-center text-white shadow-xl">
                      <div className="font-oswald text-4xl font-bold leading-none">∞</div>
                      <div className="font-oswald text-xs uppercase tracking-wider mt-1 text-white/80">поток</div>
                    </div>
                  </div>

                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-28 text-center">
                    <div className="bg-white border-2 border-[#E30613] rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 font-oswald font-bold text-[#E30613] text-lg shadow-md">1</div>
                    <div className="text-xs text-gray-700 leading-snug font-medium">от <strong>2 000 ₽</strong><br/>до <strong>200 000 ₽</strong><br/><span className="text-[#E30613] font-bold text-sm">+50%</span></div>
                  </div>

                  <div className="absolute bottom-2 right-0 translate-x-2 w-28 text-center">
                    <div className="bg-white border-2 border-[#3183FF] rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 font-oswald font-bold text-[#3183FF] text-lg shadow-md">2</div>
                    <div className="text-xs text-gray-700 leading-snug font-medium">максимум<br/><strong className="text-black text-sm">300 000 ₽</strong></div>
                  </div>

                  <div className="absolute bottom-2 left-0 -translate-x-2 w-28 text-center">
                    <div className="bg-white border-2 border-[#3183FF] rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 font-oswald font-bold text-[#3183FF] text-lg shadow-md">3</div>
                    <div className="text-xs text-gray-700 leading-snug font-medium">работает<br/><span className="text-[#3183FF] font-bold text-sm">бесконечно</span><br/>каждый день</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Accruals circular scheme */}
            <div className="bg-[#E30613]/5 border border-[#E30613]/20 rounded-2xl p-6 flex flex-col items-center justify-center min-h-[420px] w-full">
              <div className="font-oswald text-[#E30613] uppercase tracking-widest text-2xl font-bold mb-8 text-center">Начисления</div>
              <div className="relative w-full" style={{ paddingBottom: '100%' }}>
                <div className="absolute inset-0">
                  <svg className="w-full h-full" viewBox="0 0 400 400">
                    <circle cx="200" cy="200" r="185" fill="none" stroke="#E30613" strokeWidth="2.5" strokeDasharray="8 5" opacity="0.35"/>
                    <circle cx="200" cy="200" r="148" fill="none" stroke="#3183FF" strokeWidth="1.5" opacity="0.15"/>
                    <path d="M 315 100 A 148 148 0 0 1 360 240" fill="none" stroke="#E30613" strokeWidth="2.5" opacity="0.5" strokeLinecap="round"/>
                    <polygon points="363,240 355,228 368,225" fill="#E30613" opacity="0.7"/>
                    <path d="M 348 270 A 148 148 0 0 1 55 270" fill="none" stroke="#E30613" strokeWidth="2.5" opacity="0.5" strokeLinecap="round"/>
                    <polygon points="52,268 64,262 60,275" fill="#E30613" opacity="0.7"/>
                    <path d="M 40 230 A 148 148 0 0 1 285 95" fill="none" stroke="#E30613" strokeWidth="2.5" opacity="0.5" strokeLinecap="round"/>
                    <polygon points="287,94 276,103 281,91" fill="#E30613" opacity="0.7"/>
                  </svg>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-28 h-28 rounded-full bg-[#E30613] flex flex-col items-center justify-center text-white shadow-xl">
                      <div className="font-oswald text-3xl font-bold leading-none">2%</div>
                      <div className="font-oswald text-xs uppercase tracking-wider mt-1 text-white/80 text-center px-2">в день</div>
                    </div>
                  </div>

                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-28 text-center">
                    <div className="bg-white border-2 border-[#E30613] rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 shadow-md">
                      <span className="text-[#E30613] font-bold text-lg">%</span>
                    </div>
                    <div className="text-xs text-gray-700 leading-snug font-medium">
                      <strong className="text-black text-sm">ежедневно</strong><br/>на остаток потока
                    </div>
                  </div>

                  <div className="absolute bottom-2 right-0 translate-x-2 w-28 text-center">
                    <div className="bg-white border-2 border-[#E30613] rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 shadow-md">
                      <span className="text-[#E30613] font-oswald font-bold text-sm">6к</span>
                    </div>
                    <div className="text-xs text-gray-700 leading-snug font-medium">
                      <strong className="text-[#E30613] text-sm">6 000 ₽</strong><br/>в день при<br/>300 000 ₽
                    </div>
                  </div>

                  <div className="absolute bottom-2 left-0 -translate-x-2 w-28 text-center">
                    <div className="bg-white border-2 border-[#3183FF] rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 shadow-md">
                      <span className="text-[#3183FF] font-bold text-base">✦</span>
                    </div>
                    <div className="text-xs text-gray-700 leading-snug font-medium">
                      <span className="text-[#3183FF] font-bold text-sm">4 000 ₽</span> реинвест<br/>
                      <span className="text-black font-bold text-sm">2 000 ₽</span> вам
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 justify-center">
            <a href="https://t.me/m/SYXK-lRPMzFi" target="_blank" rel="noopener noreferrer" className="bg-[#E30613] text-white font-oswald font-bold px-10 py-4 text-base uppercase tracking-wider hover:bg-red-700 transition-all animate-pulse-red rounded-full">
              Записаться на Бесплатную Консультацию
            </a>
            <Timer />
          </div>
        </div>
      </section>

      {/* FOR WHOM */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="font-oswald text-[#E30613] text-2xl uppercase tracking-widest mb-3 font-bold">Самопроверка</div>
            <h2 className="font-oswald text-3xl md:text-4xl font-bold uppercase">Этот проект для вас, если вы:</h2>
            <div className="w-16 h-1 bg-[#E30613] mx-auto mt-4" />
          </div>
          <div className="space-y-4 mb-12">
            {forWhom.map((item, i) => (
              <div key={i} className="flex gap-4 bg-[#D9D9D9]/30 p-6 border-l-4 border-[#3183FF] rounded-xl">
                <div className="w-8 h-8 bg-[#3183FF] flex items-center justify-center flex-shrink-0 text-white font-oswald font-bold text-sm">
                  {i + 1}
                </div>
                <p className="text-gray-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#E30613]/5 border border-[#E30613]/20 rounded-2xl p-8">
            <p className="text-gray-700 leading-relaxed text-center">
              Многие традиционные способы заработка требуют огромных усилий и времени. В отличие от них, мы предлагаем автоматическую систему, где деньги начинают работать для вас с первого дня, и результаты не заставляют себя долго ждать.
            </p>
          </div>
        </div>
      </section>

      {/* LIFE CHANGES */}
      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="font-oswald text-[#E30613] text-2xl font-bold uppercase tracking-widest mb-3">Трансформация</div>
            <h2 className="font-oswald text-3xl md:text-4xl font-bold uppercase">Что изменится в вашей жизни</h2>
            <div className="w-16 h-1 bg-[#E30613] mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {lifeChanges.map((item, i) => (
              <div key={i} className="group flex gap-5 p-6 bg-[#D9D9D9]/30 hover:bg-[#E30613]/5 border border-transparent hover:border-[#E30613]/20 transition-all rounded-2xl">
                <div className="w-12 h-12 bg-[#E30613] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Icon name={item.icon} size={22} className="text-white" />
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STRATEGY DESCRIPTION */}
      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="font-oswald text-3xl md:text-4xl font-bold uppercase mb-4 text-black">
              «<span className="text-[#E30613]">Квантовый Скачок</span> — <span className="text-[#3183FF]">Поток Новичка</span>»
            </h2>
            <p className="text-gray-700 font-semibold max-w-xl mx-auto">
              Поток Новичка — это стратегия, которая сочетает:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {strategyFeatures.map((f, i) => (
              <div key={i} className="flex items-center gap-4 border border-gray-200 rounded-xl p-5 hover:border-[#E30613]/40 transition-colors bg-[#D9D9D9]/20">
                <div className="w-8 h-8 bg-[#E30613] flex items-center justify-center flex-shrink-0">
                  <Icon name="Check" size={16} className="text-white" />
                </div>
                <span className="text-gray-700">{f}</span>
              </div>
            ))}
          </div>

          <div className="bg-[#D9D9D9]/30 border border-gray-200 rounded-2xl p-8 text-center mb-8">
            <p className="text-gray-700 text-lg leading-relaxed">
              Участник получает <strong className="text-black">контролируемый, растущий и практически бесконечный поток дохода</strong>, который можно использовать для личных расходов и инвестиций в расширение структуры.
            </p>
          </div>

          <div className="text-center mb-10">
            <div className="font-oswald text-[#3183FF] text-2xl font-bold uppercase tracking-widest mb-3">Кому подходит</div>
            <h3 className="font-oswald text-2xl md:text-3xl font-bold uppercase text-black">Этот проект идеально подходит:</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {idealFor.map((item, i) => (
              <div key={i} className="bg-[#D9D9D9]/20 border border-gray-200 rounded-2xl p-6 hover:border-[#3183FF]/40 transition-colors">
                <div className="font-oswald text-[#3183FF] uppercase font-semibold mb-2">{item.title}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-2 justify-center">
            <a href="https://t.me/m/SYXK-lRPMzFi" target="_blank" rel="noopener noreferrer" className="bg-[#E30613] text-white font-oswald font-bold px-10 py-4 text-base uppercase tracking-wider hover:bg-red-700 transition-all animate-pulse-red rounded-full text-center">
              Записаться на Бесплатную Консультацию
            </a>
            <Timer />
          </div>
        </div>
      </section>
    </>
  );
}