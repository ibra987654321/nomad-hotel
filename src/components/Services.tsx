import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import OrnamentDivider from './OrnamentDivider';

const SERVICES = [
  { ico: '🍽️', name: 'Завтрак включён',   desc: 'Сытный халяль-завтрак каждое утро без доплат' },
  { ico: '📶', name: 'Бесплатный Wi-Fi',   desc: 'Высокоскоростной интернет во всех зонах отеля' },
  { ico: '👕', name: 'Прачечная',          desc: 'Стирка и глажка вещей по запросу гостя' },
  { ico: '☪️', name: 'Халяль-питание',    desc: 'Все блюда приготовлены по стандарту халяль' },
  { ico: '🕐', name: 'Стойка 24/7',        desc: 'Круглосуточная поддержка и помощь гостям' },
];

const Services: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header text-center">
          <OrnamentDivider />
          <h2 className="section-title">Наши услуги</h2>
          <p className="section-subtitle">Всё для вашего удобства и комфорта</p>
        </div>

        <div ref={ref} className={`services-grid fade-in${isVisible ? ' visible' : ''}`}>
          {SERVICES.map(({ ico, name, desc }) => (
            <div key={name} className="service-card">
              <div className="service-ico">{ico}</div>
              <h3 className="service-name">{name}</h3>
              <p className="service-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
