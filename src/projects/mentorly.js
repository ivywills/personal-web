import React from 'react';
import { Box, Heading, Text, Stack } from '@chakra-ui/react';
import HandShake from './imgs/handshake_men_01.jpg';

export default function Mentorly() {
  return (
    <>
      <Box
        align={'center'}
        bg={'gray.100'}
        mt={-3}
        mx={-3}
        mb={6}
        pos={'relative'}
      >
        <img
          src={HandShake}
          align={'center'}
          style={{ height: '300px' }}
          layout={'fill'}
        />
      </Box>
      <Stack spacing={4}>
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          Mentorly
        </Heading>
        <Text>
          On a small team of developers, I collaborated in the creation of
          Mentorly. Mentorly begins by guiding users through a series of
          meticulously crafted forms, where they can provide relevant
          information about their interests and goals.
        </Text>
        <Text>
          Once the matching process is complete, Mentorly provides users with a
          robust chat page. To enhance the overall mentoring experience,
          Mentorly also incorporates a delightful collection of ice breaker
          games.
        </Text>
        <Text>
          Powered by a MERN stack, Mentorly utilizes React for the frontend,
          Express and Node.js for the backend, and MongoDB as the database.
        </Text>
        <Text color={'gray.500'}>Fall 2021</Text>
        <Text color={'gray.500'}>
          <a href="https://www.freepik.com/free-vector/two-men-shake-hands-with-each-other-isolated-white-background-meeting-greeting-friends-businessmen-deal-agreement-illustration-partnership-cooperation-communication_28945834.htm#query=people%20shaking%20hands&position=2&from_view=keyword">
            Image by studio4rt
          </a>{' '}
          on Freepik
        </Text>
      </Stack>
    </>
  );
}
