import React from 'react';
import { ReactReader } from 'react-reader';

export const Reader = ({ book, closeBtnClick }) => {
  return (
    <div className="reader">
      <button className="reader__close-btn" onClick={closeBtnClick}>
        <img src="./assets/images/icons/cancel-dark.svg" alt="Close" />
      </button>

      <ReactReader url={book.url} title={book.title} />
    </div>
  );
};
