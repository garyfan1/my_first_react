import {
  ActionIcon,
  Grid,
  Group,
  Title,
  TitleOrder,
  useMatches,
} from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import info from "../assets/info.json";

const Hello = () => {
  const titleOrder = useMatches<TitleOrder>({
    base: 2,
    sm: 1,
  });

  const myLinksOrder = useMatches<TitleOrder>({
    base: 4,
    sm: 3,
  });

  return (
    <>
      <Grid>
        <Grid.Col ml={12} span={{ base: 11, md: 9 }}>
          <Title mb={40} order={titleOrder}>
            Hello!
          </Title>
          <Title mb={40} order={titleOrder}>
            I'm Gary Fan
          </Title>
          <Title mb={40} order={titleOrder}>
            A software engineer specializing in web development and backend
            solutions, focused on building scalable and efficient applications
            with technologies like Django, Vue.js, Angular, and AWS.
          </Title>
        </Grid.Col>
        <Grid.Col span={"auto"}></Grid.Col>
      </Grid>

      <Group ml={12} gap="sm">
        <Title order={myLinksOrder}>My Links</Title>
        <ActionIcon
          variant="transparent"
          component="a"
          href={info.linkedin}
          target="_blank"
        >
          <IconBrandLinkedin />
        </ActionIcon>

        <ActionIcon
          variant="transparent"
          component="a"
          href={info.github}
          target="_blank"
        >
          <IconBrandGithub />
        </ActionIcon>

        <ActionIcon
          variant="transparent"
          component="a"
          href={"mailto: " + info.email}
        >
          <IconMail />
        </ActionIcon>
      </Group>
    </>
  );
};

export default Hello;
