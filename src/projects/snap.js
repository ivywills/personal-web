import { Box, Heading, Text, Stack } from '@chakra-ui/react';
import SNAP from './imgs/snap.png';

export default function Snap() {
  return (
    <>
      <Box align={'center'} mt={-3} mx={-3} mb={6} pos={'relative'}>
        <img
          src={SNAP}
          align={'center'}
          justify={'center'}
          layout={'fill'}
          style={{ height: '300px' }}
          alt={'Your Alt Text Here'}
        />
      </Box>
      <Stack spacing={4}>
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          SNAP
        </Heading>
        <Text>
          During my internship at CodePxl, I developed a robust user management
          program utilizing both Vue.js for the frontend and Laravel for the
          backend. This program served as a vital tool for administrators of the
          SNAP school program, empowering them to effectively oversee user
          operations. Employing a skillful combination of Laravel, PHP,
          JavaScript, Vue.js, PhpStorm, and MySQL, I successfully crafted a
          comprehensive solution that seamlessly integrated various
          technologies.
        </Text>
        <Text color={'gray.500'}>Summer 2022</Text>
      </Stack>
    </>
  );
}
