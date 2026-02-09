import {
    Box,
    Heading,
    Container,
    SimpleGrid,
    VStack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaReact, FaVuejs, FaAngular, FaPython, FaDocker, FaNodeJs, FaCode, FaDatabase, FaWordpress, FaLaravel, FaKey } from 'react-icons/fa';
import { SiGraphql } from 'react-icons/si';

const MotionBox = motion(Box);

const skills = [
    { name: 'React', icon: FaReact, color: '#61DAFB' },
    { name: 'Vue.js', icon: FaVuejs, color: '#4FC08D' },
    { name: 'Angular', icon: FaAngular, color: '#DD0031' },
    { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
    { name: 'Python', icon: FaPython, color: '#3776AB' },
    { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
    { name: 'Testing', icon: FaCode, color: '#2EAD33' },
    { name: 'Docker', icon: FaDocker, color: '#2496ED' },
    { name: 'MongoDB', icon: FaDatabase, color: '#47A248' },
    { name: 'Laravel', icon: FaLaravel, color: '#FF2D20' },
    { name: 'Auth', icon: FaKey, color: '#4D4D4D' },
    { name: 'WordPress', icon: FaWordpress, color: '#21759B' },
];

const SkillCard = ({ skill, index }) => {
    const Icon = skill.icon;
    const bg = useColorModeValue('white', 'gray.800');
    const borderColor = useColorModeValue('gray.200', 'gray.700');

    return (
        <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{
                y: -8,
                transition: { duration: 0.2 },
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)'
            }}
        >
            <VStack
                p={6}
                bg={bg}
                borderWidth="1px"
                borderColor={borderColor}
                rounded="xl"
                spacing={3}
                h="full"
                cursor="pointer"
                transition="all 0.3s ease"
            >
                <MotionBox
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                >
                    <Icon size={48} color={skill.color} />
                </MotionBox>
                <Text fontWeight="semibold" fontSize="md">
                    {skill.name}
                </Text>
            </VStack>
        </MotionBox>
    );
};

export default function Skills() {
    return (
        <Box bg={useColorModeValue('gray.50', 'gray.900')} py={16} px={4}>
            <Container maxW="container.xl">
                <Heading
                    as="h2"
                    size="lg"
                    mb={12}
                    textAlign="center"
                    bgGradient="linear(to-r, blue.400, cyan.400)"
                    bgClip="text"
                >
                    Skills & Technologies
                </Heading>

                <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={6}>
                    {skills.map((skill, index) => (
                        <SkillCard key={skill.name} skill={skill} index={index} />
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
}
