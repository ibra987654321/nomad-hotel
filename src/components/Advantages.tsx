import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import OrnamentDivider from './OrnamentDivider';

const ADVANTAGES = [
  {
    ico: '☪️',
    title: 'Халяль-стандарт',
    desc: 'Строгое соблюдение халяль во всём: питание, атмосфера, обслуживание. Сертифицированная кухня и молельная комната.',
  },
  {
    ico: '📍',
    title: 'Центр Бишкека',
    desc: 'Удобное расположение на ул. Гагарина, 10. Рядом торговые центры, рестораны, мечети и городские достопримечательности.',
  },
  {
    ico: '🎁',
    title: 'Акция: 10-й визит',
    desc: 'Каждое десятое проживание — совершенно бесплатно. Копите визиты и наслаждайтесь нашей программой лояльности.',
  },
  {
    ico: '👨‍👩‍👧',
    title: 'Семейная атмосфера',
    desc: 'Тихая и безопасная среда для всей семьи. Особое внимание — комфорту детей и соблюдению традиций.',
  },
  {
    ico: '⭐',
    title: 'Рейтинг 4.6 на 2ГИС',
    desc: 'Более 234 искренних отзывов от довольных гостей. Качество сервиса подтверждено реальным опытом.',
  },
  {
    ico: '💰',
    title: 'Честные цены',
    desc: 'От 3 000 сом в сутки с завтраком в стоимости. Прозрачное ценообразование без скрытых платежей.',
  },
];

const Advantages: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="advantages" id="advantages">
      <div className="advantages-pattern" />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-header text-center">
          <OrnamentDivider />
          <h2 className="section-title section-title--light">Почему выбирают нас</h2>
          <p className="section-subtitle section-subtitle--light">
            6 причин остановиться в Nomad Halal Hotel
          </p>
        </div>

        <div ref={ref} className={`advantages-grid fade-in${isVisible ? ' visible' : ''}`}>
          {ADVANTAGES.map(({ ico, title, desc }, i) => (
            <div key={title} className="adv-card">
              <span className="adv-num">{String(i + 1).padStart(2, '0')}</span>
              <div className="adv-ico">{ico}</div>
              <h3 className="adv-title">{title}</h3>
              <p className="adv-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
