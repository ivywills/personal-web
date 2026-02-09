import {
  Box,
  Heading,
  Container,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Mentorly from './projects/mentorly.js';
import SNAP from './projects/snap.js';
import Doodle from './projects/doodle.js';
import RayTracer from './projects/raytracer.js';
import BookFinder from './projects/book-finder.js';

const MotionBox = motion(Box);

const components = [
  { name: 'BookFinder', component: BookFinder },
  { name: 'Mentorly', component: Mentorly },
  { name: 'RayTracer', component: RayTracer },
  { name: 'SNAP', component: SNAP },
  { name: 'Doodle', component: Doodle },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
};

export default function Projects() {
  const cardBg = useColorModeValue('white', 'gray.800');

  return (
    <Box bg={useColorModeValue('gray.50', 'gray.900')} minH="100vh" py={12}>
      <Container maxW="container.xl">
        <Heading
          as="h1"
          size="lg"
          mb={10}
          textAlign="center"
          bgGradient="linear(to-r, blue.400, cyan.400)"
          bgClip="text"
        >
          Projects
        </Heading>

        <MotionBox
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {components.map(componentData => {
              const Component = componentData.component;
              return (
                <MotionBox
                  key={componentData.name}
                  variants={itemVariants}
                  bg={cardBg}
                  boxShadow="lg"
                  rounded="lg"
                  overflow="hidden"
                  whileHover={{
                    y: -12,
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
                    transition: { duration: 0.3 }
                  }}
                  position="relative"
                  _hover={{
                    '& .project-overlay': {
                      opacity: 1
                    }
                  }}
                >
                  <Box p={6}>
                    <Component />
                  </Box>
                </MotionBox>
              );
            })}
          </SimpleGrid>
        </MotionBox>
      </Container>
    </Box>
  );
}
