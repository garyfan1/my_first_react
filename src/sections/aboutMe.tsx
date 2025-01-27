import { Container, Grid, Text, Title, useMatches } from "@mantine/core";
import { forwardRef } from "react";
import MyPaper from "../components/myPaper";
import { useInViewport, useMergedRef } from "@mantine/hooks";
import classes from "../components/fadeIn.module.css";
import "./aboutMe.css";

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
  const myMergedRef = useMergedRef(ref, aboutMeRef);

  return (
    <>
      <Container p={{ base: 0, md: 16 }} size={containerSize}>
        <Grid>
          <Grid.Col pl={{ base: 30, md: 8 }} span={{ base: 12, md: 2 }}>
            <Title
              order={3}
              ref={myMergedRef}
              className={inViewport ? classes.fadeIn : classes.hiddenLeft}
            >
              About Me
            </Title>
          </Grid.Col>
          <Grid.Col pl={18} span={{ base: 12, md: 10 }}>
            <MyPaper>
              <Text size={textSize} style={{ whiteSpace: "pre-wrap"}}>
                I initially planned to major in civil engineering, but while
                taking an elective course in C++, I developed a strong interest
                in coding and decided to switch my focus to computer science.
                {"\n\n"}
                During the pandemic, I took a semester off to work with a
                startup in Taiwan, where I deepened my skills in <b>AWS</b> by
                developing Lambda functions and EventBridge events.
                {"\n\n"}
                After returning to complete my degree at the{" "}
                <b>University of Victoria</b>, I gained hands-on experience with
                web technologies like Vue.js and Angular through co-op
                placements with <b>Schneider Electric</b> and the{" "}
                <b>Government of BC</b>.{"\n\n"}
                Upon graduating, I rejoined the startup in Taiwan as a backend
                developer, focusing on API development with <b>Django</b> in a
                fast-paced environment.
                {"\n\n"}
                Fun Fact about me: I eat pizza backwards (i.e., starting from
                the crust) AND with chopsticks.
              </Text>
            </MyPaper>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
});

export default AboutMe;
