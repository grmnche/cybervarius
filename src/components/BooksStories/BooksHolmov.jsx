import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import 'aos/dist/aos.css';
import { Book } from './modules/Book.jsx';
export function BooksHolmov(props) {
  const bookCards = props.bookCards;

  return (
    <div className="book-list__outer">
      <div className="book-list">
        {bookCards.map((card, idx) => (
          <Book key={idx} index={idx} props={props} />
        ))}
      </div>
    </div>
  );
}

BooksHolmov.propTypes = {
  bookCards: PropTypes.arrayOf(PropTypes.object).isRequired,
};
