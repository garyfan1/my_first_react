import { AppShell, Space, rem, Burger, Flex, Affix } from "@mantine/core";

import "@mantine/core/styles.css";

import { MantineProvider, createTheme } from "@mantine/core";
import Hello from "./sections/hello";
import AboutMe from "./sections/aboutMe";
import Experience from "./sections/experience";
import Projects from "./sections/projects";
import MyHeader from "./components/header";
import { useDisclosure, useMouse, useScrollIntoView } from "@mantine/hooks";
import Footer from "./sections/footer";
import MyNavbar from "./components/navbar";
import ColorSchemeSwitch from "./components/colorSchemeSwitch";
import Aurora from "./components/aurora";

function App() {
  const theme = createTheme({
    /** Put your mantine theme override here */
    lineHeights: {
      md: "1.6",
    },
    fontSizes: {
      xs: rem(12),
      sm: rem(14),
      md: rem(18),
    },
    cursorType: "pointer" /* For switch cursor */,
    primaryColor: "teal"
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
  const { x, y } = useMouse();

  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Affix
        visibleFrom="md"
        position={{ left: x, top: y }}
        style={{ pointerEvents: "none" }}
      >
        <Aurora />
      </Affix>
      <AppShell
        header={{ height: 64 }}
        navbar={{
          width: "100%",
          breakpoint: "sm",
          collapsed: { desktop: true, mobile: opened },
        }}
        padding={{ base: 0, sm: 20, md: 32, lg: 64 }}
        style={{ overflow: "hidden" }}
      >
        <AppShell.Header>
          <Flex
            p="16 26 0 26"
            hiddenFrom="sm"
            justify="space-between"
            align="center"
          >
            <Burger onClick={toggle} opened={!opened} />
            <ColorSchemeSwitch />
          </Flex>
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
