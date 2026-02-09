import { ChakraProvider } from '@chakra-ui/react';
import { lazy, Suspense } from 'react';
import theme from './theme';
import Nav from './components/Nav';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Spinner, Center } from '@chakra-ui/react';

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const Resume = lazy(() => import('./pages/Resume'));
const WorkExperience = lazy(() => import('./pages/WorkExperience'));

// Loading fallback component
const LoadingFallback = () => (
  <Center minH="100vh">
    <Spinner size="xl" color="blue.500" thickness="4px" />
  </Center>
);

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <ScrollProgress />
        <ScrollToTop />
        <Nav />
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/work" element={<WorkExperience />} />
          </Routes>
        </Suspense>
      </Router>
    </ChakraProvider>
  );
};

export default App;
