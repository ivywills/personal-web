import React from 'react';
import {
  useBreakpointValue,
  Box,
  Heading,
  Container,
  useColorModeValue,
  Flex,
  SimpleGrid,
} from '@chakra-ui/react';
import Mentorly from './mentorly.js';
import SNAP from './snap.js';
import Eventual from './eventual.js';
import Doodle from './doodle.js';
import RayTracer from './raytracer.js';
import WetechBlog from './wetech.js';

const components = [
  { name: 'Mentorly', component: Mentorly },
  { name: 'WetechBlog', component: WetechBlog },
  { name: 'RayTracer', component: RayTracer },
  { name: 'SNAP', component: SNAP },
  { name: 'Doodle', component: Doodle },
  { name: 'Eventual', component: Eventual },
];

export default function Projects() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const bgColor = useColorModeValue('gray.100', 'gray.700');

  return (
    <Box bg={useColorModeValue('gray.300', 'gary.800')} py={10}>
      <Container maxW="container.xl">
        <Heading
          fontWeight={500}
          fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
          lineHeight="110%"
          color={useColorModeValue('purple.300', 'purple.800')}
          textAlign="center"
        >
          Projects
        </Heading>

        <Flex justifyContent="center" mt={10}>
          <SimpleGrid columns={isMobile ? 1 : 3} spacing={8}>
            {components.map(componentData => {
              const Component = componentData.component;
              return (
                <Box
                  maxW={'445px'}
                  w={'full'}
                  h={'auto'}
                  boxShadow={'2xl'}
                  rounded={'md'}
                  backgroundColor={bgColor}
                  p={6}
                  overflow={'hidden'}
                  mb={8}
                >
                  <Component key={componentData.name} />
                </Box>
              );
            })}
          </SimpleGrid>
        </Flex>
      </Container>
    </Box>
  );
}
