import { Title, Text, Stack, Badge } from "@mantine/core";
import { forwardRef } from "react";
import MyPaper from "../components/myPaper";

const Projects = forwardRef<HTMLHeadingElement>((_, projectsRef) => {
  return (
    <Stack>
      <Title ref={projectsRef}>Projects</Title>
      <MyPaper>
        <Title order={2}>My Portfolio</Title>
        <Text>
          Personal portfolio written in React. Using Mantine for UI, hosting on
          GitHub pages and Firebase.
        </Text>
        <Badge>React</Badge> <Badge>Mantine</Badge> <Badge>GitHub</Badge>{" "}
        <Badge>Firebase</Badge>
      </MyPaper>

      <MyPaper>
        <Title order={2}>Serverless Reminder</Title>
        <Text>
          A reminder developed with the Chalice framework and hosted on AWS
          Lambda, utilizing AWS DynamoDB for efficient user management. Set up
          events on AWS EventBridge to handle HTTP request methods, URLs,
          dateTime, and data payloads.
        </Text>
        <Badge>AWS</Badge> <Badge>Chalice</Badge>
      </MyPaper>

      <MyPaper>
        <Title order={2}>Badminton Court Reminder</Title>
        <Text>
          Reminder that utilized Beautiful Soup to parse court-booking websites
          and Line Messaging API to notify availability via messages.
        </Text>
        <Badge>Line Messaging API</Badge> <Badge>Beautiful Soup</Badge>
      </MyPaper>
    </Stack>
  );
});

export default Projects;
