import { useState } from "react";
import Icon from "@/components/ui/icon";
import Timer from "./Timer";
import { consultationBenefits, faqs } from "./data";

export default function ConsultationSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* CONSULTATION */}
      <section id="consultation" className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="font-oswald text-3xl md:text-4xl font-bold uppercase mb-4">
              Хотите изменить свою финансовую жизнь?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Вы мечтаете выйти на новый уровень финансовой свободы и больше не работать на нескольких работах, чтобы обеспечить свою семью? Я помогу вам это сделать!
            </p>
            <p className="text-gray-800 font-semibold mt-4">
              Приглашаю вас на бесплатную консультацию, на которой вы получите:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-8">
            {consultationBenefits.map((item, i) => (
              <div key={i} className="group p-6 bg-[#D9D9D9]/30 border border-gray-100 rounded-2xl hover:border-[#3183FF]/30 hover:bg-[#3183FF]/5 transition-all">
                <div className="w-10 h-10 bg-[#3183FF] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name={item.icon} size={18} className="text-white" />
                </div>
                <div className="font-oswald font-semibold uppercase text-sm mb-2">{item.title}</div>
                <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#E30613]/5 border border-[#E30613]/20 rounded-2xl p-10 text-center">
            <div className="font-oswald text-[#E30613] text-2xl font-bold uppercase tracking-widest mb-3">Не откладывайте мечты на завтра!</div>
            <p className="text-gray-600 mb-2">Места на консультацию ограничены, и я хочу, чтобы именно вы стали частью этой трансформации.</p>
            <p className="text-black font-semibold mb-8">Присоединяйтесь прямо сейчас и начните действовать!</p>
            <a href="https://t.me/m/SYXK-lRPMzFi" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#E30613] text-white font-oswald font-bold px-14 py-5 text-xl uppercase tracking-wider hover:bg-red-700 transition-all animate-pulse-red rounded-full">
              Записаться на Бесплатную Консультацию
            </a>
            <Timer />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-10 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="font-oswald text-[#E30613] text-2xl font-bold uppercase tracking-widest mb-3">Вопросы и ответы</div>
            <h2 className="font-oswald text-3xl md:text-4xl font-bold uppercase">Часто задаваемые вопросы</h2>
            <div className="w-16 h-1 bg-[#E30613] mx-auto mt-4" />
          </div>

          <div className="space-y-2 mb-8">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-100">
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-oswald font-semibold uppercase text-sm pr-4">
                    {i + 1}. {faq.q}
                  </span>
                  <Icon
                    name={openFaq === i ? "Minus" : "Plus"}
                    size={20}
                    className={`flex-shrink-0 transition-colors ${openFaq === i ? "text-[#E30613]" : "text-gray-400"}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-2">
            <a href="https://t.me/m/SYXK-lRPMzFi" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#E30613] text-white font-oswald font-bold px-12 py-4 text-base uppercase tracking-wider hover:bg-red-700 transition-all animate-pulse-red rounded-full">
              Записаться на Бесплатную Консультацию
            </a>
            <Timer />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-oswald font-bold text-lg tracking-widest uppercase">
            <span className="text-[#E30613]">ПОТОК</span>
            <span className="text-black"> НОВИЧКА</span>
          </div>
          <div className="text-gray-400 text-xs text-center">
            © 2024 Поток Новичка. Все права защищены.
          </div>
          <div className="flex gap-6 text-gray-400 text-xs">
            <a href="#" className="hover:text-black transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-black transition-colors">Договор оферты</a>
          </div>
        </div>
      </footer>
    </>
  );
}