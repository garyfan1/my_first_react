import { Paper, Title, Text, Stack, List, Badge } from "@mantine/core";

import Projects from "./projects";

function Experience() {
  return (
    <Stack>
      <Title>Work Experience</Title>
      <Paper p={10} radius="sm" withBorder>
        <Title order={2}>Back-End Developer</Title>
        <Text>Lychee Technology</Text>
        <List>
          <List.Item>
            Responsible for backend development using Django Rest Framework for
            a high-traffic e-commerce website, utilizing MySQL to store user and
            product information.
          </List.Item>
          <List.Item>
            Enhanced financial capabilities by integrating payment and e-invoice
            systems via external APIs.
          </List.Item>
          <List.Item>
            Significantly improved user shopping experience, reducing
            transaction time by 80%.
          </List.Item>
          <List.Item>
            Proficiently conducted testing and documentation using Postman for
            RESTful APIs to ensure functionality and facilitate team
            collaboration.
          </List.Item>
          <Badge>Django</Badge> <Badge>Django Rest Framework</Badge> <Badge>MySQL</Badge> <Badge>Postman</Badge>
        </List>
      </Paper>
      <Paper p={10} radius="sm" withBorder>
        <Title order={2}>Application Developer</Title>
        <Text>Government of British Columbia</Text>
        <List>
          <List.Item>
            Developed responsive and interactive user interfaces using Vue.js
            and Vuetify within an Agile team, contributing to the timely
            delivery of web applications.
          </List.Item>
          <List.Item>
            Partnered with cross-functional team members to gather requirements,
            provide technical insights, and ensure smooth integration of
            frontend components.
          </List.Item>
          <List.Item>
            Utilized Git for version control, ensuring efficient cooperation,
            code management, and seamless code deployments.
          </List.Item>
          <Badge>Vue.js</Badge> <Badge>Vuetify</Badge>
        </List>
      </Paper>
      <Paper p={10} radius="sm" withBorder>
        <Title order={2}>Software Designer</Title>
        <Text>Schneider Electric</Text>
        <List>
          <List.Item>
            Migrated an AngularJS codebase to latest the Angular, optimizing
            performance, enhancing security, and ensuring code scalability for a
            large-scale application.
          </List.Item>
          <Badge>Angular</Badge>
        </List>
      </Paper>
      <Projects />
    </Stack>
  );
}

export default Experience;
