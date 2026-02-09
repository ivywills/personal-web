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
import { MoonIcon, SunIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const bg = useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(26, 32, 44, 0.8)');

  const NavLink = ({ to, children }) => (
    <Link
      as={RouterLink}
      to={to}
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      fontWeight="medium"
    >
      {children}
    </Link>
  );

  const navLinks = (
    <HStack as="nav" spacing={4}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/work">Experience</NavLink>
    </HStack>
  );

  const dropdownLinks = (
    <>
      <MenuItem as={RouterLink} to="/">Home</MenuItem>
      <MenuItem as={RouterLink} to="/projects">Projects</MenuItem>
      <MenuItem as={RouterLink} to="/work">Experience</MenuItem>
    </>
  );

  return (
    <Box
      bg={bg}
      px={4}
      position="sticky"
      top={0}
      zIndex={100}
      backdropFilter="blur(10px)"
      boxShadow="sm"
      borderBottom="1px"
      borderColor={useColorModeValue('gray.200', 'gray.700')}
    >
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'} maxW="container.xl" mx="auto">
        <HStack spacing={8} alignItems="center">
          {isMobile ? (
            <Menu>
              <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="ghost" aria-label="Open menu" />
              <MenuList>{dropdownLinks}</MenuList>
            </Menu>
          ) : (
            navLinks
          )}
        </HStack>

        <Flex alignItems={'center'} gap={2}>
          <Link href="https://www.linkedin.com/in/ivy-wills-816947186/" isExternal>
            <IconButton
              size="md"
              variant="ghost"
              aria-label="LinkedIn"
              icon={
                <UseAnimations
                  animation={linkedin}
                  size={24}
                  strokeColor={colorMode === 'dark' ? '#ffffff' : undefined}
                />
              }
            />
          </Link>
          <Link href="https://github.com/ivywills" isExternal>
            <IconButton
              size="md"
              variant="ghost"
              aria-label="GitHub"
              icon={
                <UseAnimations
                  animation={github}
                  size={24}
                  strokeColor={colorMode === 'dark' ? '#ffffff' : undefined}
                />
              }
            />
          </Link>
          <IconButton
            size="md"
            variant="ghost"
            aria-label="Toggle Dark Mode"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
          />
        </Flex>
      </Flex>
    </Box>
  );
}
