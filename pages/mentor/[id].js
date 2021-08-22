import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  Flex, Text, Avatar, Box, Tag, Stack,
} from '@chakra-ui/react';

function MentorPage() {
  const [mentor, setMentor] = useState(null);
  const router = useRouter();

  const { id } = router.query;

  async function getMentor() {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/v1/coaches/${id}/`,
      );
      const data = await response.json();
      setMentor(data);
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
        </Flex>
      )}
    </div>
  );
}

export default MentorPage;
