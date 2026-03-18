import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/d448d1bd-9c2b-478e-9d96-bfe44c396f34/files/ac40b789-58f8-40a9-b06e-2c75cd5a509f.jpg";
const QUANTUM_IMG = "https://cdn.poehali.dev/projects/d448d1bd-9c2b-478e-9d96-bfe44c396f34/files/cbfacf1d-85ad-42e5-94d0-447b742fc5ea.jpg";

const benefits = [
  { icon: "TrendingUp", title: "Денежный поток с нуля", desc: "Пошаговая система для тех, кто только начинает путь к финансовой независимости" },
  { icon: "ShieldCheck", title: "Преодоление страхов", desc: "Мощные практики, которые убирают блоки и неуверенность раз и навсегда" },
  { icon: "Zap", title: "Квантовый результат", desc: "Прорыв к новому уровню дохода за счёт системной трансформации мышления" },
  { icon: "Target", title: "Конкретные инструменты", desc: "Не теория — живые техники, которые работают уже в первую неделю" },
  { icon: "Users", title: "Поддержка сообщества", desc: "Окружение единомышленников, которые идут рядом к финансовой свободе" },
  { icon: "Award", title: "Проверенная методология", desc: "Сотни учеников уже вышли на стабильный доход по этой системе" },
];

const results = [
  { num: "500+", label: "учеников прошли курс" },
  { num: "87%", label: "вышли на новый доход" },
  { num: "3 мес", label: "средний срок до результата" },
  { num: "×3", label: "средний рост дохода" },
];

const testimonials = [
  {
    name: "Марина К.",
    age: "34 года",
    text: "До курса боялась даже думать об инвестициях. Через 2 месяца имею первый пассивный доход. Страхи ушли — пришла уверенность.",
    result: "+45 000 ₽/мес",
  },
  {
    name: "Алексей П.",
    age: "41 год",
    text: "Работал на нелюбимой работе 15 лет. Курс дал не только инструменты, но и смелость сделать первый шаг. Теперь работаю на себя.",
    result: "+120 000 ₽/мес",
  },
  {
    name: "Ольга Д.",
    age: "28 лет",
    text: "Думала, что финансовая свобода — это только для богатых. Оказалось, это система. Сейчас деньги работают на меня.",
    result: "+80 000 ₽/мес",
  },
];

const program = [
  { num: "01", title: "Аудит мышления", desc: "Находим и устраняем финансовые блоки и ограничивающие убеждения" },
  { num: "02", title: "Карта денежного потока", desc: "Строим персональную систему создания и приумножения дохода" },
  { num: "03", title: "Первые инструменты", desc: "Запускаем первые источники пассивного и активного дохода" },
  { num: "04", title: "Масштабирование", desc: "Выходим на стабильный поток и укрепляем финансовую базу" },
  { num: "05", title: "Квантовый скачок", desc: "Прорываемся на новый уровень — финансовая свобода как образ жизни" },
];

const plans = [
  {
    name: "Старт",
    price: "9 900 ₽",
    old: "19 900 ₽",
    features: ["5 модулей курса", "Рабочие тетради", "Закрытый чат", "Доступ 6 месяцев"],
    highlight: false,
  },
  {
    name: "Поток",
    price: "24 900 ₽",
    old: "49 900 ₽",
    features: ["Всё из «Старт»", "3 групповых созвона", "Личная консультация", "Доступ 12 месяцев", "Бонусные модули"],
    highlight: true,
  },
  {
    name: "VIP",
    price: "59 900 ₽",
    old: "99 900 ₽",
    features: ["Всё из «Поток»", "Личное сопровождение", "Неограниченные созвоны", "Пожизненный доступ", "Приоритетная поддержка"],
    highlight: false,
  },
];

const faqs = [
  { q: "Мне подойдёт, если я полный новичок?", a: "Да, курс создан специально для новичков. Всё объясняется с нуля, пошагово, без сложных терминов." },
  { q: "Сколько времени нужно уделять?", a: "Достаточно 1–2 часов в день. Материалы доступны в записи — смотрите в удобное время." },
  { q: "Когда я увижу первые результаты?", a: "Первые изменения в мышлении — уже на первой неделе. Финансовые результаты — у большинства учеников в течение 30–90 дней." },
  { q: "Есть ли гарантия возврата денег?", a: "Да, 14 дней без вопросов. Если курс не подошёл — вернём полную стоимость." },
];

