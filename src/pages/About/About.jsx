import React, { Fragment, useEffect } from 'react';
import { AboutCard } from './modules/AboutCard.jsx';

export const About = () => {
  const cardsAbout = [
    {
      id: 1,
      name: 'Авторы',
      description:
        'На Кибервариусе мы представляем Германа Чернышёва и Александра Холмова. Это официальный ресурс авторов.',
    },
    {
      id: 2,
      name: 'Библиотека',
      description:
        'Все книги в библиотеке Кибервариуса можно читать свободно и бесплатно. Библиотека регулярно пополняется. Новые произведения по возможности сразу размещаются здесь.',
    },
    {
      id: 3,
      name: 'Книжная лавка',
      description:
        'В книжной лавке Кибервариуса находятся все книги авторов, изданные в электронном виде и доступные к покупке на сегодня. Мы предлагаем их вам по самой низкой цене. Приобретая книги здесь, вы платите напрямую авторам. Мы гарантируем полную безопасность и удобство заказа.',
    },
  ];

  useEffect(() => {
    const cardsAbout = document.querySelectorAll('.about-card__title');

    cardsAbout.forEach((cardAbout) => {
      cardAbout.onclick = clickP;
    });

    function clickP(evt) {
      cardsAbout.forEach((cardAbout) => {
        cardAbout.classList.remove('about-card_active');
        cardAbout.parentNode.lastChild.classList.add('hide');
      });
      evt.target.classList.toggle('about-card_active');
    }
  });

  const handleClick = (event) => {
    if (event.currentTarget.classList.contains('about-card_active')) {
      event.currentTarget.parentNode.lastChild.classList.remove('hide');
    } else {
      event.currentTarget.parentNode.lastChild.classList.add('hide');
    }
  };

  return (
    <Fragment>
      <main data-aos="fade-up" className="about-page">
        <div className="about">
          {cardsAbout.map((card, idx) => {
            return (
              <AboutCard index={idx} card={card} handleClick={handleClick} />
            );
          })}
        </div>

        <div className="other">
          <div className="other__container">
            <p className="other__title">Как купить</p>

            <p className="other__descr font-thin">
              Чтобы приобрести книгу, просто напишите на order@cybervarius.ru.
              Укажите название. Вам придет ответное письмо с номером карты для
              перевода. После оплаты книга будет выслана на ваш E-mail.
            </p>
          </div>

          <div className="other__container">
            <p className="other__title">О ценах и скидках</p>

            <p className="other__descr font-thin">
              Книги продаются без посредничества издательских платформ. Мы не
              используем платежных систем. На некоторые книги вы можете
              назначить свою цену. Возможны индивидуальные скидки.
            </p>
          </div>

          <div className="other__container">
            <p className="other__title">Форматы электронных книг</p>

            <p className="other__descr font-thin">
              Мы высылаем книги в формате PDF, а также по вашему запросу - в
              любых популярных форматах — EPUB, MOBI, FB2 и др. Если книга не
              открылась на вашем устройстве, напишите на order@cybervarius.ru
              или на support@cybervarius.ru, мы поможем.
            </p>
          </div>
        </div>
      </main>
    </Fragment>
  );
};
