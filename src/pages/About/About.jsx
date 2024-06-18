import React, { Fragment, useEffect } from 'react';

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
    {
      id: 3,
      name: 'Книжная лавка',
      description:
        'В книжной лавке Кибервариуса находятся все книги авторов, изданные в электронном виде и доступные к покупке на сегодня. Мы предлагаем их вам по самой низкой цене. Приобретая книги здесь, вы платите напрямую авторам. Мы гарантируем полную безопасность и удобство заказа.',
    },
  ];

  const cardsAboutOther = [
    {
      id: 1,
      name: 'Как купить',
      description:
        'Чтобы приобрести книгу, просто напишите на order@cybervarius.ru. Укажите название. Вам придет ответное письмо с номером карты для перевода. После оплаты книга будет выслана на ваш E-mail.',
    },
    {
      id: 2,
      name: 'О ценах и скидках',
      description:
        'Книги продаются без посредничества издательских платформ. Мы не используем платежных систем. На некоторые книги вы можете назначить свою цену. Возможны индивидуальные скидки.',
    },
    {
      id: 3,
      name: 'Форматы электронных книг',
      description:
        'Мы высылаем книги в формате PDF, а также по вашему запросу - в любых популярных форматах — EPUB, MOBI, FB2 и др. Если книга не открылась на вашем устройстве, напишите на order@cybervarius.ru или на support@cybervarius.ru, мы поможем.',
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

  function AboutCard({ index }) {
    return (
      <div className="about-card">
        <div
          onClick={handleClick}
          className="about-card__title p-3 text-center text-3xl"
        >
          {cardsAbout[index].name}
        </div>
        <p className="about-card__descr  hide p-6 lg:p-12 my-8 font-thin">
          {cardsAbout[index].description}
        </p>
      </div>
    );
  }

  return (
    <Fragment>
      <main data-aos="fade-up" className="about-page">
        <div className="about">
          <AboutCard index={0} />
          <AboutCard index={1} />
          <AboutCard index={2} />
        </div>

        <div className="other">
          <div className='other__container'>
            <p className="other__title">
              Как купить
            </p>

            <p className="other__descr font-thin">
              Чтобы приобрести книгу, просто напишите на order@cybervarius.ru.
              Укажите название. Вам придет ответное письмо с номером карты для
              перевода. После оплаты книга будет выслана на ваш E-mail.
            </p>
          </div>

          <div className='other__container'>
            <p className="other__title">
              О ценах и скидках
            </p>

            <p className="other__descr font-thin">
              Книги продаются без посредничества издательских платформ. Мы не
              используем платежных систем. На некоторые книги вы можете
              назначить свою цену. Возможны индивидуальные скидки.
            </p>
          </div>

          <div className='other__container'>
            <p className="other__title">
              Форматы электронных книг
            </p>

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
