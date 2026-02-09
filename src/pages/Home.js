import Me from '../assets/imgs/new-profile.jpeg';
import gearThemeLight from '../assets/imgs/beautiful-forested-mountains-fog.jpg';
import gearThemeDark from '../assets/imgs/northlandscapes-iceland-vik-foggy-coastline.jpg';

import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import Skills from './Skills';

const CustomButton = ({ to, children }) => {
  return (
    <Button
      as={RouterLink}
      to={to}
      colorScheme={'blue'}
      bg={'blue.400'}
      rounded={'full'}
      px={6}
      _hover={{
        bg: 'blue.500',
        transform: 'scale(1.05)',
        transition: 'transform 0.3s ease-in-out',
      }}
    >
      {children}
    </Button>
  );
};

export default function Home() {
  const isMobile = window.innerWidth < 768;
  const gearTheme = useColorModeValue(gearThemeLight, gearThemeDark);

  const scrollToSkills = () => {
    const skillsSection = document.getElementById('skills-section');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${gearTheme})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <Container maxW={'3xl'} flex="1" display="flex" alignItems="flex-start">
          <Stack
            as={Box}
            textAlign={'center'}
            spacing={{ base: 4, md: 8 }}
            pt={{ base: 12, md: 12 }}
          >
            <Heading
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
              lineHeight={'110%'}
              bgGradient="linear(to-r, blue.400, blue.600, cyan.400)"
              bgClip="text"
              pb={3}
              _hover={{
                bgGradient: "linear(to-r, cyan.400, blue.600, blue.400)",
                transition: "background 0.5s ease-in-out"
              }}
            >
              Ivy Wills <br />
            </Heading>
            <Box
              align="center"
              textAlign="center"
              alignSelf="center"
              bg="gray.100"
              w={isMobile ? '220px' : '250px'}
              mt={isMobile ? 0 : -8}
              mx={-1}
              mb={-4}
              pos="relative"
              rounded="md"
              style={{ borderRadius: '8px' }}
              _hover={{
                transform: 'scale(1.05)',
                transition: 'transform 0.3s ease-in-out',
              }}
            >
              <img
                src={Me}
                alt="Ivy Wills"
                align="center"
                loading="eager"
                decoding="async"
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
                I am an experienced Full-stack Developer. Skilled in React.js,
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
              <CustomButton to="/projects">Projects</CustomButton>
              <CustomButton to="/work">Work Experience</CustomButton>
            </Stack>
          </Stack>
        </Container>

        {/* Animated Scroll Indicator */}
        <Box
          position="absolute"
          bottom="80px"
          left="50%"
          transform="translateX(-50%)"
          cursor="pointer"
          onClick={scrollToSkills}
          zIndex={10}
          background="radial-gradient(ellipse, rgba(255, 255, 255, 1) 25%, rgba(255, 255, 255, 0.6) 45%, rgba(255, 255, 255, 0) 75%)"
          borderRadius="2xl"
          px={14}
          py={8}
          _hover={{
            transform: "translateX(-50%) scale(1.08)",
            transition: "all 0.3s ease"
          }}
        >
          <VStack spacing={1}>
            <Box
              as="div"
              animation="bounce 2s infinite"
              sx={{
                '@keyframes bounce': {
                  '0%, 100%': { transform: 'translateY(0)' },
                  '50%': { transform: 'translateY(-2px)' },
                }
              }}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#3182CE"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </Box>
          </VStack>
        </Box>
      </div>

      {/* Skills Section with ID */}
      <div id="skills-section">
        <Skills />
      </div>
    </>
  );
}
