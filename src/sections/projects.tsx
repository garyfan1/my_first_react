import {
  Title,
  Text,
  Stack,
  Badge,
  ActionIcon,
  Group,
  Container,
  Grid,
} from "@mantine/core";
import { forwardRef } from "react";
import MyPaper from "../components/myPaper";
import { IconBrandGithub } from "@tabler/icons-react";

const Projects = forwardRef<HTMLHeadingElement>((_, projectsRef) => {
  return (
    <>
      <Container size="80%">
        <Grid>
          <Grid.Col span={2}>
            <Title order={3} ref={projectsRef}>
              Projects
            </Title>
          </Grid.Col>
          <Grid.Col span={10}>
            <Stack>
              <MyPaper>
                <Group justify="space-between">
                  <Title order={3}>My Portfolio</Title>
                  <ActionIcon
                    variant="transparent"
                    component="a"
                    href="https://github.com/garyfan1/my_first_react/"
                    target="_blank"
                  >
                    <IconBrandGithub></IconBrandGithub>
                  </ActionIcon>
                </Group>
                <Text>
                  Personal portfolio written in React. Using Mantine for UI,
                  hosting on GitHub pages and Firebase.
                </Text>
                <Group my={10} gap={10}>
                  <Badge>React</Badge> <Badge>Mantine</Badge>{" "}
                  <Badge>GitHub</Badge> <Badge>Firebase</Badge>
                </Group>
              </MyPaper>

              <MyPaper>
                <Group justify="space-between">
                  <Title order={3}>Serverless Reminder</Title>
                  <ActionIcon
                    variant="transparent"
                    component="a"
                    href="https://github.com/garyfan1/aws_scheduler_public"
                    target="_blank"
                  >
                    <IconBrandGithub></IconBrandGithub>
                  </ActionIcon>
                </Group>
                <Text>
                  A reminder developed with the Chalice framework and hosted on
                  AWS Lambda, utilizing AWS DynamoDB for efficient user
                  management. Set up events on AWS EventBridge to handle HTTP
                  request methods, URLs, dateTime, and data payloads.
                </Text>
                <Group my={10} gap={10}>
                  <Badge>AWS</Badge> <Badge>Chalice</Badge>
                </Group>
              </MyPaper>

              <MyPaper>
                <Group justify="space-between">
                  <Title order={3}>Badminton Court Reminder</Title>
                  <ActionIcon
                    variant="transparent"
                    component="a"
                    href="https://github.com/garyfan1/court_reminder"
                    target="_blank"
                  >
                    <IconBrandGithub></IconBrandGithub>
                  </ActionIcon>
                </Group>
                <Text>
                  Reminder that utilized Beautiful Soup to parse court-booking
                  websites and Line Messaging API to notify availability via
                  messages.
                </Text>
                <Group my={10} gap={10}>
                  <Badge>Line Messaging API</Badge>{" "}
                  <Badge>Beautiful Soup</Badge>
                </Group>
              </MyPaper>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
});

export default Projects;
