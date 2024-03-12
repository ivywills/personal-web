import React from 'react';
import { useColorModeValue,Stack, Text, Heading, Box } from '@chakra-ui/react';

export default function Internship() {
  return (
    <Box py="8">
      <Heading
        fontWeight={500}
        fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
        lineHeight={'110%'}
        color={'purple.400'}
        textAlign="center"
        mt="4"
        mb="8"
      >
        Work Experience
      </Heading>
      <Stack spacing="8" p="4">
        <Box bg={useColorModeValue('gray.100', 'gray.700')} p="4" boxShadow="lg" borderRadius="sm">
          <Stack direction="row" alignItems="center">
            <Text
              fontWeight="semibold"
              fontSize={{ base: 'lg', sm: 'xl', md: '2xl' }}
            >
              Production Coorinator: LearnFormula Inc.
            </Text>
          </Stack>
          <Text fontSize={{ base: 'sm' }} textAlign={'left'}>
            I am responsible for handling various tasks to optimize the filming
            process for LearnFormula podcasts. I actively facilitate seamless
            communication between the development and production teams, enabling
            us to automate the podcast production process. Coordinating the
            workflow for the production team is another crucial aspect of my
            responsibilities, ensuring that new podcasts are properly onboarded.
            Additionally, I take charge of running a targeted email campaign,
            introducing potential engineers, lawyers, and accountants to the
            opportunity of filming a podcast with LearnFormula.
          </Text>
        </Box>
        <Box bg={useColorModeValue('gray.100', 'gray.700')} p="4" boxShadow="lg" borderRadius="sm">
          <Stack direction="row" alignItems="center">
            <Text
              fontWeight="semibold"
              fontSize={{ base: 'lg', sm: 'xl', md: '2xl' }}
            >
              PHP Developer: Codepxl
            </Text>
          </Stack>
          <Text fontSize={{ base: 'sm' }} textAlign={'left'}>
            As a PHP Developer at Codepxl, I was responsible for individually
            updating Codepxl platforms. I wrote Laravel controllers and API
            calls to sort and return readable data. Additionally, I created
            visually appealing UI, for the program SNAP, using Vue.js and
            JavaScript. Moreover, I utilized WordPress to meet client needs and
            update multiple different blog-based websites.
          </Text>
        </Box>
        <Box bg={useColorModeValue('gray.100', 'gray.700')} p="4" boxShadow="lg" borderRadius="sm">
          <Stack direction="row" alignItems="center">
            <Text
              fontWeight="semibold"
              fontSize={{ base: 'lg', sm: 'xl', md: '2xl' }}
            >
              React Developer: Municipal Property Assessment Corporation
            </Text>
          </Stack>
          <Text fontSize={{ base: 'sm' }} textAlign={'left'}>
            As a React Developer at Municipal Property Assessment Corporation, I
            worked with Python and PostgreSQL to create a lookup service for
            sorting and searching property types. Using React, I developed
            frontend software that allowed users to view the history of a
            property through an interactive timeline.
          </Text>
        </Box>
        <Box bg={useColorModeValue('gray.100', 'gray.700')} p="4" boxShadow="lg" borderRadius="sm">
          <Stack direction="row" alignItems="center">
            <Text
              fontWeight="semibold"
              fontSize={{ base: 'lg', sm: 'xl', md: '2xl' }}
            >
              Robotics Teacher: St. Louis Catholic Elementary School
            </Text>
          </Stack>
          <Text fontSize={{ base: 'sm' }} textAlign={'left'}>
            As a Robotics Teacher at St. Louis Catholic Elementary School, I
            explained key concepts to students in grades 3-4 by creating
            slideshows and demonstrating the use of robots and iPads. This
            approach helped the students engage with technology. Additionally, I
            created a final parent presentation on PowerPoint, which resulted in
            a successful 45-minute talk about the coding activities completed.
          </Text>
        </Box>
        <Box bg={useColorModeValue('gray.100', 'gray.700')} p="4" boxShadow="lg" borderRadius="sm">
          <Stack direction="row" alignItems="center">
            <Text
              fontWeight="semibold"
              fontSize={{ base: 'lg', sm: 'xl', md: '2xl' }}
            >
              WEtech Alliance Summer Intern
            </Text>
          </Stack>
          <Text fontSize={{ base: 'sm' }} textAlign={'left'}>
            As a Summer Intern at WEtech Alliance, I represented the
            organization at several technology companies and interviewed
            business owners to document the growing technology initiative in
            Windsor. To read the blog, please visit{' '}
            <a href="https://www.wetech-alliance.com/2019/10/02/ivys-league-final-summer-blog-my-experience-as-a-wetech-intern/">
              https://www.wetech-alliance.com/2019/10/02/ivys-league-final-summer-blog-my-experience-as-a-wetech-intern/
            </a>
            .
          </Text>
        </Box>
        <Box bg={useColorModeValue('gray.100', 'gray.700')} p="4" boxShadow="lg" borderRadius="sm">
          <Stack direction="row" alignItems="center">
            <Text
              fontWeight="semibold"
              fontSize={{ base: 'lg', sm: 'xl', md: '2xl' }}
            >
              Medical Office Assistant
            </Text>
          </Stack>
          <Text fontSize={{ base: 'sm' }} textAlign={'left'}>
            As a Medical Office Assistant, I used an electronic medical records
            repository to update and organize referral forms and handouts. This
            streamlined the process and helped nurses find the necessary forms
            promptly.
          </Text>
        </Box>
      </Stack>
    </Box>
  );
}
