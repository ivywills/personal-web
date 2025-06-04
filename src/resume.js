import resumePic from './imgs/resume.png';
import { Center, Stack } from '@chakra-ui/react';

const Resume = () => {
  return (
    <>
      <Center py={6}>
        <Stack m={6} direction={'row'} spacing={8} align={'center'}>
          <img src={resumePic} layout={'fill'} />
        </Stack>
      </Center>
    </>
  );
};

export default Resume;
