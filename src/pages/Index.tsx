import { useState } from "react";
import Icon from "@/components/ui/icon";
import type { LucideProps } from "lucide-react";

type IconName = LucideProps extends { name: infer N } ? N : string;

const HERO_IMAGE = "https://cdn.poehali.dev/projects/ba91ad46-0670-47e2-b1b7-be0aa0dcc81e/files/c1cc9963-9a06-44a0-a245-416081f932fa.jpg";

const NAV_ITEMS = [
  { id: "home", label: "Главная" },
  { id: "pass", label: "Проходка" },
  { id: "about", label: "О сервере" },
  { id: "community", label: "Сообщество" },
  { id: "contacts", label: "Контакты" },
];

const PASS_FEATURES = [
  {
    icon: "Sword",
    title: "Доступ к закрытым зонам",
    desc: "Подземелья Бездны, Руинированные Цитадели и Тёмные Храмы — локации только для владельцев проходки",
  },
  {
    icon: "Crown",
    title: "Уникальный статус",
    desc: "Особая роль [Хронист] в чате и дискорде. Золотой ник и специальный префикс перед именем",
  },
  {
    icon: "Zap",
    title: "Эксклюзивные классы",
    desc: "Некромант, Инквизитор и Рунный Маг — закрытые классы с уникальными навыками и способностями",
  },
  {
    icon: "Package",
    title: "Стартовый набор",
    desc: "Зачарованная броня, редкие зелья, 500 монет и 3 ключа от Сундуков Бездны при первом входе",
  },
  {
    icon: "Users",
    title: "Закрытое сообщество",
    desc: "Доступ в VIP-канал сервера, ранние анонсы обновлений и голосование за новый контент",
  },
  {
    icon: "Star",
    title: "Ежемесячные бонусы",
    desc: "Каждый месяц — особый набор ресурсов, монеты опыта и случайный предмет из таблицы редкостей",
  },
];

