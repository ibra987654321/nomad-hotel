import React from 'react';

const WA_BOOK = 'https://wa.me/996500214000?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20%D0%BD%D0%BE%D0%BC%D0%B5%D1%80.';

const Hero: React.FC = () => {
  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="hero" id="hero">
      <div className="hero-bg-pattern" />
      <div className="hero-glow" />

      <div className="hero-content container">
        <div className="hero-badge">
          <span>☪</span>
          <span>Халяль Отель · 3 Звезды · Бишкек</span>
        </div>

        <h1 className="hero-h1">
          Добро пожаловать в
          <span>Nomad Halal Hotel</span>
        </h1>

        <p className="hero-sub">
          Уютная гостиница в самом сердце Бишкека, где каждый гость чувствует себя
          как дома. Халяль-стандарт, тёплый приём и искренняя забота — с нами.
        </p>

        <div className="hero-actions">
          <button className="btn-primary" onClick={scrollToContact}>
            🏨 Забронировать номер
          </button>
          <a
            href={WA_BOOK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            💬 Написать в WhatsApp
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <div className="hero-stat-val">4.6</div>
            <div className="hero-stat-lbl">Рейтинг на 2ГИС</div>
          </div>
          <div>
            <div className="hero-stat-val">234+</div>
            <div className="hero-stat-lbl">Отзывов гостей</div>
          </div>
          <div>
            <div className="hero-stat-val">3 000 ₸</div>
            <div className="hero-stat-lbl">от сом / ночь</div>
          </div>
          <div>
            <div className="hero-stat-val">10-й</div>
            <div className="hero-stat-lbl">визит — в подарок</div>
          </div>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <div className="hero-mouse" />
        <span>Прокрути</span>
      </div>
    </section>
  );
};

export default Hero;
