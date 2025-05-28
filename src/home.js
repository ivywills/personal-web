import React from 'react';
import Me from './imgs/no_background.png';
import gearThemeLight from './imgs/beautiful-forested-mountains-fog.jpg';
import gearThemeDark from './imgs/northlandscapes-iceland-vik-foggy-coastline.jpg';

import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';

const CustomButton = ({ href, children }) => {
  return (
    <a href={href}>
      <Button
        colorScheme={'green'}
        bg={'green.400'}
        rounded={'full'}
        px={6}
        _hover={{
          bg: 'green.300',
          transform: 'scale(1.1)',
          transition: 'transform 0.3s ease-in-out',
        }}
      >
        {children}
      </Button>
    </a>
  );
};

export default function Home() {
  const isMobile = window.innerWidth < 768;
  const gearTheme = useColorModeValue(gearThemeLight, gearThemeDark);

  return (
    <div
      style={{
        backgroundImage: `url(${gearTheme})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 6, md: 14 }}
          py={{ base: 10, md: 20 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: '4xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
            color={useColorModeValue('gray.800', 'gray.800')}
          >
            Ivy Wills <br />
          </Heading>
          <Box
            align="center"
            textAlign="center"
            alignSelf="center"
            bg="gray.100"
            w={isMobile ? '150px' : '170px'}
            mt={isMobile ? 0 : -8}
            mx={-1}
            mb={-4}
            pos="relative"
            rounded="md"
            style={{ borderRadius: '8px' }}
            _hover={{
              transform: 'scale(1.1)',
              transition: 'transform 0.3s ease-in-out',
            }}
          >
            <img
              src={Me}
              align="center"
              layout="fill"
              style={{ borderRadius: '8px' }}
              rounded="md"
            />
          </Box>
          <Box
            bg="rgba(128, 128, 128, 0.8)"
            borderRadius="md"
            px={4}
            py={2}
            mt={isMobile ? 4 : 0}
          >
            <Text
              fontSize={{ base: 'sm', md: 'md' }}
              color={useColorModeValue('gray.100', 'black')}
            >
              I am an experienced Fullstack Developer. Skilled in React.js,
              Angular, Python, and modern web technologies, I design and
              implement responsive, user-centric interfaces and efficient
              backend systems. I have a proven track record in leading
              development efforts, optimizing performance, and implementing
              secure, efficient workflows.
            </Text>
          </Box>
          <Stack
            direction={'row'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}
          >
            <CustomButton href="/projects">Projects</CustomButton>
            <CustomButton href="/work">Work Experience</CustomButton>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
