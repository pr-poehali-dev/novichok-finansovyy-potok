import Icon from "@/components/ui/icon";

export default function AuthorSection() {
  return (
    <section id="author" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="font-oswald text-[#E30613] text-2xl font-bold uppercase tracking-widest mb-3">История успеха</div>
          <h2 className="font-oswald text-3xl md:text-4xl font-bold uppercase">Автор стратегии</h2>
          <div className="w-16 h-1 bg-[#E30613] mx-auto mt-4" />
        </div>

        <div className="bg-white border-l-4 border-[#E30613] p-8 md:p-12 relative">
          <div className="absolute top-6 left-8 opacity-10">
            <Icon name="Quote" size={80} className="text-[#E30613]" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-5 mb-6">
              <img
                src="https://cdn.poehali.dev/projects/d448d1bd-9c2b-478e-9d96-bfe44c396f34/bucket/89c61107-6718-40d7-a573-c668b5f532f9.png"
                alt="Евгений"
                className="w-40 h-52 md:w-48 md:h-64 rounded-2xl object-cover object-top border-4 border-[#E30613] shadow-lg flex-shrink-0"
              />
              <div>
                <div className="font-oswald text-3xl md:text-4xl font-bold mb-2">Евгений</div>
                <div className="text-[#3183FF] text-base md:text-lg font-medium">Основатель стратегии «Квантовый Скачок»</div>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              Я — обычный парень из села. Никаких кредитов, займов или стартового капитала. Но благодаря стратегии «Квантовый скачок» я создал за 10 месяцев денежный поток более<br/><strong className="text-[#E30613]">1 000 000 рублей</strong>, начав с откладывания всего от 10 000 рублей в месяц.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Сейчас я трачу <strong>15 минут в день</strong> (имея только интернет и смартфон/ноутбук) и получаю от<br/><strong className="text-[#E30613]">3 000 — 9 000 рублей ежедневно</strong>. Я больше не задаюсь вопросом «Где взять деньги на завтра?» — я знаю, что деньги есть всегда.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Я не только разрабатываю стратегии, но и сопровождаю каждого клиента на пути к успеху, обеспечивая полную поддержку и консультации. Вместе с вами мы будем достигать реальных результатов!
            </p>

            <div className="bg-[#E30613]/5 border border-[#E30613]/20 p-6 text-center">
              <p className="text-gray-600 mb-2">Для новичков разработана стратегия, которая приведёт вас к доходу</p>
              <div className="font-oswald text-4xl font-bold text-[#E30613]">45 500 — 360 000 ₽</div>
              <div className="text-gray-500 text-sm mt-1">ежемесячно</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}