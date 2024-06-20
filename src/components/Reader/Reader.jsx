import React from 'react';
import { ReactReader, ReactReaderStyle } from 'react-reader';

export const Reader = ({ book, closeBtnClick }) => {
  const url = book.url;

  const ownStyles = {
    ...ReactReaderStyle,
    arrow: {
      ...ReactReaderStyle.arrow,
      color: 'red',
      width: '200px',
    },
  };

  return (
    <div className="reader">
      <button className='reader__close-btn' onClick={closeBtnClick}>
        <img src="./assets/images/icons/cancel-dark.svg" alt="Close" />
      </button>

      <ReactReader url={url} title={book.title} styles={ownStyles} />
    </div>
  );
};
