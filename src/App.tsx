import {
  AppShell,
  Button,
  Container,
  Group,
} from "@mantine/core";

import "@mantine/core/styles.css"; // needed at the root of App to use Mantine

import { MantineProvider, createTheme } from "@mantine/core";
import AboutMe from "./components/aboutMe";
import Experience from "./components/experience";
import Projects from "./components/projects";
import { useScrollIntoView } from "@mantine/hooks";

function App() {
  const theme = createTheme({
    /** Put your mantine theme override here */
  });

  const {scrollIntoView, targetRef} = useScrollIntoView<HTMLHeadingElement>({offset: 60});

  const scrollToAboutMe = () =>{
    scrollIntoView({alignment: "center"})
  }

  return (
    <MantineProvider theme={theme}>
      <AppShell header={{ height: 80 }} padding="md">
        <AppShell.Header p="xl">

          <Group justify="center">
          <Button onClick={scrollToAboutMe} variant="transparent">About Me</Button>
          <Button onClick={scrollToAboutMe} variant="transparent">Experience</Button>
          <Button onClick={scrollToAboutMe} variant="transparent">Projects</Button>
          </Group>
          
        </AppShell.Header>

        <AppShell.Main>
          {/* <Container p={20} bg="var(--mantine-color-blue-light)"> */}
          <Container p={20}>
            <AboutMe ref={targetRef}/>
            <Experience/>
            <Projects/>
          </Container>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
