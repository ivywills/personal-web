import React, { useEffect } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import NavMe from './navMe.js';
import Home from './home.js';
import Project from './projects.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Main from './main.js';
import me from './profile2.jpg';
import Resume from './resume.js';
import Internship from './internship.js';
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

posthog.init('phc_NSTORzx81CehpKATXQpJ5ROdgAXJQ5ikzH8jzX86VB6',
    {
        api_host: 'https://us.i.posthog.com',
        person_profiles: 'identified_only'
    }
)

const App = () => {
  useEffect(() => {
    document.title = 'Ivy';
  }, []);

  useEffect(() => {
   var _mtm = window._mtm = window._mtm || [];
   _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
   var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
   g.async=true; g.src='https://cdn.matomo.cloud/ivywills.matomo.cloud/container_cLBfopgN.js'; s.parentNode.insertBefore(g,s);
  }, [])

  return (
    <PostHogProvider client={posthog}>
    <ChakraProvider theme={theme}>
      <Router>
        <NavMe />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/internship" element={<Internship />} />
        </Routes>
      </Router>
      </ChakraProvider>
      </PostHogProvider>
  );
};

export default App;