const SERVER_FEATURES = [
  { icon: "Map", title: "Огромный мир", desc: "Более 50 уникальных биомов, сотни данжей и секретных локаций" },
  { icon: "Shield", title: "RPG система", desc: "Классы, навыки, прокачка, фракции и эпическая история мира" },
  { icon: "Flame", title: "Боссы и рейды", desc: "Еженедельные рейды на древних существ Бездны" },
  { icon: "BookOpen", title: "Живая история", desc: "Сюжетные квесты и постоянно развивающийся лор сервера" },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-void text-foreground overflow-x-hidden">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gold/20" style={{ background: "rgba(10,12,20,0.92)", backdropFilter: "blur(12px)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <button onClick={() => scrollTo("home")} className="font-display text-xl font-bold text-gold-light text-glow-gold tracking-wider">
            ☽ LOST SPACE
          </button>

          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-3 py-1.5 text-sm font-body transition-all duration-200 rounded ${
                  activeSection === item.id
                    ? "text-gold bg-gold/10"
                    : "text-foreground/60 hover:text-gold/80"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollTo("pass")}
            className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-body font-semibold rounded glow-gold"
            style={{ background: "linear-gradient(135deg, var(--gold-dim), var(--gold))", color: "var(--void)" }}
          >
            Купить проходку
          </button>

          <button className="md:hidden text-gold" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gold/20 bg-void/98 px-4 py-3 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left px-3 py-2 text-sm font-body text-foreground/70 hover:text-gold transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("pass")}
              className="mt-2 px-4 py-2 text-sm font-semibold rounded"
              style={{ background: "linear-gradient(135deg, var(--gold-dim), var(--gold))", color: "var(--void)" }}
            >
              Купить проходку — 100₽
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMAGE} alt="Lost Space" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,12,20,0.3) 0%, rgba(10,12,20,0.5) 50%, rgba(10,12,20,1) 100%)" }} />
        </div>

        <div className="absolute top-1/4 left-8 text-rune text-4xl opacity-30 animate-rune-glow font-display" style={{ color: "var(--rune-bright)" }}>ᚱ</div>
        <div className="absolute top-1/3 right-12 text-5xl opacity-20 animate-rune-glow delay-300 font-display" style={{ color: "var(--rune-bright)" }}>ᚨ</div>
        <div className="absolute bottom-1/3 left-16 text-3xl opacity-25 animate-rune-glow delay-500 font-display" style={{ color: "var(--rune-bright)" }}>ᛟ</div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-body mb-6 animate-fade-in-up" style={{ border: "1px solid rgba(123,94,167,0.4)", background: "rgba(123,94,167,0.1)", color: "var(--rune-bright)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Сервер онлайн · Minecraft 1.20+
          </div>

          <h1 className="font-display text-5xl sm:text-7xl font-bold leading-tight mb-4 animate-fade-in-up delay-100" style={{ opacity: 0 }}>
            <span className="text-glow-gold" style={{ color: "var(--gold-light)" }}>LOST SPACE</span>
            <br />
            <span className="text-4xl sm:text-5xl italic" style={{ color: "rgba(232,192,106,0.7)" }}>Хроники Бездны</span>
          </h1>

          <div className="ornament-line w-48 mx-auto my-6 animate-fade-in-up delay-200" style={{ opacity: 0 }} />

          <p className="font-body text-lg sm:text-xl max-w-2xl mx-auto mb-10 animate-fade-in-up delay-300" style={{ opacity: 0, color: "rgba(232,210,170,0.65)" }}>
            Тёмное фэнтези. Эпические подземелья. Живой мир, где каждый выбор имеет последствия.
            Войди в Хроники Бездны — если осмелишься.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400" style={{ opacity: 0 }}>
            <button
              onClick={() => scrollTo("pass")}
              className="px-8 py-4 font-body font-semibold text-lg rounded border-2 border-gold glow-gold transition-all duration-300 hover:scale-105"
              style={{ background: "linear-gradient(135deg, var(--gold-dim), var(--gold))", color: "var(--void)", borderColor: "var(--gold)" }}
            >
              ⚔ Купить проходку — 100₽
            </button>
            <button
              onClick={() => scrollTo("about")}
              className="px-8 py-4 font-body font-semibold text-lg rounded border transition-all duration-300 hover:scale-105"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(232,210,170,0.8)" }}
            >
              Узнать о сервере
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float opacity-50">
          <Icon name="ChevronDown" size={28} style={{ color: "var(--gold)" }} />
        </div>
      </section>

      {/* PASS SECTION */}
      <section id="pass" className="py-24 px-4 relative">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(201,151,58,0.06) 0%, transparent 70%)" }} />

        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-body tracking-[0.2em] uppercase mb-3" style={{ color: "var(--rune-bright)" }}>Доступ к миру</p>
            <h2 className="font-display text-5xl sm:text-6xl font-bold mb-4 text-glow-gold" style={{ color: "var(--gold-light)" }}>Проходка</h2>
            <div className="ornament-line w-64 mx-auto" />
          </div>

          <div className="max-w-md mx-auto mb-16">
            <div className="card-fantasy rounded-lg p-8 text-center glow-gold relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px ornament-line" />
              <div className="absolute bottom-0 left-0 right-0 h-px ornament-line" />

              <div className="font-display text-7xl font-bold text-glow-gold mb-2" style={{ color: "var(--gold)" }}>100₽</div>
              <div className="font-body text-sm mb-6" style={{ color: "rgba(232,210,170,0.4)" }}>единоразовая оплата · навсегда</div>

              <button
                className="w-full py-4 font-body font-semibold text-lg rounded border-2 transition-all duration-300 hover:scale-105"
                style={{ background: "linear-gradient(135deg, var(--gold-dim), var(--gold))", color: "var(--void)", borderColor: "var(--gold)" }}
              >
                ⚔ Купить проходку
              </button>

              <p className="font-body text-xs mt-3" style={{ color: "rgba(232,210,170,0.3)" }}>
                Мгновенная выдача · Оплата картой/СБП
              </p>
            </div>
          </div>

          <div className="mb-8 text-center">
            <h3 className="font-display text-3xl mb-2" style={{ color: "rgba(232,210,170,0.8)" }}>Что входит в проходку</h3>
            <p className="font-body text-sm" style={{ color: "rgba(232,210,170,0.4)" }}>Всё, что получает владелец проходки навсегда</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PASS_FEATURES.map((f, i) => (
              <div
                key={i}
                className="card-fantasy rounded-lg p-5 transition-all duration-300 hover:-translate-y-1 group"
                style={{ cursor: "default" }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(201,151,58,0.1)", border: "1px solid var(--gold-dim)" }}>
                    <Icon name={f.icon} size={18} style={{ color: "var(--gold)" }} fallback="Star" />
                  </div>
                  <div>
                    <div className="font-display text-lg mb-1" style={{ color: "var(--gold-light)" }}>{f.title}</div>
                    <div className="font-body text-sm leading-relaxed" style={{ color: "rgba(232,210,170,0.5)" }}>{f.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SERVER */}
      <section id="about" className="py-24 px-4 relative">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(123,94,167,0.05) 0%, transparent 70%)" }} />

        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-body tracking-[0.2em] uppercase mb-3" style={{ color: "var(--rune-bright)" }}>История мира</p>
            <h2 className="font-display text-5xl sm:text-6xl font-bold mb-4 text-glow-gold" style={{ color: "var(--gold-light)" }}>О сервере</h2>
            <div className="ornament-line w-64 mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="font-display text-3xl italic mb-4" style={{ color: "var(--gold)" }}>Мир на краю Бездны</h3>
              <div className="space-y-4 font-body leading-relaxed" style={{ color: "rgba(232,210,170,0.6)" }}>
                <p>
                  Lost Space: Хроники Бездны — это тёмный фэнтезийный RPG-сервер, где древние цивилизации
                  рухнули в пустоту, а выжившие сражаются за остатки утраченного мира.
                </p>
                <p>
                  Каждый игрок — Хронист, собирающий фрагменты истории через исследования, битвы
                  и дипломатию. Ваши решения формируют живой лор сервера.
                </p>
                <p>
                  Фракции, подземелья, артефакты, эпические боссы и постоянно расширяющийся мир
                  ждут тех, кто готов ступить в Бездну.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {SERVER_FEATURES.map((f, i) => (
                <div key={i} className="card-fantasy rounded-lg p-4 text-center transition-all duration-300 hover:-translate-y-1" style={{ cursor: "default" }}>
                  <div className="w-10 h-10 rounded flex items-center justify-center mx-auto mb-3" style={{ background: "rgba(123,94,167,0.1)", border: "1px solid var(--rune)" }}>
                    <Icon name={f.icon} size={18} style={{ color: "var(--rune-bright)" }} fallback="Star" />
                  </div>
                  <div className="font-display text-base mb-1" style={{ color: "var(--rune-bright)" }}>{f.title}</div>
                  <div className="font-body text-xs" style={{ color: "rgba(232,210,170,0.45)" }}>{f.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="card-fantasy rounded-lg p-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              {[
                { val: "500+", label: "Игроков" },
                { val: "50+", label: "Локаций" },
                { val: "200+", label: "Квестов" },
                { val: "3", label: "Фракции" },
              ].map((s, i) => (
                <div key={i}>
                  <div className="font-display text-4xl font-bold text-glow-gold" style={{ color: "var(--gold)" }}>{s.val}</div>
                  <div className="font-body text-sm mt-1" style={{ color: "rgba(232,210,170,0.45)" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section id="community" className="py-24 px-4 relative">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(201,151,58,0.04) 0%, transparent 60%)" }} />

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-body tracking-[0.2em] uppercase mb-3" style={{ color: "var(--rune-bright)" }}>Вступи в ряды</p>
          <h2 className="font-display text-5xl sm:text-6xl font-bold mb-4 text-glow-gold" style={{ color: "var(--gold-light)" }}>Сообщество</h2>
          <div className="ornament-line w-64 mx-auto mb-12" />

          <div className="grid sm:grid-cols-2 gap-6">
            <a
              href="https://www.youtube.com/@LostSpace_seson"
              target="_blank"
              rel="noopener noreferrer"
              className="card-fantasy rounded-lg p-8 flex flex-col items-center gap-4 transition-all duration-300 hover:-translate-y-2"
              style={{ textDecoration: "none" }}
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110" style={{ background: "rgba(255,0,0,0.15)", border: "2px solid rgba(255,0,0,0.3)" }}>
                <span className="text-3xl">▶</span>
              </div>
              <div>
                <div className="font-display text-2xl mb-1" style={{ color: "rgba(232,210,170,0.9)" }}>YouTube</div>
                <div className="font-body text-sm" style={{ color: "rgba(232,210,170,0.45)" }}>Гайды, летсплеи и обзоры обновлений</div>
              </div>
              <div className="flex items-center gap-1 text-sm font-body mt-auto" style={{ color: "rgba(255,80,80,0.7)" }}>
                <span>Перейти на канал</span>
                <Icon name="ExternalLink" size={14} />
              </div>
            </a>

            <a
              href="https://t.me/lost_space3"
              target="_blank"
              rel="noopener noreferrer"
              className="card-fantasy rounded-lg p-8 flex flex-col items-center gap-4 transition-all duration-300 hover:-translate-y-2"
              style={{ textDecoration: "none" }}
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "rgba(39,158,255,0.15)", border: "2px solid rgba(39,158,255,0.3)" }}>
                <span className="text-3xl">✈</span>
              </div>
              <div>
                <div className="font-display text-2xl mb-1" style={{ color: "rgba(232,210,170,0.9)" }}>Telegram</div>
                <div className="font-body text-sm" style={{ color: "rgba(232,210,170,0.45)" }}>Новости, ивенты и общение</div>
              </div>
              <div className="flex items-center gap-1 text-sm font-body mt-auto" style={{ color: "rgba(39,158,255,0.7)" }}>
                <span>Открыть канал</span>
                <Icon name="ExternalLink" size={14} />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-body tracking-[0.2em] uppercase mb-3" style={{ color: "var(--rune-bright)" }}>Связь</p>
          <h2 className="font-display text-5xl sm:text-6xl font-bold mb-4 text-glow-gold" style={{ color: "var(--gold-light)" }}>Контакты</h2>
          <div className="ornament-line w-64 mx-auto mb-10" />

          <div className="card-fantasy rounded-lg p-8 space-y-6">
            <p className="font-body" style={{ color: "rgba(232,210,170,0.55)" }}>
              Вопросы, проблемы с оплатой или предложения — мы всегда на связи
            </p>

            <div className="space-y-3">
              {[
                { icon: "MessageCircle", label: "Telegram-поддержка", value: "@Ilikpilik", href: "https://t.me/Ilikpilik" },
                { icon: "Mail", label: "Email", value: "atgashuddlv@yandex.ru", href: "mailto:atgashuddlv@yandex.ru" },
              ].map((c, i) => (
                <a
                  key={i}
                  href={c.href}
                  className="flex items-center gap-4 p-4 rounded transition-all duration-200"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(201,151,58,0.1)", textDecoration: "none" }}
                >
                  <div className="w-9 h-9 rounded flex items-center justify-center flex-shrink-0" style={{ background: "rgba(201,151,58,0.1)" }}>
                    <Icon name={c.icon} size={16} style={{ color: "var(--gold)" }} fallback="Mail" />
                  </div>
                  <div className="text-left">
                    <div className="font-body text-xs" style={{ color: "rgba(232,210,170,0.35)" }}>{c.label}</div>
                    <div className="font-body text-sm" style={{ color: "var(--gold-light)" }}>{c.value}</div>
                  </div>
                  <Icon name="ChevronRight" size={16} style={{ color: "rgba(201,151,58,0.3)" }} className="ml-auto" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-4 text-center" style={{ borderTop: "1px solid var(--gold-dim)" }}>
        <div className="ornament-line w-48 mx-auto mb-6" />
        <div className="font-display text-xl mb-2" style={{ color: "rgba(201,151,58,0.5)" }}>☽ LOST SPACE · Хроники Бездны</div>
        <div className="font-body text-xs" style={{ color: "rgba(232,210,170,0.25)" }}>© 2024 · Все права защищены</div>
        <div className="mt-4 flex justify-center gap-4">
          <button onClick={() => scrollTo("pass")} className="font-body text-xs transition-colors" style={{ color: "rgba(201,151,58,0.45)" }}>Купить проходку</button>
          <span style={{ color: "rgba(232,210,170,0.15)" }}>·</span>
          <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="font-body text-xs transition-colors" style={{ color: "rgba(232,210,170,0.35)" }}>Telegram</a>
          <span style={{ color: "rgba(232,210,170,0.15)" }}>·</span>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="font-body text-xs transition-colors" style={{ color: "rgba(232,210,170,0.35)" }}>YouTube</a>
        </div>
      </footer>
    </div>
  );
}