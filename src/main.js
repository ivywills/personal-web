import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './home.js';

const Main = () => {
  return (
      <Routes>
        {' '}
        {/* The Switch decides which component to show based on the current URL.*/}
        <Route exact path="/" component={<Home />}></Route>
      </Routes>
  );
};

export default Main;
