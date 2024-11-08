import { ActionIcon, Group, Space, Title } from "@mantine/core";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
const Hello = () => {
  return (
    <>
      <Title order={1}>Hello!</Title>
      <Space h={40}/>
      <Title order={1}>I'm Gary Fan</Title>
      <Space h={40}/>
      <Title order={1}>
        A software engineer specializing in web development and backend
        solutions, focused on building scalable and efficient applications with
        technologies like Django, Vue.js, Angular, and AWS.
      </Title>
      <Space h={40}/>

    <Group gap="sm">
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
