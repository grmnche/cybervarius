import React, { Fragment } from 'react';

import 'aos/dist/aos.css';
import { NavLink } from 'react-router-dom';
import '../../assets/images/chernyshev.png';
import '../../assets/images/holmov.png';

export const BookAuthors = () => {
  return (
    <Fragment>
      <div className="authors mt-10 md:mt-4 lg:mt-0 mx-auto w-11/12 lg:w-full h-screen grid content-center lg:flex lg:justify-center lg:items-center">
        <div
          data-aos="fade-up"
          className="books-chernyshev cyber-text-container my-14 lg:mx-8 w-full lg:w-2/5"
        >
          <NavLink to="/booksChernyshev" end>
            <div className="author author-chernyshev">
              <img
                className="chernyshev-img mx-auto w-24 lg:w-32"
                src="./assets/images/chernyshev.png"
                alt="..."
              />
              <p
                data-text="Этот свет никогда не был чем-то хорошим."
                className="book-store-quote p-3 font-thin text-2xl lg:text-3xl"
              >
                Этот свет никогда не был чем-то хорошим.
              </p>
            </div>
          </NavLink>
        </div>

        <div
          data-aos="fade-up"
          className="books-holmov cyber-text-container my-14 lg:mx-8 w-full lg:w-2/5"
        >
          <NavLink to="/booksHolmov" end>
            <div className="author author-holmov">
              <img
                className="holmov-img mx-auto w-24 lg:w-32"
                src="./assets/images/holmov.png"
                alt="..."
              />

              <p
                data-text="Я - как живая. Просто не отличить."
                className="book-store-quote p-3 font-thin text-2xl lg:text-3xl"
              >
                Я - как живая. Просто не отличить.
              </p>
            </div>
          </NavLink>
        </div>
      </div>
    </Fragment>
  );
};
