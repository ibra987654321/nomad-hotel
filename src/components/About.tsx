import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import OrnamentDivider from './OrnamentDivider';

const About: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="about" id="about">
      <div className="container">
        <div ref={ref} className={`about-grid fade-in${isVisible ? ' visible' : ''}`}>
          {/* Visual */}
          <div className="about-visual">
            <div className="about-img-wrap">
              <span className="about-img-emoji">🕌</span>
            </div>
            <div className="about-badge">
              <span className="badge-stars">★★★★★</span>
              <span className="badge-num">4.6</span>
              <span className="badge-src">2ГИС</span>
            </div>
          </div>

          {/* Content */}
          <div className="about-content">
            <OrnamentDivider />
            <h2>О нашей гостинице</h2>
            <p className="about-tagline">
              «Конок болуп кел, өзүңдүкүндөй сез» — приходи гостем, чувствуй себя как дома
            </p>

            <p className="about-text">
              Nomad Halal Hotel — это больше, чем просто гостиница. Это пространство,
              где вы найдёте покой, комфорт и заботу. Мы создали место, где каждый
              мусульманский путешественник чувствует себя в полной безопасности и
              в соответствии с нормами халяль.
            </p>
            <p className="about-text">
              Расположенная в самом центре Бишкека на ул. Гагарина, 10, гостиница
              сочетает традиционное кыргызское гостеприимство с современным уровнем
              сервиса. Только халяль-еда, тихая атмосфера и семейный подход к каждому гостю.
            </p>

            <div className="about-features">
              {[
                { ico: '☪️', label: 'Халяль-стандарт' },
                { ico: '📍', label: 'Центр Бишкека' },
                { ico: '🍳', label: 'Завтрак включён' },
                { ico: '🛡️', label: 'Безопасно для семьи' },
                { ico: '📶', label: 'Бесплатный Wi-Fi' },
                { ico: '🎁', label: '10-й визит в подарок' },
              ].map(({ ico, label }) => (
                <div key={label} className="about-feat">
                  <div className="about-feat-ico">{ico}</div>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
