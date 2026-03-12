import Me from '../assets/imgs/image-profile.jpeg';
import gearThemeLight from '../assets/imgs/beautiful-forested-mountains-fog.jpg';
import gearThemeDark from '../assets/imgs/northlandscapes-iceland-vik-foggy-coastline.jpg';

import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  useColorModeValue,
  SimpleGrid,
  HStack,
  Image,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import Skills from './Skills';

const HomeButton = ({ to, children, variant = 'primary', tone = 'neutral', onClick }) => {
  const linkProps = to ? { as: RouterLink, to } : {};
  const primaryBg = useColorModeValue('gray.900', 'blue.200');
  const primaryColor = useColorModeValue('white', 'gray.900');
  const primaryHoverBg = useColorModeValue('gray.700', 'blue.100');
  const secondaryStyles = {
    neutral: {
      bg: useColorModeValue('whiteAlpha.700', 'whiteAlpha.120'),
      color: useColorModeValue('gray.700', 'gray.100'),
      borderColor: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      hoverBg: useColorModeValue('whiteAlpha.900', 'whiteAlpha.200'),
    },
    blue: {
      bg: useColorModeValue('blue.50', 'blue.900'),
      color: useColorModeValue('blue.800', 'blue.100'),
      borderColor: useColorModeValue('blue.100', 'blue.700'),
      hoverBg: useColorModeValue('blue.100', 'blue.800'),
    },
    cyan: {
      bg: useColorModeValue('cyan.50', 'cyan.900'),
      color: useColorModeValue('cyan.800', 'cyan.100'),
      borderColor: useColorModeValue('cyan.100', 'cyan.700'),
      hoverBg: useColorModeValue('cyan.100', 'cyan.800'),
    },
  };

  if (variant === 'secondary') {
    const style = secondaryStyles[tone] || secondaryStyles.neutral;
    return (
      <Button
        {...linkProps}
        onClick={onClick}
        bg={style.bg}
        color={style.color}
        borderRadius="full"
        px={5}
        py={5}
        border="1px solid"
        borderColor={style.borderColor}
        _hover={{
          bg: style.hoverBg,
          transform: 'translateY(-1px)',
        }}
      >
        {children}
      </Button>
    );
  }

  return (
    <Button
      {...linkProps}
      onClick={onClick}
      color={primaryColor}
      bg={primaryBg}
      borderRadius="full"
      px={5}
      py={5}
      _hover={{
        bg: primaryHoverBg,
        transform: 'translateY(-1px)',
      }}
    >
      {children}
    </Button>
  );
};

