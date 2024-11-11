import { ActionIcon, Container, Flex, Group, Space, Title } from "@mantine/core";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
const Hello = () => {
  return (
    <>
    <Flex justify="flex-start">
    <Container w="70%" pl={12} ml={0}>
      <Title mb={40} order={1}>Hello!</Title>
      <Title mb={40} order={1}>I'm Gary Fan</Title>
      <Title mb={40} order={1}>
        A software engineer specializing in web development and backend
        solutions, focused on building scalable and efficient applications with
        technologies like Django, Vue.js, Angular, and AWS.
      </Title>
    </Container>
    </Flex>

    <Group pl={12} ml={0} gap="sm">
    <Title order={3}>My Links</Title>
      <ActionIcon
        variant="transparent"
        component="a"
        href="https://www.linkedin.com/in/garyfanincanada/"
        target="_blank"
      >
        <IconBrandLinkedin />
      </ActionIcon>

      <ActionIcon
        variant="transparent"
        component="a"
        href="https://www.linkedin.com/in/garyfanincanada/"
        target="_blank"
      >
        <IconBrandGithub />
      </ActionIcon>
      </Group>
    </>
  );
};

export default Hello;
