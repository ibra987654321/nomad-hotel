import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import OrnamentDivider from './OrnamentDivider';

const REVIEWS = [
  {
    initial: 'А',
    name: 'Айгуль М.',
    city: 'Ош',
    date: 'Февраль 2025',
    text: 'Останавливались с семьёй на 3 дня. Очень чисто, персонал доброжелательный. Завтрак был вкусный и сытный. Халяль для нас — это важно, и здесь это строго соблюдается. Обязательно вернёмся!',
    stars: 5,
  },
  {
    initial: 'Б',
    name: 'Бахтиёр Р.',
    city: 'Ташкент',
    date: 'Январь 2025',
    text: 'Приехал в командировку. Отель нашёл по рекомендации коллег. Очень доволен: тихо, Wi-Fi хороший, номер уютный. Расположение удобное — всё рядом. Ценник приятный за такое качество!',
    stars: 5,
  },
  {
    initial: 'М',
    name: 'Малика К.',
    city: 'Алматы',
    date: 'Март 2025',
    text: 'Искала халяль-отель в Бишкеке и нашла именно то, что нужно. Персонал очень внимательный, всегда готовы помочь. Понравилась программа лояльности — 10-й визит бесплатно. Рекомендую всем!',
    stars: 5,
  },
];

const Reviews: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="reviews" id="reviews">
      <div className="container">
        <div className="section-header text-center">
          <OrnamentDivider />
          <h2 className="section-title">Отзывы гостей</h2>
          <p className="section-subtitle">Нам доверяют путешественники из разных городов</p>
        </div>

        <div ref={ref} className={`reviews-grid fade-in${isVisible ? ' visible' : ''}`}>
          {REVIEWS.map(({ initial, name, city, date, text, stars }) => (
            <div key={name} className="review-card">
              <div className="review-qmark">"</div>
              <div className="review-stars">{'★'.repeat(stars)}</div>
              <p className="review-text">{text}</p>
              <div className="review-author">
                <div className="review-avatar">{initial}</div>
                <div>
                  <div className="review-name">{name}</div>
                  <div className="review-meta">{city} · {date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="reviews-note">
          Рейтинг <strong>4.6 / 5</strong> на основе <strong>234 отзывов</strong> на платформе 2ГИС
        </p>
      </div>
    </section>
  );
};

export default Reviews;
