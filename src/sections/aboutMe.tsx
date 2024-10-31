import { Space, Text, Title } from "@mantine/core";
import { forwardRef } from "react";

const AboutMe = forwardRef<HTMLHeadingElement>((_, aboutMeRef) => {
  return (
    <>
      <Title ref={aboutMeRef}>About Me</Title>
      <Text>
        I initially planned to major in civil engineering, but while taking an
        elective course in C++, I developed a strong interest in coding and
        decided to switch my focus to computer science.
      </Text>
      <Space h="md" />
      <Text>
        During the pandemic, I took a semester off to work with a startup in
        Taiwan, where I deepened my skills in AWS by developing Lambda functions
        and EventBridge events.
      </Text>
      <Space h="md" />
      <Text>
        After returning to complete my degree at the University of Victoria, I
        gained hands-on experience with web technologies like Vue.js and Angular
        through co-op placements with Schneider Electric and the Government of
        BC.
      </Text>
      <Space h="md" />
      <Text>
        Upon graduating, I rejoined the startup in Taiwan as a backend
        developer, focusing on API development with Django in a fast-paced
        environment.
      </Text>
      <Space h="md" />
      <Text>
        Fun Fact about me: I eat pizza backwards (i.e., starting from the crust)
        AND with chopsticks.
      </Text>
    </>
  );
});

export default AboutMe;
