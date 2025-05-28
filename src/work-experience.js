import React from 'react';
import { useColorModeValue, Stack, Text, Heading, Box } from '@chakra-ui/react';

const WorkExperienceBox = ({ title, subTitle, description }) => {
  return (
    <Box
      bg={useColorModeValue('gray.100', 'gray.700')}
      p="4"
      boxShadow="lg"
      borderRadius="sm"
      _hover={{
        transform: 'scale(1.005)',
        transition: 'transform 0.3s ease-in-out',
      }}
    >
      <Stack direction="row" alignItems="center">
        <Heading
          as="h3"
          fontWeight="semibold"
          fontSize={{ base: 'lg', md: 'xl' }}
        >
          {title}{' '}
          <Text
            as="span"
            fontWeight="normal"
            fontSize={{ base: 'md', md: 'xl' }}
            color={useColorModeValue('gray.600', 'gray.400')}
          >
            {subTitle}
          </Text>
        </Heading>
      </Stack>
      <Text mt="8px" fontSize={{ base: 'sm' }} textAlign={'left'}>
        {description}
      </Text>
    </Box>
  );
};

export default function WorkExperience() {
  return (
    <Box py="8">
      <Heading
        fontWeight={500}
        fontSize={{ base: '2xl', md: '4xl' }}
        lineHeight="110%"
        color={useColorModeValue('gray.800', 'gray.300')}
        textAlign="left"
        spacing="8"
        p="4"
      >
        Work Experience
      </Heading>
      <Stack spacing="8" p="4">
        <WorkExperienceBox
          title="Fullstack Developer and IT Systems Manager"
          subTitle="Municipal Property Assessment Corporation"
          description="Here, I developed React and Angular components to meet Winnipeg's RFP requirements. This helped secure a 10-year, multi-million dollar contract. I also modernized MPAC's frontend security workflows by implementing an OIDC solution with Keycloak. This introduced RBAC, audit logs, and session management for improved security. I replaced Flowable with the open-source Form.io, saving $400K annually. The new system maintained all necessary form management capabilities. Additionally, I identified and fixed security vulnerabilities in frontend code and Dockerfiles, ensuring SOC2 compliance."
        />
        <WorkExperienceBox
          title="Software Developer"
          subTitle="Codepxl"
          description="At Codepxl, I built a responsive UI for the SNAP school system using Vue.js and Flexbox. This allowed students to complete lesson plans and quizzes more efficiently. I developed Laravel controllers and API endpoints to improve backend performance. This reduced API latency by 30%. I also updated multiple WordPress sites, delivering custom features and design updates to meet client needs."
        />
        <WorkExperienceBox
          title="React Developer"
          subTitle="Municipal Property Assessment Corporation"
          description="At MPAC, I created an asynchronous Python REST API to interface with MongoDB. This improved data retrieval and storage. I also developed interactive React.js components, including a property history timeline. Users could easily explore and view property details through this engaging interface."
        />
        <WorkExperienceBox
          title="Production Coordinator"
          subTitle="LearnFormula Inc."
          description="I was responsible for handling various tasks to optimize the filming process for LearnFormula podcasts. I facilitated seamless communication between the development and production teams. This helped automate the podcast production process. Coordinating the workflow for the production team was another important part of my role. I ensured that new podcasts were properly onboarded. Additionally, I took charge of running a targeted email campaign. This campaign introduced potential engineers, lawyers, and accountants to the opportunity of filming a podcast with LearnFormula."
        />
        <WorkExperienceBox
          title="Robotics Teacher"
          subTitle="St. Louis Catholic Elementary School"
          description="As a Robotics Teacher at St. Louis Catholic Elementary School, I explained key concepts to students in grades 3-4 by creating slideshows and demonstrating the use of robots and iPads. This approach helped the students engage with technology. Additionally, I created a final parent presentation on PowerPoint, which resulted in a successful 45-minute talk about the coding activities completed."
        />
        <WorkExperienceBox
          title="WEtech Alliance Summer Intern"
          subTitle=""
          description="As a Summer Intern at WEtech Alliance, I represented the organization at several technology companies and interviewed business owners to document the growing technology initiative in Windsor."
        />
        <WorkExperienceBox
          title="Medical Office Assistant"
          subTitle=""
          description="As a Medical Office Assistant, I used an electronic medical records repository to update and organize referral forms and handouts. This streamlined the process and helped nurses find the necessary forms promptly."
        />
      </Stack>
    </Box>
  );
}
