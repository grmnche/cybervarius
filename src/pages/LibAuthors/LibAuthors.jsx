import React, { Fragment } from 'react';
import 'aos/dist/aos.css';
import { NavLink } from 'react-router-dom';

export const LibAuthors = () => {
  return (
    <Fragment>
      <div className="lib-authors">
        <div
          data-aos="fade-up"
          className="lib-authors__author cyber-text-container"
        >
          <NavLink to="/libChernyshev" end>
            <img
              className="chernyshev-img mx-auto w-32 lg:w-48"
              src="./assets/images/chernyshev.png"
              alt="..."
            />

            <div>
              <p
                data-text="Герман Чернышёв"
                className="lib-authors__title authors-name-chernyshev cyber-text glitch layers"
              >
                Герман Чернышёв
              </p>
            </div>
          </NavLink>

          <div className="mt-6 lg:mt-12">
            <span className="lib-authors__descr">
              Беспросветный мир, предоставленный самому себе. Людям не на кого
              надеяться, они привыкли сами улаживать свои дела и не лезть в
              чужие. Ни добро, ни зло не обязательны. Королевства погрязли в
              хаосе. И над всем маячат громадные и молчаливые Корни…
            </span>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="lib-authors__author cyber-text-container"
        >
          <NavLink to="/libHolmov" end>
            <div className="w-full author-holmov">
              <img
                className="holmov-img mx-auto w-32 lg:w-48"
                src="./assets/images/holmov.png"
                alt="..."
              />

              <div className="w-full">
                <p
                  data-text="Александр Холмов"
                  className="lib-authors__title cyber-text glitch layers mx-auto mb-4"
                >
                  Александр Холмов
                </p>
              </div>
            </div>
          </NavLink>

          <div className="mt-6 lg:mt-12 w-full h-100% items-start">
            <span className="lib-authors__descr">
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
