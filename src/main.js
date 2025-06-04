import { Routes, Route } from 'react-router-dom';

import Home from './home.js';

const Main = () => {
  return (
    <Routes>
      <Route exact path="/" component={<Home />}></Route>
    </Routes>
  );
};

export default Main;
