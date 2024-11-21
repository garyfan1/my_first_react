import {
  Title,
  Text,
  Stack,
  ActionIcon,
  Group,
  Container,
  Grid,
  useMatches,
  TitleOrder,
  MantineSize,
} from "@mantine/core";
import { forwardRef } from "react";
import MyPaper from "../components/myPaper";
import { IconBrandGithub } from "@tabler/icons-react";
import MyBadge from "../components/myBadge";

const Projects = forwardRef<HTMLHeadingElement>((_, projectsRef) => {
  const containerSize = useMatches({
    base: "100%",
    md: "80%",
  });
  const titleOrder = useMatches<TitleOrder>({
    base: 5,
    md: 3,
  });
  const textSize = useMatches<MantineSize>({
    base: "sm",
    md: "md",
  });
  const iconSize = useMatches({
    base: "xs",
    md: "md",
  });

  return (
    <>
      <Container size={containerSize}>
        <Grid>
          <Grid.Col pl={{ base: 30, md: 8 }} span={{ base: 12, md: 2 }}>
            <Title order={3} ref={projectsRef}>
              Projects
            </Title>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 10 }}>
            <Stack>
              <MyPaper>
                <Group justify="space-between">
                  <Title order={titleOrder}>My Portfolio</Title>
                  <ActionIcon
                    variant="transparent"
                    component="a"
                    href="https://github.com/garyfan1/my_first_react/"
                    target="_blank"
                    size={iconSize}
                  >
                    <IconBrandGithub></IconBrandGithub>
                  </ActionIcon>
                </Group>
                <Text size={textSize}>
                  Personal portfolio written in React. Using Mantine for UI,
                  hosting on GitHub pages and Firebase.
                </Text>
                <Group my={10} gap={10}>
                  <MyBadge>React</MyBadge> <MyBadge>Mantine</MyBadge>{" "}
                  <MyBadge>GitHub</MyBadge> <MyBadge>Firebase</MyBadge>
                </Group>
              </MyPaper>

              <MyPaper>
                <Group justify="space-between">
                  <Title order={titleOrder}>Serverless Reminder</Title>
                  <ActionIcon
                    variant="transparent"
                    component="a"
                    href="https://github.com/garyfan1/aws_scheduler_public"
                    target="_blank"
                    size={iconSize}
                  >
                    <IconBrandGithub></IconBrandGithub>
                  </ActionIcon>
                </Group>
                <Text size={textSize}>
                  A reminder developed with the Chalice framework and hosted on
                  AWS Lambda, utilizing AWS DynamoDB for efficient user
                  management. Set up events on AWS EventBridge to handle HTTP
                  request methods, URLs, dateTime, and data payloads.
                </Text>
                <Group my={10} gap={10}>
                  <MyBadge>AWS</MyBadge> <MyBadge>Chalice</MyBadge>
                </Group>
              </MyPaper>

              <MyPaper>
                <Group justify="space-between">
                  <Title order={titleOrder}>Badminton Court Reminder</Title>
                  <ActionIcon
                    variant="transparent"
                    component="a"
                    href="https://github.com/garyfan1/court_reminder"
                    target="_blank"
                    size={iconSize}
                  >
                    <IconBrandGithub></IconBrandGithub>
                  </ActionIcon>
                </Group>
                <Text size={textSize}>
                  Reminder that utilized Beautiful Soup to parse court-booking
                  websites and Line Messaging API to notify availability via
                  messages.
                </Text>
                <Group my={10} gap={10}>
                  <MyBadge>Line Messaging API</MyBadge>{" "}
                  <MyBadge>Beautiful Soup</MyBadge>
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
