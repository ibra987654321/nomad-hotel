import React from 'react';

const scrollTo = (id: string) => (e: React.MouseEvent) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        {/* Brand */}
        <div>
          <div className="footer-brand-name">Nomad Halal Hotel</div>
          <div className="footer-brand-sub">Halal · Bishkek · ★★★</div>
          <p className="footer-brand-desc">
            Уютная халяль-гостиница в центре Бишкека. Тёплый приём, честный
            сервис и забота о каждом госте — вот что делает нас особенными.
          </p>
          <div className="footer-socials">
            <a
              href="https://wa.me/996500214000"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social"
              title="WhatsApp"
            >
              💬
            </a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="footer-social" title="Instagram">📷</a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="footer-social" title="Telegram">✈️</a>
          </div>
        </div>

        {/* Nav */}
        <div>
          <h4 className="footer-col-title">Навигация</h4>
          <ul className="footer-links">
            {[
              { id: 'about',      label: 'О нас' },
              { id: 'rooms',      label: 'Номера и цены' },
              { id: 'services',   label: 'Услуги' },
              { id: 'advantages', label: 'Преимущества' },
              { id: 'reviews',    label: 'Отзывы' },
              { id: 'contact',    label: 'Контакты' },
            ].map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} onClick={scrollTo(id)}>{label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacts */}
        <div>
          <h4 className="footer-col-title">Контакты</h4>
          <div className="footer-contact-row">
            <span>📍</span>
            <span>ул. Гагарина, 10, Бишкек, Кыргызстан</span>
          </div>
          <div className="footer-contact-row">
            <span>📞</span>
            <a href="tel:+996500214000">+996 500 214 000</a>
          </div>
          <div className="footer-contact-row">
            <span>📱</span>
            <a href="tel:+996553214000">+996 553 214 000</a>
          </div>
          <div className="footer-contact-row" style={{ marginTop: '0.5rem' }}>
            <span>⭐</span>
            <span>4.6 / 5 на 2ГИС (234 отзыва)</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Nomad Halal Hotel. Все права защищены.</span>
        <span style={{ color: 'var(--gold)', opacity: 0.65 }}>Бишкек, Кыргызстан 🇰🇬</span>
      </div>
    </div>
  </footer>
);

export default Footer;
