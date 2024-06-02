import { ReactNode } from 'react';
import UseAnimations from 'react-useanimations';
import linkedin from 'react-useanimations/lib/linkedin';
import github from 'react-useanimations/lib/github';
import {
  Box,
  useColorMode,
  IconButton,
  Flex,
  Avatar,
  HStack,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useBreakpointValue,
} from '@chakra-ui/react';
import me from './profile2.jpg';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';

import Home from './home.js';
import Project from './projects.js';
import Resume from './resume.js';
import Internship from './internship.js';

const Links = ['Home', 'Projects', 'Resume', 'Internships'];

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const isMobile = useBreakpointValue({ base: true, md: false }); // use the mobile breakpoint for screens up to the md size

  const navLinks = (
    <HStack as="nav" spacing={4}>
      <Link href="/">Home</Link>
      <Link href="/projects">Projects</Link>
      {/* <Link href="/resume">Resume</Link> */}
      <Link href="/internship">Work Experience</Link>
    </HStack>
  );

  const dropdownLinks = (
    <>
      <Link href="/">
        <MenuItem>Home</MenuItem>
      </Link>
      <Link href="/projects">
        <MenuItem>Projects</MenuItem>
      </Link>
      {/* <MenuItem>
        <Link href="/resume">Resume</Link>
      </MenuItem> */}
      <Link href="/internship">
        <MenuItem>Work Experience</MenuItem>
      </Link>
    </>
  );

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          {/* <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          /> */}
          <HStack spacing={8} alignItems="center">
            {isMobile ? (
              <Menu>
                <MenuButton as={Link} href="#" rightIcon={<ChevronDownIcon />}>
                  <HamburgerIcon />
                </MenuButton>
                <MenuList>{dropdownLinks}</MenuList>
              </Menu>
            ) : (
              navLinks
            )}
            {/* Additional content goes here */}
          </HStack>

          <Flex alignItems={'center'}>
            <IconButton
              size="md"
              href="https://www.linkedin.com/in/ivy-wills-816947186/"
              icon={
                colorMode === 'light' ? (
                  <UseAnimations animation={github} size={24} />
                ) : (
                  <UseAnimations animation={github} size={24} strokeColor="#ffffff" />
                )
              }
            />
            <IconButton
              size="md"
              href="https://github.com/ivywills"
              icon={
                colorMode === 'light' ? (
                  <UseAnimations animation={github} size={24} />
                ) : (
                  <UseAnimations animation={github} size={24} strokeColor="#ffffff" />
                )
              }
            />
            <IconButton
              size="md"
              aria-label="Toggle Dark Mode"
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
            />
            <Avatar size={'sm'} src={me} />
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
