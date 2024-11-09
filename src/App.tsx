import { AppShell, Container, Space, Text, ListItem} from "@mantine/core";

import "@mantine/core/styles.css";

import { MantineProvider, createTheme } from "@mantine/core";
import Hello from "./sections/hello"
import AboutMe from "./sections/aboutMe";
import Experience from "./sections/experience";
import Projects from "./sections/projects";
import MyHeader from "./header";
import { useScrollIntoView } from "@mantine/hooks";

function App() {
  const theme = createTheme({
    /** Put your mantine theme override here */
    lineHeights: {
      md: "1.6",
    },
    components: {
      Text: Text.extend({
        defaultProps: {
          c: "#1E1E1E",
        },
      }),
      ListItem: ListItem.extend({
        defaultProps: {
          c: "#1E1E1E",
        },
      }),
    },
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
      <AppShell header={{ height: { base: 50, sm: 80 } }} padding="lg">
        <AppShell.Header p={{ base: "md", sm: "xl" }}>
          <MyHeader
            scrollToAboutMe={scrollToAboutMe}
            scrollToExperience={scrollToExperience}
            scrollToProjects={scrollToProjects}
          />
        </AppShell.Header>

        <AppShell.Main>
          <Container size="sm">
          <Space h={32} />
            <Hello/>
            <Space h={256} />
            <AboutMe ref={aboutMeRef} />
            <Space h={32} />
            <Experience ref={experieceRef} />
            <Space h={32} />
            <Projects ref={projectsRef} />
          </Container>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
