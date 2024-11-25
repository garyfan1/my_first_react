import {
  Container,
  Grid,
  Text,
  Title,
  Transition,
  useMatches,
} from "@mantine/core";
import { forwardRef } from "react";
import MyPaper from "../components/myPaper";
import { useInViewport } from "@mantine/hooks";

const AboutMe = forwardRef<HTMLHeadingElement>((_, aboutMeRef) => {
  const containerSize = useMatches({
    base: "100%",
    md: "80%",
  });

  const textSize = useMatches({
    base: "sm",
    md: "md",
  });

  const { ref, inViewport } = useInViewport();

  return (
    <>
      <Container p={{ base: 0, md: 16 }} size={containerSize} ref={ref}>
        <Grid>
          <Grid.Col pl={{ base: 30, md: 8 }} span={{ base: 12, md: 2 }}>
            <Transition
              mounted={inViewport}
              transition="fade-right"
              duration={1000}
            >
              {(styles) => {
                return (
                  <Title style={styles} order={3} ref={aboutMeRef}>
                    {/* BUG: scroll to about me will not work */}
                    About Me
                  </Title>
                );
              }}
            </Transition>
          </Grid.Col>
          <Grid.Col pl={18} span={{ base: 12, md: 10 }}>
            <Transition
              mounted={inViewport}
              transition="fade-left"
              duration={1000}
            >
              {(styles) => {
                return (
                  <div style={styles}>
                    <MyPaper>
                      <Text size={textSize}>
                        I initially planned to major in civil engineering, but
                        while taking an elective course in C++, I developed a
                        strong interest in coding and decided to switch my focus
                        to computer science.
                      </Text>
                      <Text mt={{ base: 12, md: 18 }} size={textSize}>
                        During the pandemic, I took a semester off to work with
                        a startup in Taiwan, where I deepened my skills in{" "}
                        <b>AWS</b> by developing Lambda functions and
                        EventBridge events.
                      </Text>
                      <Text mt={{ base: 12, md: 18 }} size={textSize}>
                        After returning to complete my degree at the{" "}
                        <b>University of Victoria</b>, I gained hands-on
                        experience with web technologies like Vue.js and Angular
                        through co-op placements with <b>Schneider Electric</b>{" "}
                        and the <b>Government of BC</b>.
                      </Text>
                      <Text mt={{ base: 12, md: 18 }} size={textSize}>
                        Upon graduating, I rejoined the startup in Taiwan as a
                        backend developer, focusing on API development with{" "}
                        <b>Django</b> in a fast-paced environment.
                      </Text>
                      <Text mt={{ base: 12, md: 18 }} size={textSize}>
                        Fun Fact about me: I eat pizza backwards (i.e., starting
                        from the crust) AND with chopsticks.
                      </Text>
                    </MyPaper>
                  </div>
                );
              }}
            </Transition>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
});

export default AboutMe;
