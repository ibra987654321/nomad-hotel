import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner">
        <div className="navbar-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="navbar-logo-name">Nomad Halal Hotel</span>
          <span className="navbar-logo-sub">Halal · Bishkek · ★★★</span>
        </div>

        <ul className={`navbar-links${open ? ' open' : ''}`}>
          {[
            { id: 'about',      label: 'О нас' },
            { id: 'rooms',      label: 'Номера' },
            { id: 'services',   label: 'Услуги' },
            { id: 'advantages', label: 'Почему мы' },
            { id: 'reviews',    label: 'Отзывы' },
          ].map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} onClick={(e) => { e.preventDefault(); scrollTo(id); }}>
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="navbar-cta"
              onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}
            >
              Забронировать
            </a>
          </li>
        </ul>

        <button
          className="navbar-toggle"
          aria-label="Меню"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
