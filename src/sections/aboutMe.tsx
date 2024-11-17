import { Container, Grid, Text, Title } from "@mantine/core";
import { forwardRef } from "react";
import MyPaper from "../components/myPaper";

const AboutMe = forwardRef<HTMLHeadingElement>((_, aboutMeRef) => {
  return (
    <>
      <Container size="80%">
        <Grid>
          <Grid.Col span={2}>
            <Title order={3} ref={aboutMeRef}>
              About Me
            </Title>
          </Grid.Col>
          <Grid.Col pl={18} span={10}>
            <MyPaper>
            <Text>
              I initially planned to major in civil engineering, but while
              taking an elective course in C++, I developed a strong interest in
              coding and decided to switch my focus to computer science.
            </Text>
            <Text mt={18}>
              During the pandemic, I took a semester off to work with a startup
              in Taiwan, where I deepened my skills in <b>AWS</b> by developing Lambda
              functions and EventBridge events.
            </Text>
            <Text mt={18}>
              After returning to complete my degree at the <b>University of
              Victoria</b>, I gained hands-on experience with web technologies like
              Vue.js and Angular through co-op placements with <b>Schneider
              Electric</b> and the <b>Government of BC</b>.
            </Text>
            <Text mt={18}>
              Upon graduating, I rejoined the startup in Taiwan as a backend
              developer, focusing on API development with <b>Django</b> in a fast-paced
              environment.
            </Text>
            <Text mt={18}>
              Fun Fact about me: I eat pizza backwards (i.e., starting from the
              crust) AND with chopsticks.
            </Text>
            </MyPaper>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
});

export default AboutMe;
