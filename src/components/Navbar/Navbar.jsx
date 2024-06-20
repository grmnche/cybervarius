import React, { useState } from 'react';
import 'aos/dist/aos.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isActiveLib, setIsActiveLib] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isActiveBooks, setIsActiveBooks] = useState(false);

  function handleNavLinkClick() {
    setIsNavOpen(false);
  }

  function libHandler() {
    setIsActiveLib((isActiveLib) => !isActiveLib);
  }

  function booksHandler() {
    setIsActiveBooks((isActiveBooks) => !isActiveBooks);
  }

  return (
    <nav
      data-aos="fade-down"
      className="z-10 h-10 mt-12 text-center fixed top-0 left-0 bottom-0 right-0"
    >
      <input
        className="checkbox"
        type="checkbox"
        checked={isNavOpen}
        onChange={() => setIsNavOpen(!isNavOpen)}
      />

      <div className="hamburger-lines">
        <span className="line line1"></span>
        <span className="line line2"></span>
        <span className="line line3"></span>
      </div>

      <NavLink className="nav-logo" to="/" end>
        <img
          className="w-32 lg:48 inline-block"
          src="./assets/images/icons/logo.svg"
          alt=""
        />
      </NavLink>

      <ul className="nav-list text-lg md:text-xl lg:text-2xl">
        <NavLink
          className={`nav-link ${({ isActive }) => (isActive ? 'active' : '')}`}
          to="/"
          end
          onClick={handleNavLinkClick}
        >
          Главная
        </NavLink>

        <div
          onMouseEnter={libHandler}
          onMouseLeave={libHandler}
          className="nav-link__container 2xl:h-28 inline-block"
        >
          <NavLink
            className={`nav-link ${({ isActive }) =>
              isActive ? 'active' : ''}`}
            to="/libAuthors"
            onClick={handleNavLinkClick}
          >
            Библиотека
          </NavLink>

          <div className={isActiveLib ? 'chapters' : 'fade'}>
            <NavLink to="/libChernyshev" onClick={handleNavLinkClick}>
              <div className="nav-subitem mt-2 p-1 absolute left-0">
                <img
                  className="w-10"
                  src="./assets/images/chernyshev.png"
                  alt=""
                />
              </div>
            </NavLink>

            <NavLink to="/libHolmov" onClick={handleNavLinkClick}>
              <div className="nav-subitem mt-2 p-1 absolute right-0">
                <img className="w-10" src="./assets/images/holmov.png" alt="" />
              </div>
            </NavLink>
          </div>
        </div>

        <div
          onMouseEnter={booksHandler}
          onMouseLeave={booksHandler}
          className="nav-link__container 2xl:h-28 inline-block"
        >
          <NavLink
            className={`nav-link ${({ isActive }) =>
              isActive ? 'active' : ''}`}
            to="/booksAuthors"
            onClick={handleNavLinkClick}
          >
            Книжная лавка
          </NavLink>

          <div className={isActiveBooks ? 'chapters' : 'fade'}>
            <NavLink to="/booksChernyshev" onClick={handleNavLinkClick}>
              <div className="nav-subitem mt-2 p-1 absolute left-0">
                <img
                  className="w-10"
                  src="./assets/images/chernyshev.png"
                  alt=""
                />
              </div>
            </NavLink>

            <NavLink to="/booksHolmov" onClick={handleNavLinkClick}>
              <div className="nav-subitem mt-2 p-1 absolute right-0">
                <img className="w-10" src="./assets/images/holmov.png" alt="" />
              </div>
            </NavLink>
          </div>
        </div>

        <NavLink
          className={`nav-link ${({ isActive }) => (isActive ? 'active' : '')}`}
          to="/about"
          onClick={handleNavLinkClick}
        >
          О Кибервариусе
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
