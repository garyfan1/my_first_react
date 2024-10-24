import { Paper, Title, Text, Stack } from "@mantine/core";

import Projects from "./projects";

function PastWork() {
  return (
    <Stack>
      <Title>Work Experience</Title>
      <Paper p={10} radius="sm" withBorder>
        <Title order={2}>Back-End Developer</Title>
        <Text>Lychee Technology</Text>
      </Paper>
      <Paper p={10} radius="sm" withBorder>
        <Title order={2}>Application Developer</Title>
        <Text>Government of British Columbia</Text>
      </Paper>
      <Paper p={10} radius="sm" withBorder>
        <Title order={2}>Software Designer</Title>
        <Text>Schneider Electric</Text>
      </Paper>
      <Projects/>
    </Stack>
  );
}

export default PastWork