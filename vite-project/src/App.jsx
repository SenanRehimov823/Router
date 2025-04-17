import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Home from './pages/Home';
import Basket from './pages/Basket';
import Favorites from './pages/Favorites';
import Layout from './components/Layout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> 
          <Route path="/basket" element={<Basket />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
