import { Box, Heading, Text, Stack } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import XECHO from './imgs/xecho-square-breathing.png';

export default function Xecho() {
  return (
    <>
      <Box align={'center'} mt={-3} mx={-3} mb={6} pos={'relative'}>
        <img
          src={XECHO}
          alt="xecho square breathing activity"
          style={{ height: '300px', width: '100%', objectFit: 'contain' }}
        />
      </Box>
      <Stack spacing={4}>
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          <a
            href="https://xecho-liard.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            xecho <ExternalLinkIcon mx="2px" />
          </a>
        </Heading>
        <Text>
          The website is designed as a simple and accessible mental wellness
          platform that helps users improve their mental health through short,
          guided activities that take only about three minutes to complete.
        </Text>
        <Text>
          The goal of the app is to make mental health support easy to access,
          even for people with busy schedules, by providing quick exercises
          that can fit naturally into a daily routine.
        </Text>
        <Text color={'gray.500'}>Winter 2025</Text>
      </Stack>
    </>
  );
}
