import React from 'react';
import { Box, Center, Heading, Text, Stack } from '@chakra-ui/react';
import Wetech from './imgs/WEtech.png';
import { ExternalLinkIcon } from '@chakra-ui/icons';

export default function WetechBlog() {
  return (
    <>
      <Center>
        <Box align={'center'} mt={-3} mx={-3} mb={6} pos={'relative'}>
          <img src={Wetech} style={{ height: '300px' }} align={'center'} />
        </Box>
      </Center>
      <Stack spacing={4}>
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          <a
            href="https://www.wetech-alliance.com/category/blog/ivy-blog/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            WEtech Alliance Summer Blog <ExternalLinkIcon mx="2px" />
          </a>
        </Heading>
        <Text>
          During my summer internship at Wetech, I represented WEtech Alliance
          at several technology companies, interviewing the business owners, to
          document the growing technology initiative in Windsor.
        </Text>
        <Text color={'gray.500'}>Summer 2022</Text>
      </Stack>
    </>
  );
}
