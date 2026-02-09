import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
    global: props => ({
        body: {
            bg: mode('gray.50', 'gray.900')(props),
            color: mode('gray.800', 'whiteAlpha.900')(props),
        },
    }),
};

const colors = {
    brand: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        200: '#bae6fd',
        300: '#7dd3fc',
        400: '#38bdf8',
        500: '#0ea5e9',
        600: '#0284c7',
        700: '#0369a1',
        800: '#075985',
        900: '#0c4a6e',
    },
};

const components = {
    Button: {
        baseStyle: {
            fontWeight: 'bold',
            borderRadius: 'full',
        },
        variants: {
            solid: props => ({
                bg: mode('brand.500', 'brand.200')(props),
                color: mode('white', 'gray.900')(props),
                _hover: {
                    bg: mode('brand.600', 'brand.300')(props),
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                },
            }),
        },
    },
    Heading: {
        baseStyle: {
            fontWeight: 'bold',
            letterSpacing: 'tight',
        },
    },
};

const fonts = {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
};

const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
};

const theme = extendTheme({ config, styles, colors, components, fonts });

export default theme;
