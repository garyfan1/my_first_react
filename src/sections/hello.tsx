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
import classes from "../components/hello.module.css";
import { useEffect, useState } from "react";

const Hello = () => {
  const titleOrder = useMatches<TitleOrder>({
    base: 2,
    sm: 1,
  });

  const myLinksOrder = useMatches<TitleOrder>({
    base: 4,
    sm: 3,
  });

  const title = `Hello!\n\nI'm Gary Fan\n\nA software engineer specializing in web development and backend solutions, focused on building scalable and efficient applications with technologies like Django, Vue.js, Angular, and AWS.`;

  const [curTitle, setTitle] = useState("");

  const typeTitle = () => {
    let temp = "";
    let i = 0;
    title.split("").forEach((c) => {
      setTimeout(() => {
        temp = temp + c;
        setTitle(temp);
      }, 1000 + 30 * i);
      i++;
    });
  };

  useEffect(() => {
    typeTitle();
  }, []);

  return (
    <>
      <Grid mih={{ base: 500, sm: 400 }}>
        <Grid.Col
          mt={{ base: 30, sm: 0 }}
          ml={{ base: 30, sm: 12 }}
          span={{ base: 11, md: 9 }}
        >
          <Title mb={40} order={titleOrder} style={{ whiteSpace: "pre-wrap" }}>
            {curTitle}
            <span className={classes.blink}>&nbsp;</span>
          </Title>
        </Grid.Col>
        <Grid.Col span={"auto"}></Grid.Col>
      </Grid>

      <Group ml={{ base: 30, sm: 12 }} gap="sm">
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
