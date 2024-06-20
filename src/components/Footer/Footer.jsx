import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <a className="footer__icon" href="https://t.me/cybervarius">
        <img
          className="w-6 inline"
          src="./assets/images/icons/tg.png"
          alt="telegram"
        />
      </a>

      <p className="footer__copyright">
        © 2024 дизайн и разработка
        <a href="https://github.com/grmnche">
          <strong> web-dragon</strong>
        </a>
      </p>
    </footer>
  );
}
