import React from 'react';
import { Routes, Route } from 'react-router-dom';
import resumePic from './resume.png';
import Home from './home.js';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

const Resume = () => {
  return (
    <>
      <Center py={6}>
        <Stack mt={6} direction={'row'} spacing={8} align={'center'}>
          <img src={resumePic} layout={'fill'} />
        </Stack>
      </Center>
    </>
  );
};

export default Resume;
