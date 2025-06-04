import { Box, Heading, Text, Stack, AspectRatio } from '@chakra-ui/react';
import YouTube from 'react-youtube';

export default function Doodle() {
  const videoId = 'sK0qLms4bAI'; // replace with your video ID
  const opts = {
    height: '300',
    width: '445',
  };

  return (
    <>
      <Box align={'center'} mt={-3} mx={-3} mb={6} pos={'relative'}>
        <AspectRatio
          ratio={16 / 9}
          style={{ height: '300px' }}
          align={'center'}
          w="100%"
        >
          <YouTube videoId={videoId} opts={opts} />
        </AspectRatio>
      </Box>
      <Stack spacing={4}>
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          Doodle Jump
        </Heading>
        <Text>
          Using Assembly and the MARS MIPS simulator, I created the game Doodle
          Jump. Doodle Jump is a fun game where players control Doodle, guiding
          them upwards on platforms. The player can avoid obstacles, collect
          power-ups, and aim to advance to harder levels. The simple graphics,
          vibrant colors, and addictive gameplay make it a classic experience.
        </Text>
        <Text color={'gray.500'}>Fall 2020</Text>
      </Stack>
    </>
  );
}
