import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import OrnamentDivider from './OrnamentDivider';

const WA_ICON = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const Contact: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '1',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = [
      'Здравствуйте! Хочу забронировать номер.',
      `Имя: ${form.name}`,
      `Телефон: ${form.phone}`,
      `Заезд: ${form.checkIn}`,
      `Выезд: ${form.checkOut}`,
      `Гостей: ${form.guests}`,
    ].join('\n');
    window.open(
      `https://wa.me/996500214000?text=${encodeURIComponent(msg)}`,
      '_blank'
    );
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div ref={ref} className={`contact-grid fade-in${isVisible ? ' visible' : ''}`}>
          {/* Info */}
          <div>
            <OrnamentDivider />
            <h2 className="contact-h2">Свяжитесь с нами</h2>
            <p className="contact-desc">
              Готовы ответить на любые вопросы и помочь с бронированием. Напишите
              в WhatsApp или заполните форму — мы свяжемся с вами в ближайшее время.
            </p>

            <div className="contact-details">
              {[
                { ico: '📍', lbl: 'Адрес',             val: 'ул. Гагарина, 10, Бишкек, Кыргызстан' },
                { ico: '📞', lbl: 'Телефон',            val: '+996 500 214 000' },
                { ico: '📱', lbl: 'WhatsApp',           val: '+996 553 214 000' },
                { ico: '🕐', lbl: 'Режим работы',       val: 'Круглосуточно, 7 дней в неделю' },
              ].map(({ ico, lbl, val }) => (
                <div key={lbl} className="contact-detail">
                  <div className="contact-ico">{ico}</div>
                  <div>
                    <div className="contact-lbl">{lbl}</div>
                    <div className="contact-val">{val}</div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/996500214000?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D0%BE%20%D0%BD%D0%B0%D0%BB%D0%B8%D1%87%D0%B8%D0%B8%20%D0%BD%D0%BE%D0%BC%D0%B5%D1%80%D0%BE%D0%B2."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa"
            >
              {WA_ICON}
              Написать в WhatsApp
            </a>
          </div>

          {/* Form */}
          <div className="booking-form">
            <h3 className="booking-h3">Быстрое бронирование</h3>
            <p className="form-sub">Заполните форму — ответим в WhatsApp</p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">Ваше имя</label>
                <input
                  id="name" name="name" type="text"
                  className="form-input" placeholder="Введите имя"
                  value={form.name} onChange={handleChange} required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="phone">Телефон / WhatsApp</label>
                <input
                  id="phone" name="phone" type="tel"
                  className="form-input" placeholder="+996 XXX XXX XXX"
                  value={form.phone} onChange={handleChange} required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="checkIn">Дата заезда</label>
                  <input
                    id="checkIn" name="checkIn" type="date"
                    className="form-input"
                    value={form.checkIn} onChange={handleChange} required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="checkOut">Дата выезда</label>
                  <input
                    id="checkOut" name="checkOut" type="date"
                    className="form-input"
                    value={form.checkOut} onChange={handleChange} required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="guests">Количество гостей</label>
                <select
                  id="guests" name="guests"
                  className="form-input"
                  value={form.guests} onChange={handleChange}
                >
                  <option value="1">1 гость</option>
                  <option value="2">2 гостя</option>
                  <option value="3">3 гостя</option>
                  <option value="4">4 гостя</option>
                  <option value="5+">5+ гостей</option>
                </select>
              </div>

              <button type="submit" className="form-submit">
                Отправить запрос через WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
