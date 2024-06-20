import React, { Fragment } from 'react';
import 'aos/dist/aos.css';
import { NavLink } from 'react-router-dom';

export const LibAuthors = () => {
  return (
    <Fragment>
      <main className="lib-authors-page">
        <div className="lib-authors">
          <div data-aos="fade-up" className="author cyber-text-container">
            <NavLink to="/libChernyshev" end>
              <img
                className="author__preview mx-auto"
                src="./assets/images/chernyshev.png"
                alt="..."
              />

              <p
                data-text="Герман Чернышёв"
                className="author__title authors-name-chernyshev cyber-text glitch layers"
              >
                Герман Чернышёв
              </p>
            </NavLink>

            <p className="author__descr mt-6 lg:mt-12">
              Беспросветный мир, предоставленный самому себе. Людям не на кого
              надеяться, они привыкли сами улаживать свои дела и не лезть в
              чужие. Ни добро, ни зло не обязательны. Королевства погрязли в
              хаосе. И над всем маячат громадные и молчаливые Корни…
            </p>
          </div>

          <div data-aos="fade-up" className="author cyber-text-container">
            <NavLink to="/libHolmov" end>
              <div className="w-full author-holmov">
                <img
                  className="author__preview mx-auto w-32 lg:w-48"
                  src="./assets/images/holmov.png"
                  alt="..."
                />

                <p
                  data-text="Александр Холмов"
                  className="author__title cyber-text glitch layers mx-auto mb-4"
                >
                  Александр Холмов
                </p>
              </div>
            </NavLink>

            <p className="author__descr mt-6 lg:mt-12 w-full h-100% items-start">
              2204 год. К туманным берегам Англии приближается корабль…»
              «Стоп-стоп. Уже начинается путаница. Откуда вы знаете, что это
              Англия? Думаете – если туман, то там непременно скалы, вереск, а
              дальше Темза и овсянка, сэр? А может, там радиоактивная пустыня и
              злобные роботы бегают?
            </p>
          </div>
        </div>
      </main>
    </Fragment>
  );
};
