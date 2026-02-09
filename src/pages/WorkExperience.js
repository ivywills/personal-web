import {
  Box,
  Heading,
  Text,
  Stack,
  Container,
  useColorModeValue,
  Flex
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const experiences = [
  {
    title: "Frontend Developer",
    company: "Trax.co",
    period: "July 2025 - Present",
    description: "Developing modern user interfaces using Vue.js to enhance product functionality and user experience. Writing comprehensive end-to-end tests with Playwright to ensure application reliability and quality. Implementing GraphQL queries and mutations to efficiently fetch and manage data across the application. Collaborating with cross-functional teams to deliver high-quality frontend solutions.",
    tags: ["Vue.js", "Playwright", "GraphQL"]
  },
  {
    title: "Fullstack Developer and IT Systems Manager",
    company: "Municipal Property Assessment Corporation",
    period: "2023 - 2025",
    description: "Developed React and Angular components to meet Winnipeg's RFP requirements, securing a ten-year, multi-million dollar contract. implementation of an OIDC solution with Keycloak introduced RBAC, audit logs, and session management. Replaced Flowable with Form.io, saving $400K annually while maintaining form management capabilities. Identified and fixed security vulnerabilities in frontend code and Dockerfiles.",
    tags: ["React", "Angular", "Keycloak", "Docker", "Form.io"]
  },
  {
    title: "Software Developer",
    company: "Codepxl",
    period: "2022",
    description: "Built a responsive UI for the SNAP school system using Vue.js and Flexbox, improving efficiency for students. Developed Laravel controllers and API endpoints, reducing API latency by 30%. Updated multiple WordPress sites with custom features and designs.",
    tags: ["Vue.js", "Laravel", "WordPress", "API"]
  },
  {
    title: "React Developer",
    company: "Municipal Property Assessment Corporation",
    period: "2020",
    description: "Created an asynchronous Python REST API for MongoDB interface, improving data handling. Developed interactive React.js components including a property history timeline for enhanced user experience.",
    tags: ["React", "Python", "MongoDB", "REST API"]
  },
  {
    title: "WEtech Alliance Summer Intern",
    company: "WEtech Alliance",
    period: "2019",
    description: "Represented the organization at technology companies and interviewed business owners to document the technology initiative in Windsor."
  },
  {
    title: "Medical Office Assistant",
    company: "Local Clinic",
    period: "2019",
    description: "Updated and organized referral forms and handouts using electronic medical records repository, streamlining processes for medical staff."
  },
  {
    title: "Robotics Teacher",
    company: "St. Louis Catholic Elementary School",
    period: "2018",
    description: "Taught key robotics concepts to grades 3-4 students using hands-on demonstrations with robots and iPads. Created engaging presentations for parents."
  }
];

const ExperienceCard = ({ exp, index }) => {
  const bg = useColorModeValue('white', 'gray.800');
  const border = useColorModeValue('gray.200', 'gray.700');
  const tagBg = useColorModeValue('blue.50', 'blue.900');

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      mb={6}
      p={6}
      bg={bg}
      borderWidth="1px"
      borderColor={border}
      rounded="lg"
      shadow="md"
    >
      <Stack spacing={3}>
        <Flex justify="space-between" align="flex-start" wrap="wrap" gap={2}>
          <Heading as="h3" size="md" color="blue.600">
            {exp.title}
          </Heading>
          <Text fontSize="sm" color="gray.500" fontWeight="medium">
            {exp.period}
          </Text>
        </Flex>

        <Text fontSize="md" fontWeight="semibold" color={useColorModeValue('gray.700', 'gray.300')}>
          {exp.company}
        </Text>

        <Text color={useColorModeValue('gray.600', 'gray.400')} fontSize="sm">
          {exp.description}
        </Text>


        {exp.tags && (
          <Stack direction="row" wrap="wrap" spacing={2} mt={2}>
            {exp.tags.map(tag => (
              <Text
                key={tag}
                fontSize="xs"
                fontWeight="semibold"
                bg={tagBg}
                color="blue.600"
                px={3}
                py={1}
                rounded="full"
              >
                {tag}
              </Text>
            ))}
          </Stack>
        )}
      </Stack>
    </MotionBox>
  );
};

export default function WorkExperience() {
  return (
    <Box minH="100vh" py={12} px={4}>
      <Container maxW="container.md">
        <Heading
          as="h1"
          size="lg"
          mb={8}
          textAlign="center"
          bgGradient="linear(to-r, blue.400, cyan.400)"
          bgClip="text"
        >
          Work Experience
        </Heading>

        <Stack spacing={6}>
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
