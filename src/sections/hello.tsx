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
import Terminal from "../components/terminal/terminal";

const Hello = () => {
  const titleOrder = useMatches<TitleOrder>({
    base: 4,
    sm: 2,
  });

  const myLinksOrder = useMatches<TitleOrder>({
    base: 4,
    sm: 3,
  });

  const title =
    "> Hello!\n\n> I'm Gary Fan\n\n> A software engineer specializing in web development and backend solutions, focused on building scalable and efficient applications with technologies like Django, Vue.js, Angular, and AWS.";

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
      <Grid mt={{ base: 50, sm: 0 }}>
        <Grid.Col span={{ base: 0, md: 2 }}></Grid.Col>
        <Grid.Col
          mt={{ base: 30, sm: 0 }}
          span={"auto"}
          mih={{ base: 450, sm: 500 }}
        >
          <Terminal>
            <Title
              order={titleOrder}
              style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}
              pr={{ sm: 50 }}
            >
              {curTitle}
              <span className={classes.blink}>&nbsp;</span>
            </Title>
          </Terminal>
          <Group mt={{ base: 30, sm: 50 }} gap="sm">
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
        </Grid.Col>
        <Grid.Col span={{ base: 0, md: 2 }}></Grid.Col>
      </Grid>
    </>
  );
};

export default Hello;
