import React from 'react';
import PropTypes from 'prop-types';
import 'aos/dist/aos.css';
import { Book } from './modules/Book.jsx';

export function StoriesHolmov(props) {
  const books = props.bookCards;

  return (
    <div className="book-list__outer">
      <div className="book-list">
        {books.map((book, idx) => (
          <Book key={idx} index={idx} book={book} />
        ))}
      </div>
    </div>
  );
}

StoriesHolmov.propTypes = {
  bookCards: PropTypes.arrayOf(PropTypes.object).isRequired,
};
