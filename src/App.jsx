import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home.jsx';
import { LibAuthors } from './pages/LibAuthors/LibAuthors.jsx';
import { About } from './pages/About/About.jsx';
import { BookAuthors } from './pages/BookAuthors/BookAuthors.jsx';
import { BookStoreChernyshev } from './pages/BookAuthors/BookStore/BookStoreChernyshev.jsx';
import { LibChernyshev } from './pages/LibAuthors/Lib/LibChernyshev.jsx';
import { LibHolmov } from './pages/LibAuthors/Lib/LibHolmov.jsx';
import { BookStoreHolmov } from './pages/BookAuthors/BookStore/BookStoreHolmov.jsx';
import Footer from './components/Footer/Footer.jsx';
import Navbar from './components/Navbar/Navbar.jsx';

function App() {
  const divStyle = {
    backgroundImage: 'url("./assets/images/bg-city-blur.png")',
  };

  return (
    <HashRouter>
      <div className="app" style={divStyle}>
        <Navbar />
        <Routes>
          <Route path={'/'} exact Component={Home} />
          <Route path={'/libAuthors'} Component={LibAuthors} />
          <Route path={'/booksAuthors'} Component={BookAuthors} />
          <Route path={'/about'} Component={About} />

          <Route
            path={'/booksChernyshev'}
            exact
            Component={BookStoreChernyshev}
          />
          <Route path={'/booksHolmov'} exact Component={BookStoreHolmov} />

          <Route path={'/libChernyshev'} exact Component={LibChernyshev} />
          <Route path={'/libHolmov'} exact Component={LibHolmov} />
        </Routes>

        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
