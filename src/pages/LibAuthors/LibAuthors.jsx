import React, { Fragment } from 'react';
import 'aos/dist/aos.css';
import { NavLink } from 'react-router-dom';

export const LibAuthors = () => {
  return (
    <Fragment>
      <div className="lg:mx-32 mt-16 lg:h-screen lg:flex lg:justify-center lg:items-end">
        <div
          data-aos="fade-up"
          className="chernyshev cyber-text-container my-20 mx-auto lg:mx-10 w-11/12 lg:w-1/2"
        >
          <NavLink to="/libChernyshev" end>
            <div className="author w-full author-chernyshev">
              <img
                className="chernyshev-img mx-auto w-32 lg:w-48"
                src="./assets/images/chernyshev.png"
                alt="..."
              />
              <div className="w-full">
                <p
                  data-text="Герман Чернышёв"
                  className="authors-name authors-name-chernyshev cyber-text glitch layers mx-auto tracking-widest mb-4 font-thin text-center text-2xl md:text-3xl lg:text-4xl"
                >
                  Герман Чернышёв
                </p>
              </div>
            </div>
          </NavLink>

          <div className="mt-6 lg:mt-12 w-full h-100% items-start">
            <span className="tracking-widest font-thin text-lg md:text-xl lg:text-xl">
              Беспросветный мир, предоставленный самому себе. Людям не на кого
              надеяться, они привыкли сами улаживать свои дела и не лезть в
              чужие. Ни добро, ни зло не обязательны. Королевства погрязли в
              хаосе. И над всем маячат громадные и молчаливые Корни…
            </span>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="holmov cyber-text-container my-20 my-20 mx-auto lg:mx-10 w-11/12 lg:w-1/2"
        >
          <NavLink to="/libHolmov" end>
            <div className="author w-full author-holmov">
              <img
                className="holmov-img mx-auto w-32 lg:w-48"
                src="./assets/images/holmov.png"
                alt="..."
              />

              <div className="w-full">
                <p
                  data-text="Александр Холмов"
                  className="authors-name cyber-text glitch layers mx-auto mb-4 tracking-widest font-thin text-center text-2xl md:text-3xl lg:text-4xl"
                >
                  Александр Холмов
                </p>
              </div>
            </div>
          </NavLink>

          <div className="mt-6 lg:mt-12 w-full h-100% items-start">
            <span className="tracking-widest font-thin text-lg md:text-xl lg:text-xl">
              2204 год. К туманным берегам Англии приближается корабль…»
              «Стоп-стоп. Уже начинается путаница. Откуда вы знаете, что это
              Англия? Думаете – если туман, то там непременно скалы, вереск, а
              дальше Темза и овсянка, сэр? А может, там радиоактивная пустыня и
              злобные роботы бегают?
            </span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
