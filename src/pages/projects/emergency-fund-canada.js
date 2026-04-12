import { Heading, Text, Stack } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import EmergencyCalculator from './imgs/emergency-calculator.png';
import ProjectImage from './project-image';

export default function EmergencyFundCanada() {
  return (
    <>
      <ProjectImage
        src={EmergencyCalculator}
        alt="Emergency Fund Calculator Canada"
      />
      <Stack spacing={4}>
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          <a
            href="https://emergency-fund-calculator-canada.ivywills.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            Emergency Fund Calculator Canada <ExternalLinkIcon mx="2px" />
          </a>
        </Heading>
        <Text>
          Emergency Fund Calculator Canada is a personal finance tool I built
          to help users estimate a realistic emergency savings target based on
          rent, essential expenses, debt minimums, current savings, and job
          stability.
        </Text>
        <Text>
          I used the project to explore low-impact fintech product design and
          SEO at the same time, structuring the page around practical Canadian
          search intent with clear calculations, local examples, and supporting
          educational content.
        </Text>
        <Text color={'gray.500'}>Spring 2026</Text>
      </Stack>
    </>
  );
}
