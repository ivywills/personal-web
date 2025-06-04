import {
  useBreakpointValue,
  Box,
  Heading,
  Container,
  useColorModeValue,
  Flex,
  SimpleGrid,
} from '@chakra-ui/react';
import Mentorly from './projects/mentorly.js';
import SNAP from './projects/snap.js';
import Doodle from './projects/doodle.js';
import RayTracer from './projects/raytracer.js';
import BookFinder from './projects/book-finder.js';

const components = [
  { name: 'BookFinder', component: BookFinder },
  { name: 'Mentorly', component: Mentorly },
  { name: 'RayTracer', component: RayTracer },
  { name: 'SNAP', component: SNAP },
  { name: 'Doodle', component: Doodle },
];

export default function Projects() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const bgColor = useColorModeValue('gray.100', 'gray.700');

  return (
    <Box bg={useColorModeValue('gray.300', 'gary.800')} py={10}>
      <Container maxW="container.xl">
        <Heading
          fontWeight={500}
          fontSize={{ base: '2xl', md: '4xl' }}
          lineHeight="110%"
          color={useColorModeValue('gray.800', 'gray.300')}
          textAlign="left"
          spacing="4"
          px="4"
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
                  _hover={{
                    transform: 'scale(1.04)',
                    transition: 'transform 0.3s ease-in-out',
                  }}
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
