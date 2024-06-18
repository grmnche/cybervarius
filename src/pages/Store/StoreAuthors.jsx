import React, { Fragment } from 'react';
import 'aos/dist/aos.css';
import { NavLink } from 'react-router-dom';

export const StoreAuthors = () => {
  return (
    <div className="store-authors-page">
      <div
        data-aos="fade-up"
        className="author cyber-text-container"
      >
        <NavLink to="/booksChernyshev" end>
          <img
            className="mx-auto w-24 lg:w-32"
            src="./assets/images/chernyshev.png"
            alt="..."
          />

          <p
            data-text="Этот свет никогда не был чем-то хорошим."
            className="author__quote p-3 font-thin text-2xl lg:text-3xl"
          >
            Этот свет никогда не был чем-то хорошим.
          </p>
        </NavLink>
      </div>

      <div
        data-aos="fade-up"
        className="author cyber-text-container"
      >
        <NavLink to="/booksHolmov" end>
          <img
            className="holmov-img mx-auto w-24 lg:w-32"
            src="./assets/images/holmov.png"
            alt="..."
          />

          <p
            data-text="Я - как живая. Просто не отличить."
            className="author__quote p-3 font-thin text-2xl lg:text-3xl"
          >
            Я - как живая. Просто не отличить.
          </p>
        </NavLink>
      </div>
    </div>
  );
};
