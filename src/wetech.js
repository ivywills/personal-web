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
import Wetech from './WEtech.png';

export default function WetechBlog() {
  return (
    <>
      <Center>
        <Box
          align={'center'}
          bg={'gray.100'}
          maxW={'445px'}
          w={'full'}
          mt={-3}
          mx={-3}
          mb={6}
          pos={'relative'}
        >
          <img src={Wetech} style={{ height: '300px' }} align={'center'} />
        </Box>
      </Center>
      <Stack spacing={4}>
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          WEtech Alliance Summer Blog
        </Heading>
        <Text>
          During my summer internship at Wetech, I represented WEtech Alliance
          at several technology companies, interviewing the business owners, to
          document the growing technology initiative in Windsor. This blog can
          be found at{' '}
          <a href="https://www.wetech-alliance.com/category/blog/ivy-blog/">
            https://www.wetech-alliance.com/category/blog/ivy-blog/
          </a>
        </Text>
        <Text color={'gray.500'}>Summer 2022</Text>
      </Stack>
    </>
  );
}
