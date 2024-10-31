import { AppShell, Button, Container, Group, Space } from "@mantine/core";

import "@mantine/core/styles.css";

import { MantineProvider, createTheme } from "@mantine/core";
import AboutMe from "./components/aboutMe";
import Experience from "./components/experience";
import Projects from "./components/projects";
import { useScrollIntoView } from "@mantine/hooks";

function App() {
  const theme = createTheme({
    /** Put your mantine theme override here */
  });

  const { scrollIntoView: scrollAboutMeItoView, targetRef: aboutMeRef } =
    useScrollIntoView<HTMLHeadingElement>({ offset: 100 });
  const { scrollIntoView: scrollExperieceItoView, targetRef: experieceRef } =
    useScrollIntoView<HTMLHeadingElement>({ offset: 100 });
  const { scrollIntoView: scrollProjectsItoView, targetRef: projectsRef } =
    useScrollIntoView<HTMLHeadingElement>({ offset: 100 });

  const scrollToAboutMe = () => {
    scrollAboutMeItoView({ alignment: "start" });
  };
  const scrollToExperience = () => {
    scrollExperieceItoView({ alignment: "start" });
  };
  const scrollToProjects = () => {
    scrollProjectsItoView({ alignment: "start" });
  };

  return (
    <MantineProvider theme={theme}>
      <AppShell header={{ height: 80 }} padding="md">
        <AppShell.Header p="xl">
        <Container size="sm">
          <Group grow justify="center">
            <Button onClick={scrollToAboutMe} variant="transparent">
              About Me
            </Button>
            <Button onClick={scrollToExperience} variant="transparent">
              Experience
            </Button>
            <Button onClick={scrollToProjects} variant="transparent">
              Projects
            </Button>
          </Group>
          </Container>
        </AppShell.Header>

        <AppShell.Main>
          <Container size="sm">
            <AboutMe ref={aboutMeRef} />
            <Space h={20}/>
            <Experience ref={experieceRef} />
            <Space h={20}/>
            <Projects ref={projectsRef} />
          </Container>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
