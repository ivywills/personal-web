import UseAnimations from 'react-useanimations';
import linkedin from 'react-useanimations/lib/linkedin';
import github from 'react-useanimations/lib/github';
import {
  Box,
  useColorMode,
  IconButton,
  Flex,
  HStack,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
  useBreakpointValue,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { HamburgerIcon, ChevronDownIcon } from '@chakra-ui/icons';

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();

  const isMobile = useBreakpointValue({ base: true, md: false });

  const navLinks = (
    <HStack as="nav" spacing={4}>
      <Link href="/" class="plausible-event-name=Home Button">
        Home
      </Link>
      <Link href="/projects">Projects</Link>
      <Link href="/resume">Resume</Link>
      <Link href="/work">Work Experience</Link>
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
      <MenuItem>
        <Link href="/resume">Resume</Link>
      </MenuItem>
      <Link href="/work">
        <MenuItem>Work Experience</MenuItem>
      </Link>
    </>
  );

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
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
          </HStack>

          <Flex alignItems={'center'}>
            <a href="https://www.linkedin.com/in/ivy-wills-816947186/">
              <IconButton
                size="md"
                href="https://www.linkedin.com/in/ivy-wills-816947186/"
                icon={
                  colorMode === 'light' ? (
                    <UseAnimations animation={linkedin} size={24} />
                  ) : (
                    <UseAnimations
                      animation={linkedin}
                      size={24}
                      strokeColor="#ffffff"
                    />
                  )
                }
              />
            </a>
            <a href="https://github.com/ivywills">
              <IconButton
                size="md"
                icon={
                  colorMode === 'light' ? (
                    <UseAnimations animation={github} size={24} />
                  ) : (
                    <UseAnimations
                      animation={github}
                      size={24}
                      strokeColor="#ffffff"
                    />
                  )
                }
              />
            </a>
            <IconButton
              size="md"
              aria-label="Toggle Dark Mode"
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
            />
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
