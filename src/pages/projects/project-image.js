import { Box } from '@chakra-ui/react';

export default function ProjectImage({ src, alt }) {
  return (
    <Box
      align={'center'}
      bg={'gray.50'}
      mt={-3}
      mx={-3}
      mb={6}
      pos={'relative'}
      h="300px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          display: 'block',
        }}
      />
    </Box>
  );
}
