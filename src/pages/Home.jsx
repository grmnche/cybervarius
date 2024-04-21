import React, { Fragment, useEffect } from 'react';
import Greet from '../components/Greet.jsx';

export function Home() {
  return (
    <Fragment>
      <div className='home-page'>
        <Greet />
      </div>
    </Fragment>
  );
}
