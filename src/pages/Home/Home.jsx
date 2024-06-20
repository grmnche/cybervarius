import React, { Fragment, useEffect } from 'react';
import Greet from '../../components/Greet/Greet.jsx';
import Footer from '../../components/Footer/Footer.jsx';

export function Home() {
  return (
    <Fragment>
      <div className='home-page'>
        <Greet />
        
        <Footer />
      </div>
    </Fragment>
  );
}
