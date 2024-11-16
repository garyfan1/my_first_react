import {
  AppShell,
  Space,
  Text,
  ListItem,
  rem,
} from "@mantine/core";

import "@mantine/core/styles.css";

import { MantineProvider, createTheme } from "@mantine/core";
import Hello from "./sections/hello";
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
    fontSizes: {
      md: rem(18)
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
      <AppShell header={{ height: 64 }} padding={{ base: 32, lg: 64 }}>
        <AppShell.Header>
          <MyHeader
            scrollToAboutMe={scrollToAboutMe}
            scrollToExperience={scrollToExperience}
            scrollToProjects={scrollToProjects}
          />
        </AppShell.Header>

        <AppShell.Main>
          <Space h={64} />
          <Hello />
          <Space h={256} />
          <AboutMe ref={aboutMeRef} />
          <Space h={128} />
          <Experience ref={experieceRef} />
          <Space h={128} />
          <Projects ref={projectsRef} />
          <Space h={128} />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
