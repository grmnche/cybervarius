import React from 'react';
import '../../images/tg-clean.png';

export default function Footer() {
  return (
    <div className="mt-auto w-11/12 lg:w-11/12 mx-auto lg:ml-10">
      <div className="mb-6 mt-12">
        <a className="telegram" href="https://t.me/cybervarius">
          <img className="w-6 inline" src="./images/tg-clean.png" alt="" />
        </a>
        <p className="copyright text-base lg:text-lg pt-4 lg:pt-6">
          © 2023 Герман Чернышёв
        </p>
      </div>
    </div>
  );
}
