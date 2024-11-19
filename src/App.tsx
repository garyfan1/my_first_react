import {
  AppShell,
  Space,
  rem,
  Burger,
} from "@mantine/core";

import "@mantine/core/styles.css";

import { MantineProvider, createTheme } from "@mantine/core";
import Hello from "./sections/hello";
import AboutMe from "./sections/aboutMe";
import Experience from "./sections/experience";
import Projects from "./sections/projects";
import MyHeader from "./components/header";
import { useDisclosure, useScrollIntoView } from "@mantine/hooks";
import Footer from "./sections/footer";
import MyNavbar from "./components/navbar";

function App() {
  const theme = createTheme({
    /** Put your mantine theme override here */
    lineHeights: {
      md: "1.6",
    },
    fontSizes: {
      md: rem(18),
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

  const [opened, { toggle }] = useDisclosure(true);

  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <AppShell
        header={{ height: 64 }}
        navbar={{
          width: "100%",
          breakpoint: "sm",
          collapsed: { desktop: true, mobile: opened },
        }}
        padding={{ base: 20, md: 32, lg: 64 }}
      >
        <AppShell.Header>
          <Burger p={32} hiddenFrom="sm" onClick={toggle} opened={!opened} />

          <MyHeader
            scrollToAboutMe={scrollToAboutMe}
            scrollToExperience={scrollToExperience}
            scrollToProjects={scrollToProjects}
            />
        </AppShell.Header>

        <AppShell.Navbar p="md">
        <MyNavbar
          scrollToAboutMe={scrollToAboutMe}
          scrollToExperience={scrollToExperience}
          scrollToProjects={scrollToProjects}
          toggle={toggle}
        />

        </AppShell.Navbar>

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
          <Footer />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
