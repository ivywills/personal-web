import { Heading, Text, Stack } from '@chakra-ui/react';
import Book from './imgs/book-finder-2.png';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import ProjectImage from './project-image';

export default function BookFinder() {
  return (
    <>
      <ProjectImage src={Book} alt="Book Finder Application" />
      <Stack spacing={4}>
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          <a
            href="https://book-finder.ivywills.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            Book Finder <ExternalLinkIcon mx="2px" />
          </a>
        </Heading>
        <Text>
          Book Finder is a web application I developed to provide personalized
          book recommendations. Using the Google Books API, the app retrieves
          detailed book metadata such as titles, summaries, and cover images,
          while integrating OpenAI's API to analyze book descriptions and
          generate tailored suggestions for users.
        </Text>
        <Text>
          The application features a real-time chat interface powered by Convex,
          allowing users to interact dynamically with the platform. I
          implemented secure user authentication and session management with
          Clerk.js, ensuring both scalability and privacy. By combining advanced
          frontend technologies like React.js and Next.js with a robust backend
          powered by Node.js and MongoDB, the platform delivers an efficient,
          seamless user experience for discovering new books based on
          personalized preferences.
        </Text>
        <Text color={'gray.500'}>Spring 2025</Text>
      </Stack>
    </>
  );
}
