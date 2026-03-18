import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/d448d1bd-9c2b-478e-9d96-bfe44c396f34/files/ac40b789-58f8-40a9-b06e-2c75cd5a509f.jpg";
const QUANTUM_IMG = "https://cdn.poehali.dev/projects/d448d1bd-9c2b-478e-9d96-bfe44c396f34/files/cbfacf1d-85ad-42e5-94d0-447b742fc5ea.jpg";

const forWhom = [
  "Ощущаете финансовую нестабильность и хотите наконец-то взять контроль над своей экономикой.",
  "Уже пробовали другие методы заработка, но они не привели к устойчивому результату.",
  "Хотите создать источник пассивного дохода с возможностью быстрого роста.",
  "Переживаете из-за рисков потери денег в новых проектах, но готовы попробовать надёжную систему, которая реально работает.",
];

const lifeChanges = [
  { icon: "Zap", text: "Уже с первого дня вы начнёте получать реальные деньги от своего Денежного Потока Новичка, а максимальную сумму ежедневного начисления вы получите в первый же день." },
  { icon: "TrendingUp", text: "Ваш доход будет расти благодаря уникальной системе криптовалюты eCurrency, которая обеспечит более высокие выплаты и стабильность." },
  { icon: "RefreshCw", text: "Поток Новичка обеспечит долгосрочный рост вашего капитала с возможностью реинвестировать для максимального результата." },
  { icon: "ShieldCheck", text: "Ваши финансы будут всегда под контролем, а доход — стабильно расти каждый день." },
];

const strategyFeatures = [
  "Стабильное ежедневное начисление",
  "Реинвест для увеличения потока",
  "Личные выплаты для удовлетворения нужд",
  "Дубликация через команду для ускоренного роста",
];

const idealFor = [
  { title: "Для новичков", desc: "Позволяет начать с любой суммы и постепенно увеличивать доход благодаря выгодному курсу." },
  { title: "Для тех, кто хочет быстрый результат", desc: "Система работает с первого дня — без долгого ожидания и сложных схем." },
  { title: "Для инвесторов", desc: "Для тех, кто готов инвестировать больше и желает получать максимальные выплаты." },
  { title: "Для роста каждый день", desc: "Для тех, кто хочет увеличивать свой взнос с каждым днём, обеспечивая постоянный рост дохода." },
];

const consultationBenefits = [
  { icon: "Target", title: "Чёткая картина финансового будущего", desc: "Вы узнаете, какие шаги необходимо предпринять для создания стабильного источника дохода." },
  { icon: "Map", title: "Пошаговый план финансовой свободы", desc: "Проверенная стратегия, которая поможет выйти из замкнутого круга зарплаты и долгов." },
  { icon: "Layers", title: "Несколько источников дохода", desc: "Как создать дополнительные потоки дохода для финансовой стабильности и спокойствия." },
  { icon: "Eye", title: "Взгляд изнутри на систему", desc: "Реальные примеры, как люди, подобные вам, уже меняют свою жизнь." },
  { icon: "Key", title: "Доступ к эксклюзивным ресурсам", desc: "Открою доступ к личному кабинету и системам — увидите, как работает процесс изнутри." },
  { icon: "MessageCircle", title: "Ответы на все вопросы", desc: "Разберём ваши сомнения и страхи. Полное представление о том, как начать с первого шага." },
];

