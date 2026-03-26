import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import OrnamentDivider from './OrnamentDivider';

interface Room {
  name: string;
  icon: string;
  desc: string;
  tags: string[];
  price: number;
  featured?: boolean;
}

const ROOMS: Room[] = [
  {
    name: 'Стандарт',
    icon: '🛏️',
    desc: 'Уютный номер для одного гостя со всем необходимым для комфортного отдыха.',
    tags: ['Wi-Fi', 'TV', 'Завтрак', 'Душ'],
    price: 3000,
  },
  {
    name: 'Двухместный',
    icon: '🛎️',
    desc: 'Просторный номер для пары или двух гостей. Двуспальная или раздельные кровати.',
    tags: ['Wi-Fi', 'TV', 'Завтрак', 'Ванная', 'Холодильник'],
    price: 4500,
    featured: true,
  },
  {
    name: 'Люкс',
    icon: '✨',
    desc: 'Комфортабельный люкс с улучшенным интерьером и расширенным набором услуг.',
    tags: ['Wi-Fi', 'TV', 'Завтрак', 'Джакузи', 'Мини-бар', 'Халат'],
    price: 7000,
  },
];

const WA_ROOM = (name: string) =>
  `https://wa.me/996500214000?text=${encodeURIComponent(
    `Здравствуйте! Хочу забронировать номер «${name}».`
  )}`;

const Rooms: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="rooms" id="rooms">
      <div className="container">
        <div className="section-header text-center">
          <OrnamentDivider />
          <h2 className="section-title">Номера и цены</h2>
          <p className="section-subtitle">Выберите подходящий вариант размещения</p>
        </div>

        <div ref={ref} className={`rooms-grid fade-in${isVisible ? ' visible' : ''}`}>
          {ROOMS.map((room) => (
            <div key={room.name} className={`room-card${room.featured ? ' featured' : ''}`}>
              {room.featured && (
                <div className="room-popular-badge">Популярный</div>
              )}

              <div className="room-img">
                <div className="room-img-pattern" />
                <span className="room-img-icon">{room.icon}</span>
              </div>

              <div className="room-body">
                <h3 className="room-name">{room.name}</h3>
                <p className="room-desc">{room.desc}</p>

                <div className="room-tags">
                  {room.tags.map((t) => (
                    <span key={t} className="room-tag">{t}</span>
                  ))}
                </div>

                <div className="room-footer">
                  <div>
                    <div className="room-price-from">от</div>
                    <div className="room-price-val">
                      {room.price.toLocaleString('ru-RU')} сом
                    </div>
                    <div className="room-price-per">/ ночь</div>
                  </div>
                  <a href={WA_ROOM(room.name)} target="_blank" rel="noopener noreferrer">
                    <button className="btn-dark">Забронировать</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
