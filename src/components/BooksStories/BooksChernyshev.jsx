import React from 'react';
import PropTypes from 'prop-types';
import 'aos/dist/aos.css';
import { Book } from './modules/Book.jsx';

export function BooksChernyshev(props) {
  const bookCards = props.bookCards;

  return (
    <div className="book-list__outer mx-auto w-11/12">
      <div className="book-list w-11/12">
        {bookCards.map((card, idx) => (
          <Book key={idx} index={idx} props={props} />
        ))}
      </div>
    </div>
  );
}

BooksChernyshev.propTypes = {
  bookCards: PropTypes.arrayOf(PropTypes.object).isRequired,
};