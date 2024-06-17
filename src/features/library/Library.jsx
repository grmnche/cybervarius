import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addStory, showStories } from './librarySlice.js';

export function Library() {
  const library = useSelector((state) => state.library.stories);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(addStory())}>Добавить историю</button>

      <div>
        <span>Библиотека:</span>

        {library}
      </div>
    </div>
  );
}
