import React from 'react';

export const AboutCard = ({ index, cardsAbout, handleClick }) => {
  return (
    <div className="about-card">
      <p onClick={handleClick} className="about-card__title text-center">
        {cardsAbout[index].name}
      </p>

      <p className="about-card__descr hide p-6 lg:p-12 my-8 font-thin">
        {cardsAbout[index].description}
      </p>
    </div>
  );
};
