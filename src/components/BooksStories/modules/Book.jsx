import React, { useRef, useEffect, useState } from 'react';
import { Reader } from '../../../components/Reader/Reader.jsx';
import { ReactReader } from 'react-reader';

export function Book({ index, book }) {
  const ref = useRef(null);
  const refPrev = useRef(null);
  const [isReaderActive, setIsReaderActive] = useState(false);

  const handleReader = () => {
    setIsReaderActive(!isReaderActive);
    console.log(book.url);
  };

  const closeBtnClick = () => {
    setIsReaderActive(false);
  };

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
        <p className="book-card__title">{book.title}</p>

        <p className="book-card__series">{book.series}</p>

        <p className="book-card__number">{book.bookNumber}</p>
      </div>

      <div
        ref={refPrev}
        className={`book-card__preview lg:right-8 p-4 lg:p-8 preview${index} hide`}
      >
        <img
          src={book.image}
          className="book-card__image mx-auto"
        />

        <button
          onClick={handleReader}
          className="book-card__btn mt-4 lg:mt-8 p-1 lg:p-2"
        >
          Читать
        </button>

        {isReaderActive ? (
          <Reader book={book} closeBtnClick={closeBtnClick} />
        ) : null}

        {book.series ? (
          <div className="font-thin mt-4 mx-auto">
            <span className="book-card__series-header">Цикл: </span>

            <span className="book-card__series">{book.series}</span>
          </div>
        ) : null}

        <p className="book-card__number font-thin mt-4">{book.bookNumber}</p>

        <p className="book-card__descr mt-6 font-thin">{book.description}</p>

        <p className="book-card__quote w-full italic font-thin mt-8 mx-auto">
          {book.quote}
        </p>
      </div>
    </div>
  );
}
