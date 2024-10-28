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

function App() {
  const theme = createTheme({
    /** Put your mantine theme override here */
  });


  return (
    <MantineProvider theme={theme}>
      <AppShell header={{ height: 80 }} padding="md">
        <AppShell.Header p="xl">

          <Group justify="center">
          <Button variant="transparent">About Me</Button>
          <Button variant="transparent">Experience</Button>
          <Button variant="transparent">Projects</Button>
          </Group>
          
        </AppShell.Header>

        <AppShell.Main>
          {/* <Container p={20} bg="var(--mantine-color-blue-light)"> */}
          <Container p={20}>
            <AboutMe/>
            <Experience/>
            <Projects/>
          </Container>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
