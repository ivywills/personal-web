import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import Nav from './components/Nav';
import Home from './pages/Home';
import Project from './pages/Projects';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Resume from './pages/Resume';
import WorkExperience from './pages/WorkExperience';

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