export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="font-montserrat bg-white text-black overflow-x-hidden">

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-oswald font-bold text-xl tracking-widest uppercase">
            <span className="text-[#E30613]">ПОТОК</span>
            <span className="text-black"> НОВИЧКА</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            <a href="#benefits" className="hover:text-[#E30613] transition-colors">О курсе</a>
            <a href="#program" className="hover:text-[#E30613] transition-colors">Программа</a>
            <a href="#results" className="hover:text-[#E30613] transition-colors">Результаты</a>
            <a href="#pricing" className="hover:text-[#E30613] transition-colors">Тарифы</a>
          </nav>
          <button className="bg-[#E30613] text-white font-oswald font-semibold px-6 py-2 text-sm uppercase tracking-wider hover:bg-red-700 transition-colors">
            Начать
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-16 bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
            <div className="inline-flex items-center gap-2 bg-[#E30613]/10 border border-[#E30613]/30 text-[#E30613] text-xs font-semibold px-4 py-2 uppercase tracking-widest mb-6">
              <Icon name="Zap" size={14} />
              Онлайн-курс · Старт сейчас
            </div>

            <h1 className="font-oswald text-white text-5xl md:text-6xl font-bold leading-none uppercase mb-6">
              Квантовый<br />
              <span className="text-[#E30613]">Скачок:</span><br />
              <span className="text-3xl md:text-4xl font-medium text-gray-300">Создай Денежный</span><br />
              <span className="text-[#3183FF]">Поток Новичка</span>
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg">
              Для тех, кто хочет выйти на новый уровень финансовой стабильности,
              преодолев страхи и неуверенность.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#E30613] text-white font-oswald font-bold px-10 py-4 text-lg uppercase tracking-wider hover:bg-red-700 transition-all animate-pulse-red">
                Хочу финансовую свободу
              </button>
              <button className="border border-white/30 text-white font-oswald px-8 py-4 text-lg uppercase tracking-wider hover:border-white/60 transition-colors">
                Узнать больше
              </button>
            </div>

            <div className="flex gap-8 mt-12 pt-8 border-t border-white/10">
              {results.slice(0, 2).map((r) => (
                <div key={r.num}>
                  <div className="font-oswald text-[#E30613] text-3xl font-bold">{r.num}</div>
                  <div className="text-gray-400 text-sm">{r.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:block animate-fade-in" style={{ animationDelay: '0.4s', opacity: 0 }}>
            <div className="relative">
              <img
                src={QUANTUM_IMG}
                alt="Квантовый скачок"
                className="w-full"
                style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }}
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }}
              />
              <div className="absolute bottom-8 left-8 right-8 text-center">
                <div className="font-oswald text-white text-2xl font-bold uppercase">Твой новый уровень</div>
                <div className="text-[#3183FF] text-sm mt-1">ждёт тебя прямо сейчас</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
          <Icon name="ChevronDown" size={32} />
        </div>
      </section>

      {/* RESULTS BAR */}
      <section className="bg-[#E30613] py-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {results.map((r) => (
              <div key={r.num}>
                <div className="font-oswald text-white text-4xl font-bold">{r.num}</div>
                <div className="text-white/80 text-sm mt-1">{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="font-oswald text-[#E30613] text-sm uppercase tracking-widest mb-3">Что ты получишь</div>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase">О курсе</h2>
            <div className="w-16 h-1 bg-[#E30613] mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="group p-8 bg-[#D9D9D9]/30 border border-gray-100 hover:border-[#E30613]/30 hover:bg-[#E30613]/5 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#E30613] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Icon name={b.icon} size={22} className="text-white" />
                </div>
                <h3 className="font-oswald text-xl font-semibold uppercase mb-3">{b.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAM */}
      <section id="program" className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="font-oswald text-[#3183FF] text-sm uppercase tracking-widest mb-3">5 шагов к свободе</div>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase">Программа курса</h2>
            <div className="w-16 h-1 bg-[#3183FF] mx-auto mt-4" />
          </div>

          <div className="space-y-0">
            {program.map((step) => (
              <div
                key={step.num}
                className="group flex gap-6 p-6 border-b border-white/10 hover:bg-white/5 transition-colors"
              >
                <div className="flex-shrink-0">
                  <div className="font-oswald text-5xl font-bold text-white/10 group-hover:text-[#E30613] transition-colors leading-none">
                    {step.num}
                  </div>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="font-oswald text-xl font-semibold uppercase mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
                <div className="flex-shrink-0 flex items-center">
                  <div className="w-8 h-8 border border-white/20 flex items-center justify-center group-hover:border-[#E30613] group-hover:bg-[#E30613] transition-all">
                    <Icon name="ArrowRight" size={16} className="text-white/40 group-hover:text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="results" className="py-24 bg-[#D9D9D9]/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="font-oswald text-[#E30613] text-sm uppercase tracking-widest mb-3">Истории успеха</div>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase">Результаты учеников</h2>
            <div className="w-16 h-1 bg-[#E30613] mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white p-8 border-l-4 border-[#3183FF]">
                <div className="flex items-start gap-2 mb-4">
                  <Icon name="Quote" size={20} className="text-[#3183FF] flex-shrink-0 mt-1" />
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">{t.text}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <div className="font-oswald font-semibold uppercase">{t.name}</div>
                    <div className="text-gray-500 text-xs">{t.age}</div>
                  </div>
                  <div className="bg-[#E30613] text-white font-oswald font-bold px-3 py-1 text-sm">
                    {t.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="font-oswald text-[#E30613] text-sm uppercase tracking-widest mb-3">Инвестиция в себя</div>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase">Выбери тариф</h2>
            <div className="w-16 h-1 bg-[#E30613] mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-start">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative p-8 border-2 ${
                  plan.highlight
                    ? "border-[#E30613] bg-black text-white"
                    : "border-gray-200 bg-white text-black"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#E30613] text-white font-oswald font-bold text-xs px-6 py-1 uppercase tracking-wider">
                    Популярный
                  </div>
                )}

                <div className={`font-oswald text-2xl font-bold uppercase mb-2 ${plan.highlight ? "text-white" : "text-black"}`}>
                  {plan.name}
                </div>

                <div className="mb-6">
                  <div className={`font-oswald text-5xl font-bold ${plan.highlight ? "text-[#E30613]" : "text-black"}`}>
                    {plan.price}
                  </div>
                  <div className="text-sm line-through mt-1 text-gray-400">
                    {plan.old}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <div className={`w-5 h-5 flex items-center justify-center flex-shrink-0 ${plan.highlight ? "bg-[#E30613]" : "bg-black"}`}>
                        <Icon name="Check" size={12} className="text-white" />
                      </div>
                      <span className={plan.highlight ? "text-gray-300" : "text-gray-600"}>{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full font-oswald font-bold py-4 text-sm uppercase tracking-wider transition-all ${
                    plan.highlight
                      ? "bg-[#E30613] text-white hover:bg-red-700"
                      : "bg-black text-white hover:bg-gray-800"
                  }`}
                >
                  Выбрать тариф
                </button>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-8 flex items-center justify-center gap-2">
            <Icon name="ShieldCheck" size={16} className="text-[#3183FF]" />
            Гарантия возврата 14 дней без вопросов
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#D9D9D9]/30">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="font-oswald text-[#E30613] text-sm uppercase tracking-widest mb-3">Вопросы и ответы</div>
            <h2 className="font-oswald text-4xl font-bold uppercase">FAQ</h2>
            <div className="w-16 h-1 bg-[#E30613] mx-auto mt-4" />
          </div>

          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-100">
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-oswald font-semibold uppercase text-sm pr-4">{faq.q}</span>
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black text-white text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <div className="font-oswald text-[#E30613] text-sm uppercase tracking-widest mb-4">Готов к прорыву?</div>
          <h2 className="font-oswald text-5xl md:text-6xl font-bold uppercase mb-6 leading-none">
            Начни свой<br />
            <span className="text-[#E30613]">Квантовый</span><br />
            Скачок сегодня
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-lg mx-auto">
            Присоединяйся к сотням учеников, которые уже изменили свою финансовую жизнь
          </p>
          <button className="bg-[#E30613] text-white font-oswald font-bold px-14 py-5 text-xl uppercase tracking-wider hover:bg-red-700 transition-all animate-pulse-red">
            Хочу финансовую свободу
          </button>
          <div className="flex items-center justify-center gap-6 mt-8 text-gray-500 text-sm flex-wrap">
            <span className="flex items-center gap-2">
              <Icon name="Lock" size={14} />
              Безопасная оплата
            </span>
            <span className="flex items-center gap-2">
              <Icon name="RefreshCw" size={14} />
              Возврат 14 дней
            </span>
            <span className="flex items-center gap-2">
              <Icon name="Headphones" size={14} />
              Поддержка 24/7
            </span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-oswald font-bold text-lg tracking-widest uppercase">
            <span className="text-[#E30613]">ПОТОК</span>
            <span className="text-white"> НОВИЧКА</span>
          </div>
          <div className="text-gray-600 text-xs text-center">
            © 2024 Поток Новичка. Все права защищены.
          </div>
          <div className="flex gap-6 text-gray-600 text-xs">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Договор оферты</a>
          </div>
        </div>
      </footer>

    </div>
  );
}