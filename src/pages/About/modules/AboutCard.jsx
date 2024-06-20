import React from 'react';

export const AboutCard = ({ card, handleClick }) => {
  return (
    <div className="about-card">
      <p onClick={handleClick} className="about-card__title text-center">
        {card.name}
      </p>

      <p className="about-card__descr hide p-6 lg:p-12 my-8 font-thin">
        {card.description}
      </p>
    </div>
  );
};
