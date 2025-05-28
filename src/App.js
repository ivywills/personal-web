import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Nav from './nav.js';
import Home from './home.js';
import Project from './projects.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Resume from './resume.js';
import WorkExperience from './work-experience.js';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/work" element={<WorkExperience />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
