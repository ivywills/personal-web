import React from 'react';
import NavMe from './imgs/no_background.png';
import gearThemeLight from './imgs/beautiful-forested-mountains-fog.jpg';
import gearThemeDark from './imgs/northlandscapes-iceland-vik-foggy-coastline-01.jpg';

import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';

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
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
            color={useColorModeValue('gray.800', 'gray.800')} // Update text color
          >
            Ivy Wills <br />
          </Heading>
          <Box
            align="center"
            textAlign="center"
            alignSelf="center"
            bg="gray.100"
            w={isMobile ? '210px' : '270px'}
            mt={isMobile ? 0 : -8}
            mx={-1}
            mb={-4}
            pos="relative"
            rounded="md"
            style={{ borderRadius: '8px' }}
          >
            <img
              src={NavMe}
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
            <Text color={useColorModeValue('gray.100', 'black')}>
              I'm a computer science graduate from the University of Toronto
              currently working as a frontend developer at MPAC, and this
              website is dedicated to showcasing my projects and work
              experience.
            </Text>
          </Box>
          <Stack
            direction={'row'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}
          >
            <a href="/projects">
              <Button
                colorScheme={'green'}
                bg={'green.400'}
                rounded={'full'}
                px={6}
                _hover={{
                  bg: 'green.500',
                }}
              >
                Projects
              </Button>
            </a>
            <a href="/internship">
              <Button
                colorScheme={'green'}
                bg={'green.400'}
                rounded={'full'}
                px={6}
                _hover={{
                  bg: 'green.500',
                }}
              >
                Work Experience
              </Button>
            </a>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
