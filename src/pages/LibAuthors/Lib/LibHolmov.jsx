import React, { Fragment } from 'react';
import { StoriesHolmov } from '../../../components/BooksStories/StoriesHolmov.jsx';
import { useSelector } from 'react-redux';

export const LibHolmov = () => {
  const authorLibrary = useSelector((state) => state.library.stories.holmov);

  return (
    <Fragment>
      <div className="bg"></div>
      <div className="blur"></div>

      <StoriesHolmov bookCards={authorLibrary} />
    </Fragment>
  );
};
