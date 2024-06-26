import React, { Fragment } from 'react';

import { StoriesChernyshev } from '../../../components/BooksStories/StoriesChernyshev.jsx';
import 'aos/dist/aos.css';
import { useSelector } from 'react-redux';

export const LibChernyshev = () => {
  const authorLibrary = useSelector(
    (state) => state.library.stories.chernyshev,
  );

  return (
    <Fragment>
      <main className="lib-page">
        <StoriesChernyshev bookCards={authorLibrary} />
      </main>
    </Fragment>
  );
};