export default function Home() {
  const gearTheme = useColorModeValue(gearThemeLight, gearThemeDark);
  const pageBg = useColorModeValue('#f6f7fb', '#0f1723');
  const overlayColor = useColorModeValue(
    'linear-gradient(180deg, rgba(232, 241, 255, 0.84), rgba(228, 239, 255, 0.6))',
    'linear-gradient(180deg, rgba(13, 24, 40, 0.8), rgba(13, 24, 40, 0.62))'
  );
  const backgroundOpacity = useColorModeValue(0.45, 0.28);
  const panelBg = useColorModeValue('rgba(244, 248, 255, 0.84)', 'rgba(17, 25, 39, 0.84)');
  const panelBorder = useColorModeValue('blackAlpha.100', 'whiteAlpha.140');
  const headingColor = useColorModeValue('gray.900', 'white');
  const bodyColor = useColorModeValue('gray.700', 'gray.300');
  const eyebrowColor = useColorModeValue('blue.700', 'cyan.200');
  const scrollButtonBg = useColorModeValue('whiteAlpha.900', 'whiteAlpha.120');
  const scrollButtonHoverBg = useColorModeValue('white', 'whiteAlpha.200');
  const profileShadow = useColorModeValue(
    '18px 24px 54px rgba(116, 156, 226, 0.28)',
    '0 24px 60px rgba(0, 0, 0, 0.38)'
  );
  const profileGlow = useColorModeValue(
    'linear-gradient(135deg, rgba(139, 190, 255, 0.6), rgba(139, 190, 255, 0.18))',
    'linear-gradient(180deg, rgba(72, 117, 209, 0.3), rgba(72, 117, 209, 0.08))'
  );

  const scrollToSkills = () => {
    const skillsSection = document.getElementById('skills-section');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Box position="relative" overflow="hidden" bg={pageBg}>
        <Box
          position="absolute"
          inset={0}
          bgImage={`${overlayColor}, url(${gearTheme})`}
          bgSize="cover"
          bgPosition="center"
          opacity={backgroundOpacity}
        />
        <Box
          position="absolute"
          top={{ base: '-70px', md: '-110px' }}
          right={{ base: '-90px', md: '-20px' }}
          w={{ base: '240px', md: '340px' }}
          h={{ base: '240px', md: '340px' }}
          bg="blue.200"
          opacity={0.18}
          filter="blur(90px)"
          borderRadius="full"
          pointerEvents="none"
        />

        <Container
          maxW="6xl"
          position="relative"
          zIndex={1}
          pt={{ base: 10, md: 14 }}
          pb={{ base: 12, md: 16 }}
        >
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, lg: 10 }} alignItems="center">
            <Stack spacing={{ base: 5, md: 6 }} maxW="xl">
              <Text
                fontSize="sm"
                fontWeight="700"
                letterSpacing="0.16em"
                textTransform="uppercase"
                color={eyebrowColor}
              >
                About Me
              </Text>

              <Heading
                fontSize={{ base: '3xl', md: '5xl' }}
                lineHeight={{ base: '1.1', md: '1.05' }}
                color={headingColor}
              >
                Hello, I&apos;m Ivy.
              </Heading>

              <Text color={bodyColor} fontSize={{ base: 'md', md: 'lg' }} lineHeight="tall">
                I&apos;m a full-stack developer focused on building clean,
                thoughtful web experiences.
              </Text>

              <HStack spacing={3} flexWrap="wrap">
                <HomeButton to="/projects">Projects</HomeButton>
                <HomeButton to="/work" variant="secondary" tone="blue">
                  Experience
                </HomeButton>
                <HomeButton onClick={scrollToSkills} variant="secondary" tone="cyan">
                  Skills
                </HomeButton>
              </HStack>
            </Stack>

            <Box
              position="relative"
              maxW={{ base: '420px', lg: '480px' }}
              mx="auto"
              w="100%"
              bg={panelBg}
              border="1px solid"
              borderColor={panelBorder}
              borderRadius="3xl"
              p={{ base: 4, md: 5 }}
              boxShadow={profileShadow}
              backdropFilter="blur(14px)"
            >
              <Box
                position="absolute"
                top={{ base: '28px', md: '34px' }}
                left={{ base: '56px', md: '72px' }}
                right={{ base: '-22px', md: '-30px' }}
                bottom={{ base: '-24px', md: '-32px' }}
                bgImage={profileGlow}
                opacity={1}
                filter="blur(22px)"
                borderRadius="3xl"
                zIndex={0}
              />
              <Image
                src={Me}
                alt="Ivy Wills"
                position="relative"
                zIndex={1}
                w="100%"
                h={{ base: '420px', md: '560px' }}
                objectFit="cover"
                borderRadius="2xl"
              />
            </Box>
          </SimpleGrid>

          <Box mt={{ base: 6, md: 8 }} display={{ base: 'none', md: 'block' }}>
            <Button
              onClick={scrollToSkills}
              bg={scrollButtonBg}
              border="1px solid"
              borderColor={panelBorder}
              borderRadius="full"
              px={5}
              py={6}
              color={headingColor}
              _hover={{
                bg: scrollButtonHoverBg,
                transform: 'translateY(-1px)',
              }}
            >
              Scroll to skills
            </Button>
          </Box>
        </Container>
      </Box>

      <div id="skills-section">
        <Skills />
      </div>
    </>
  );
}
