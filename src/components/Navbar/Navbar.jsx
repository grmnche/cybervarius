import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

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

      <div className="nav-logo">
        <NavLink to="/" end>
          <img
            className="w-32 lg:48 inline-block"
            src="./assets/images/logo.svg"
            alt=""
          />
        </NavLink>
      </div>

      <ul className="nav-list text-lg md:text-xl lg:text-2xl">
        <NavLink
          className={({ isActive }) =>
            isActive ? 'nav-link nav-link-shadow active' : 'nav-link'
          }
          to="/"
          end
          onClick={handleNavLinkClick}
        >
          <li className="nav-item">
            <p className="nav-link-inner">Главная</p>
          </li>
        </NavLink>
        <div
          onMouseEnter={libHandler}
          onMouseLeave={libHandler}
          className="nav-link-container 2xl:h-28 inline-block"
        >
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'nav-link nav-link-shadow active w-full'
                : 'nav-link w-full'
            }
            to="/libAuthors"
            onClick={handleNavLinkClick}
          >
            <li className="nav-item">
              <p className="nav-link-inner">Библиотека</p>
            </li>
          </NavLink>

          <div
            className={isActiveLib ? 'lib-chapters hidden lg:block' : 'fade'}
          >
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
          className="nav-link-container 2xl:h-28 inline-block"
        >
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'nav-link nav-link-shadow active w-full'
                : 'nav-link w-full'
            }
            to="/booksAuthors"
            onClick={handleNavLinkClick}
          >
            <li className="nav-item">
              <p className="nav-link-inner">Книжная лавка</p>
            </li>
          </NavLink>

          <div
            className={
              isActiveBooks ? 'books-chapters hidden lg:block' : 'fade'
            }
          >
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
          className={({ isActive }) =>
            isActive ? 'nav-link nav-link-shadow active' : 'nav-link'
          }
          to="/about"
          onClick={handleNavLinkClick}
        >
          <li className="nav-item">
            <p className="nav-link-inner">О Кибервариусе</p>
          </li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
