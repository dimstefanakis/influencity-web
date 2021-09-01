import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import {
  Flex, Text, Avatar, Box, Tag, Stack,
} from '@chakra-ui/react';
import CustomErrorPage from '../404';
import StoreButtons from '../../src/flat/StoreButtons/StoreButtons';

function MentorPage() {
  const [mentor, setMentor] = useState(null);
  const [status, setStatus] = useState(null);
  const router = useRouter();

  const { id } = router.query;

  async function getMentor() {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/v1/coaches/${id}/`,
      );
      const data = await response.json();
      setStatus(response.status);
      if (response.status !== 404) {
        setMentor(data);
      }
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    if (id) {
      getMentor();
    }
  }, [id]);

  return (
    status === 404 ? <CustomErrorPage statusCode={404} />
      : (
        <>
          {mentor
            && (
            <Head>
              <meta property="og:title" content={`${mentor.name} - Troosh`} />
              <meta property="og:type" content="profile" />
              {mentor.bio && <meta property="og:description" content={mentor.bio} />}
              {mentor.avatar && <meta property="og:image" content={mentor.avatar} />}
              <meta property="og:profile:username" content={mentor.name} />
            </Head>
            )}
          <div className="basic-container">
            {mentor && (
            <Flex flexFlow="column" maxW="500">
              <Flex>
                <Avatar size="2xl" bg="#ffd29b" showBorder borderColor="gray.800" name={mentor.name} src={mentor.avatar} />
                <Box ml="12">
                  <Text fontSize="2xl" fontWeight="bold">{mentor.name}</Text>
                  <Text fontSize="xl">{mentor.bio ? mentor.bio : 'This mentor has not added a bio yet.'}</Text>
                </Box>
              </Flex>
              <Flex mt="10" flexFlow="column">
                <Text fontWeight="bold">Expertise</Text>
                <Box>
                  <Tag size="lg" mt="5" bg="#ffd29b" borderRadius="full">{mentor.expertise_field}</Tag>
                </Box>
              </Flex>
              <Flex mt="10" flexFlow="column">
                <Text fontWeight="bold">
                  {mentor.projects.length}
                  {' '}
                  Projects
                </Text>
                <Stack direction="row" wrap="wrap" shouldWrapChildren isInline justify="start" spacing="0">
                  {mentor.projects.map((project) => (
                    <Box mr="2">
                      <Tag variant="outline" color="gray.800" size="lg" mt="5" bg="#ffd29b" borderRadius="full">{project.name}</Tag>
                    </Box>
                  ))}
                </Stack>
              </Flex>
              <Flex w="100%" placeItems="center" textAlign="center" mt="10" flexFlow="column">
                <Text fontSize="lg">
                  Download Troosh to learn more about
                  {' '}
                  <Text as="b">
                    {mentor.expertise_field.toLowerCase()}
                  </Text>
                  {' '}
                  with
                  {' '}
                  <Text as="b">
                    {mentor.name}
                    !
                  </Text>
                </Text>
                <StoreButtons customStyle={{ marginTop: 10 }} />
              </Flex>
            </Flex>
            )}
          </div>
        </>
      )
  );
}

export default MentorPage;
