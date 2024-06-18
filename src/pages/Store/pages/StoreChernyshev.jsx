import React, { Fragment } from 'react';
import { BooksChernyshev } from '../../../components/BooksStories/BooksChernyshev.jsx';
import { useSelector } from 'react-redux';

export const BookStoreChernyshev = () => {
  const authorLibrary = useSelector((state) => state.library.books.chernyshev);

  return (
    <main className="store-page">
      <BooksChernyshev bookCards={authorLibrary} />
    </main>
  );
};
