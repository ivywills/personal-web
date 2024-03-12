import React from 'react';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';
import EventualImage from './eventual.png';

export default function EventualProject() {
  return (
    <>
      <Box align={'center'} bg={'gray.100'} mt={-3} mb={6} pos={'relative'}>
        <img
          src={EventualImage}
          style={{ height: '300px' }}
          align={'center'}
          layout={'fill'}
        />
      </Box>
      <Stack spacing={4}>
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          Eventual
        </Heading>
        <Text>
          Eventual is a professional platform that enables users to effortlessly
          find free events in their city. Whether it's a large community BBQ or
          a small board game night, our platform offers a wide range of events
          to suit everyone's preferences.
        </Text>
        <Text>
          Users can easily explore and like events, as well as access a complete
          history of their past event engagements. We prioritize user
          satisfaction by organizing events according to individual interests
          and ensuring a seamless experience throughout.
        </Text>
        <Text color={'gray.500'}>Fall 2022</Text>
      </Stack>
    </>
  );
}
