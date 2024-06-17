import React from 'react';

export default function Footer() {
  return (
    <div className="footer mb-6 mt-auto">
      <a className="footer__icon" href="https://t.me/cybervarius">
        <img className="w-6 inline" src="./assets/images/tg-clean.png" alt="" />
      </a>

      <p className="footer__copyright text-base pt-4 lg:pt-6">
        © 2024 web-dragon
      </p>
    </div>
  );
}
