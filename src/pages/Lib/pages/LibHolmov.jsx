import React, { Fragment } from 'react';
import { StoriesHolmov } from '../../../components/BooksStories/StoriesHolmov.jsx';
import { useSelector } from 'react-redux';

export const LibHolmov = () => {
  const authorLibrary = useSelector((state) => state.library.stories.holmov);

  return (
    <Fragment>
      <main className="lib-page">
        <StoriesHolmov bookCards={authorLibrary} />
      </main>
    </Fragment>
  );
};
