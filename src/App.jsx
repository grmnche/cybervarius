import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home.jsx';
import { LibAuthors } from './pages/Lib/LibAuthors.jsx';
import { About } from './pages/About/About.jsx';
import { StoreAuthors } from './pages/Store/StoreAuthors.jsx';
import { BookStoreChernyshev } from './pages/Store/pages/StoreChernyshev.jsx';
import { LibChernyshev } from './pages/Lib/pages/LibChernyshev.jsx';
import { LibHolmov } from './pages/Lib/pages/LibHolmov.jsx';
import { BookStoreHolmov } from './pages/Store/pages/StoreHolmov.jsx';
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
          <Route path={'/booksAuthors'} Component={StoreAuthors} />
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
      </div>
    </HashRouter>
  );
}

export default App;
