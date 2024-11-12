import { Container, Grid, Text, Title } from "@mantine/core";
import { forwardRef } from "react";

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
            <Text>
              I initially planned to major in civil engineering, but while
              taking an elective course in C++, I developed a strong interest in
              coding and decided to switch my focus to computer science.
            </Text>
            <Text mt={18}>
              During the pandemic, I took a semester off to work with a startup
              in Taiwan, where I deepened my skills in AWS by developing Lambda
              functions and EventBridge events.
            </Text>
            <Text mt={18}>
              After returning to complete my degree at the University of
              Victoria, I gained hands-on experience with web technologies like
              Vue.js and Angular through co-op placements with Schneider
              Electric and the Government of BC.
            </Text>
            <Text mt={18}>
              Upon graduating, I rejoined the startup in Taiwan as a backend
              developer, focusing on API development with Django in a fast-paced
              environment.
            </Text>
            <Text mt={18}>
              Fun Fact about me: I eat pizza backwards (i.e., starting from the
              crust) AND with chopsticks.
            </Text>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
});

export default AboutMe;
