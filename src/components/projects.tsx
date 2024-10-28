import { Paper, Title, Text, Stack } from "@mantine/core";

function Projects() {
  return (
    <Stack>
      <Title>Projects</Title>

      <Paper p={10} radius="sm" withBorder>
        <Title order={2}>My Portfolio</Title>
        <Text>It is this portfolio!</Text>
      </Paper>

      <Paper p={10} radius="sm" withBorder>
        <Title order={2}>Serverless Reminder</Title>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      </Paper>

      <Paper p={10} radius="sm" withBorder>
        <Title order={2}>Badminton Court Reminder</Title>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      </Paper>
    </Stack>
  );
}

export default Projects