import React, { useRef, useEffect } from 'react';

export function Book({ index, props }) {
  const ref = useRef(null);
  const refPrev = useRef(null);

  useEffect(() => {
    const cards = document.querySelectorAll('.book-card__body');

    cards.forEach((card) => {
      card.onclick = clickP;
    });

    function clickP(evt) {
      cards.forEach((card) => {
        card.classList.remove('active-scale');
        card.parentNode.lastChild.classList.add('hide');
      });

      evt.target.classList.toggle('active-scale');
    }
  });

  const handleClick = (event) => {
    if (event.currentTarget.classList.contains('active-scale')) {
      event.currentTarget.parentNode.lastChild.classList.remove('hide');
    } else {
      event.currentTarget.parentNode.lastChild.classList.add('hide');
    }
  };

  return (
    <div className="book-card">
      <div
        ref={ref}
        onClick={handleClick}
        type="button"
        className="book-card__body sm:block p-3 lg:p-6"
      >
        <p className='book-card__title'>{props.bookCards[index].title}</p>

        <div className="book-card__additional">
          <span className="book-card__series text-lg lg:text-xl">
            {props.bookCards[index].series}
          </span>

          <span className="book-card__number text-lg lg:text-xl">
            {props.bookCards[index].bookNumber}
          </span>
        </div>
      </div>

      <div
        ref={refPrev}
        className={`book-card__preview lg:right-8 p-4 lg:p-8 preview${index} hide`}
      >
        <img
          src={props.bookCards[index].image}
          className="book-card__image w-40 lg:w-72 mx-auto"
        />

        <div className="book-card__btn w-full mt-4 lg:mt-8 p-1 lg:p-2 text-2xl lg:text-3xl mx-auto">
          Читать фрагмент
        </div>

        <p className="font-thin mt-4 mx-auto">
          <span className="book-card__series-header text-xl lg:text-2xl">
            Цикл:
          </span>

          <span className="book-card__series text-2xl lg:text-3xl">
            {props.bookCards[index].series}
          </span>
        </p>

        <p className="book-card__number font-thin mt-4 text-2xl lg:text-3xl mx-auto">
          {props.bookCards[index].bookNumber}
        </p>

        <p className="mt-6 font-thin text-xl lg:text-2xl">
          {props.bookCards[index].description}
        </p>

        <div className="book-card__quote w-full italic font-thin mt-8 text-xl mx-auto">
          {props.bookCards[index].quote}
        </div>
      </div>
    </div>
  );
}
