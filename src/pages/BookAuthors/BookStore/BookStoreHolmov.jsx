import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { BooksHolmov } from '../../../components/BooksStories/BooksHolmov.jsx';
import 'aos/dist/aos.css';

export const BookStoreHolmov = () => {
  const authorLibrary = useSelector((state) => state.library.books.holmov);

  return (
    <Fragment>
      <BooksHolmov bookCards={authorLibrary} />
    </Fragment>
  );
};
