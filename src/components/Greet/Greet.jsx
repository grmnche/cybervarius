import React from 'react';

export default function Greet() {
  return (
    <div data-aos="fade-up" className="greet cyber-text-container">
      <img
        className='greet__logo-text'
        src="./assets/images/icons/logo-text.svg"
        alt=""
      />

      <p
        data-text="Писатель 2.0"
        className="cyber-text glitch layers w-11/12 lg:w-2/3 mt-8 tracking-widest font-thin text-xl md:text-2xl lg:text-3xl"
      >
        Писатель 2.0
      </p>

      <p
        data-text="Мы создаём непохожую литературу. Мы пишем - вы читаете."
        className="cyber-text glitch layers w-11/12 lg:w-2/3 mt-4 tracking-widest font-thin text-xl md:text-2xl lg:text-3xl"
      >
        Мы создаём непохожую литературу. Мы пишем - вы читаете.
      </p>
    </div>
  );
}