const faqs = [
  { q: "Не получилось в этой сфере, почему должно получиться сейчас?", a: "Проблемы обычно связаны с отсутствием правильной стратегии. Я дам вам чёткий план, который работает, и покажу, как избежать ошибок прошлого." },
  { q: "Я не работал в этой сфере, у меня не получится", a: "Подойдёт даже новичкам. Мы начнём с простого и постепенно будем углубляться, шаг за шагом." },
  { q: "Я технически не подкован — что если не смогу разобраться с технологиями?", a: "Система проста в использовании. Я проведу вас через весь процесс, даже если у вас нет технических навыков." },
  { q: "Нужно ли вкладывать большие суммы денег, чтобы начать?", a: "Нет, старт не требует больших вложений. Начать можно от 2 000 ₽ и увеличивать поток постепенно." },
  { q: "Как я буду знать, что это стоит моего времени?", a: "Я покажу реальные примеры успеха и дам пошаговый план, который точно работает." },
  { q: "Я уже пробовал, но не получилось. Чем это отличается?", a: "Мы будем работать по проверенной стратегии, которая дала результат многим людям." },
  { q: "Как записаться на консультацию?", a: "Места ограничены, напишите мне, и я забронирую для вас время." },
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
            <a href="#about" className="hover:text-[#E30613] transition-colors">О проекте</a>
            <a href="#author" className="hover:text-[#E30613] transition-colors">Автор</a>
            <a href="#consultation" className="hover:text-[#E30613] transition-colors">Консультация</a>
            <a href="#faq" className="hover:text-[#E30613] transition-colors">FAQ</a>
          </nav>
          <button className="bg-[#E30613] text-white font-oswald font-semibold px-6 py-2 text-sm uppercase tracking-wider hover:bg-red-700 transition-colors">
            Участвовать
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center pt-16 bg-white overflow-hidden border-b border-gray-100">
        <div className="relative z-10 max-w-5xl mx-auto px-4 py-24 text-center md:text-left">
          <div className="animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
            <h1 className="font-oswald text-black font-bold leading-none uppercase mb-8">
              <span className="block text-5xl md:text-7xl">КВАНТОВЫЙ</span>
              <span className="block text-5xl md:text-7xl text-[#E30613]">СКАЧОК:</span>
              <span className="block text-3xl md:text-5xl mt-2 text-gray-700">СОЗДАЙ ДЕНЕЖНЫЙ</span>
              <span className="block text-3xl md:text-5xl text-[#3183FF]">ПОТОК НОВИЧКА</span>
            </h1>
            <p className="text-gray-600 text-xl leading-relaxed max-w-2xl md:mx-0 mx-auto">
              Для тех, кто хочет выйти на новый уровень финансовой стабильности, преодолев страхи и неуверенность.
            </p>
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

      {/* STRATEGY BLOCK */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-[#E30613] font-oswald text-sm uppercase tracking-widest mb-4">
              <span>🔥</span> Взращиваем поток новичка
            </div>
            <h2 className="font-oswald text-3xl md:text-4xl font-bold uppercase mb-2 text-black">
              по стратегии «Квантовый Скачок — Поток Новичка»
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Цель: создать устойчивый денежный поток, который растёт и работает на участника, обеспечивая стабильный доход и возможность реинвеста.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-14">
            {/* Left: How it works */}
            <div className="bg-[#D9D9D9]/30 border border-gray-200 p-8">
              <div className="font-oswald text-[#3183FF] uppercase tracking-wider text-sm mb-5">Начало</div>
              <ul className="space-y-4 text-gray-700 text-sm leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-[#E30613] font-bold mt-0.5">→</span>
                  Участник вносит в Поток Новичка любую сумму от <strong className="text-black">2 000 ₽ до 200 000 ₽</strong>, которая увеличивается на <strong className="text-[#E30613]">50%</strong>.
                </li>
                <li className="flex gap-3">
                  <span className="text-[#E30613] font-bold mt-0.5">→</span>
                  Поток можно постепенно довести до максимума <strong className="text-black">300 000 ₽</strong>.
                </li>
                <li className="flex gap-3">
                  <span className="text-[#E30613] font-bold mt-0.5">→</span>
                  После достижения 300 000 ₽ поток работает <strong className="text-[#3183FF]">бесконечно</strong> с ежедневными начислениями.
                </li>
              </ul>
            </div>

            {/* Right: Accruals */}
            <div className="bg-[#E30613]/5 border border-[#E30613]/20 p-8">
              <div className="font-oswald text-[#E30613] uppercase tracking-wider text-sm mb-5">Начисления</div>
              <div className="text-center mb-6">
                <div className="font-oswald text-6xl font-bold text-black">2%</div>
                <div className="text-gray-500 text-sm">ежедневно на остаток потока</div>
              </div>
              <div className="bg-[#D9D9D9]/40 p-4 mb-4">
                <div className="text-center">
                  <span className="font-oswald text-3xl font-bold text-[#E30613]">6 000 ₽</span>
                  <span className="text-gray-500 text-sm block">в день при максимальном потоке 300 000 ₽</span>
                </div>
              </div>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex gap-3">
                  <span className="text-[#3183FF] font-bold mt-0.5">✦</span>
                  Реинвестировать <strong className="text-black">4 000 ₽</strong> обратно в поток для роста
                </li>
                <li className="flex gap-3">
                  <span className="text-[#3183FF] font-bold mt-0.5">✦</span>
                  <strong className="text-black">2 000 ₽</strong> забрать на личные расходы каждый день
                </li>
              </ul>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#E30613] text-white font-oswald font-bold px-10 py-4 text-base uppercase tracking-wider hover:bg-red-700 transition-all animate-pulse-red">
              Хочу участвовать
            </button>
            <button className="border border-gray-300 text-black font-oswald px-10 py-4 text-base uppercase tracking-wider hover:border-gray-500 transition-colors">
              Узнать подробнее
            </button>
          </div>
        </div>
      </section>

      {/* FOR WHOM */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="font-oswald text-[#E30613] text-sm uppercase tracking-widest mb-3">Самопроверка</div>
            <h2 className="font-oswald text-3xl md:text-4xl font-bold uppercase">Этот проект для вас, если вы:</h2>
            <div className="w-16 h-1 bg-[#E30613] mx-auto mt-4" />
          </div>
          <div className="space-y-4 mb-12">
            {forWhom.map((item, i) => (
              <div key={i} className="flex gap-4 bg-[#D9D9D9]/30 p-6 border-l-4 border-[#3183FF]">
                <div className="w-8 h-8 bg-[#3183FF] flex items-center justify-center flex-shrink-0 text-white font-oswald font-bold text-sm">
                  {i + 1}
                </div>
                <p className="text-gray-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#E30613]/5 border border-[#E30613]/20 p-8">
            <p className="text-gray-700 leading-relaxed text-center">
              Многие традиционные способы заработка требуют огромных усилий и времени. В отличие от них, мы предлагаем автоматическую систему, где деньги начинают работать для вас с первого дня, и результаты не заставляют себя долго ждать.
            </p>
          </div>
        </div>
      </section>

      {/* LIFE CHANGES */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="font-oswald text-[#E30613] text-sm uppercase tracking-widest mb-3">Трансформация</div>
            <h2 className="font-oswald text-3xl md:text-4xl font-bold uppercase">Что изменится в вашей жизни</h2>
            <div className="w-16 h-1 bg-[#E30613] mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {lifeChanges.map((item, i) => (
              <div key={i} className="group flex gap-5 p-6 bg-[#D9D9D9]/30 hover:bg-[#E30613]/5 border border-transparent hover:border-[#E30613]/20 transition-all">
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
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-oswald text-3xl md:text-4xl font-bold uppercase mb-4 text-black">
              «Квантовый Скачок — Поток Новичка»
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Поток Новичка — это стратегия, которая сочетает:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-14">
            {strategyFeatures.map((f, i) => (
              <div key={i} className="flex items-center gap-4 border border-gray-200 p-5 hover:border-[#E30613]/40 transition-colors bg-[#D9D9D9]/20">
                <div className="w-8 h-8 bg-[#E30613] flex items-center justify-center flex-shrink-0">
                  <Icon name="Check" size={16} className="text-white" />
                </div>
                <span className="text-gray-700">{f}</span>
              </div>
            ))}
          </div>

          <div className="bg-[#D9D9D9]/30 border border-gray-200 p-8 text-center mb-12">
            <p className="text-gray-700 text-lg leading-relaxed">
              Участник получает <strong className="text-black">контролируемый, растущий и практически бесконечный поток дохода</strong>, который можно использовать для личных расходов и инвестиций в расширение структуры.
            </p>
          </div>

          <div className="text-center mb-10">
            <div className="font-oswald text-[#3183FF] text-sm uppercase tracking-widest mb-3">Кому подходит</div>
            <h3 className="font-oswald text-2xl md:text-3xl font-bold uppercase text-black">Этот проект идеально подходит:</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {idealFor.map((item, i) => (
              <div key={i} className="bg-[#D9D9D9]/20 border border-gray-200 p-6 hover:border-[#3183FF]/40 transition-colors">
                <div className="font-oswald text-[#3183FF] uppercase font-semibold mb-2">{item.title}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#E30613] text-white font-oswald font-bold px-10 py-4 text-base uppercase tracking-wider hover:bg-red-700 transition-all animate-pulse-red">
              Хочу участвовать
            </button>
            <button className="border border-gray-300 text-black font-oswald px-10 py-4 text-base uppercase tracking-wider hover:border-gray-500 transition-colors">
              Записаться
            </button>
          </div>
        </div>
      </section>

      {/* AUTHOR */}
      <section id="author" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="font-oswald text-[#E30613] text-sm uppercase tracking-widest mb-3">История успеха</div>
            <h2 className="font-oswald text-3xl md:text-4xl font-bold uppercase">Автор стратегии</h2>
            <div className="w-16 h-1 bg-[#E30613] mx-auto mt-4" />
          </div>

          <div className="bg-white border-l-4 border-[#E30613] p-8 md:p-12 relative">
            <div className="absolute top-6 left-8 opacity-10">
              <Icon name="Quote" size={80} className="text-[#E30613]" />
            </div>
            <div className="relative z-10">
              <div className="font-oswald text-2xl font-bold mb-1">Евгений</div>
              <div className="text-[#3183FF] text-sm mb-6 font-medium">Основатель стратегии «Квантовый Скачок»</div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Я — обычный парень из села. Никаких кредитов, займов или стартового капитала. Но благодаря стратегии «Квантовый скачок» я создал за 10 месяцев денежный поток более <strong className="text-[#E30613]">1 000 000 рублей</strong>, начав с откладывания всего от 10 000 рублей в месяц.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Сейчас я трачу <strong>15 минут в день</strong> (имея только интернет и смартфон/ноутбук) и получаю от <strong className="text-[#E30613]">3 000 — 9 000 рублей ежедневно</strong>. Я больше не задаюсь вопросом «Где взять деньги на завтра?» — я знаю, что деньги есть всегда.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Я не только разрабатываю стратегии, но и сопровождаю каждого клиента на пути к успеху, обеспечивая полную поддержку и консультации. Вместе с вами мы будем достигать реальных результатов!
              </p>

              <div className="bg-[#E30613]/5 border border-[#E30613]/20 p-6 text-center">
                <p className="text-gray-600 mb-2">Для новичков разработана стратегия, которая приведёт вас к доходу</p>
                <div className="font-oswald text-4xl font-bold text-[#E30613]">46 000 — 360 000 ₽</div>
                <div className="text-gray-500 text-sm mt-1">ежемесячно</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONSULTATION */}
      <section id="consultation" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="font-oswald text-[#E30613] text-sm uppercase tracking-widest mb-3">Бесплатно</div>
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

          <div className="grid md:grid-cols-3 gap-5 mb-12">
            {consultationBenefits.map((item, i) => (
              <div key={i} className="group p-6 bg-[#D9D9D9]/30 border border-gray-100 hover:border-[#3183FF]/30 hover:bg-[#3183FF]/5 transition-all">
                <div className="w-10 h-10 bg-[#3183FF] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name={item.icon} size={18} className="text-white" />
                </div>
                <div className="font-oswald font-semibold uppercase text-sm mb-2">{item.title}</div>
                <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#E30613]/5 border border-[#E30613]/20 p-10 text-center">
            <div className="font-oswald text-[#E30613] text-sm uppercase tracking-widest mb-3">Не откладывайте мечты на завтра!</div>
            <p className="text-gray-600 mb-2">Места на консультацию ограничены, и я хочу, чтобы именно вы стали частью этой трансформации.</p>
            <p className="text-black font-semibold mb-8">Присоединяйтесь прямо сейчас и начните действовать!</p>
            <button className="bg-[#E30613] text-white font-oswald font-bold px-14 py-5 text-xl uppercase tracking-wider hover:bg-red-700 transition-all animate-pulse-red">
              Записаться на консультацию
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="font-oswald text-[#E30613] text-sm uppercase tracking-widest mb-3">Вопросы и ответы</div>
            <h2 className="font-oswald text-3xl md:text-4xl font-bold uppercase">Часто задаваемые вопросы</h2>
            <div className="w-16 h-1 bg-[#E30613] mx-auto mt-4" />
          </div>

          <div className="space-y-2 mb-12">
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

          <div className="text-center">
            <button className="bg-[#E30613] text-white font-oswald font-bold px-12 py-4 text-base uppercase tracking-wider hover:bg-red-700 transition-all animate-pulse-red">
              Хочу участвовать
            </button>
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

    </div>
  );
}