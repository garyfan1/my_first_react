import {
  Anchor,
  AppShell,
  Container,
  Group,
} from "@mantine/core";

import "@mantine/core/styles.css"; // needed at the root of App to use Mantine

import { MantineProvider, createTheme } from "@mantine/core";
import { Outlet } from "react-router-dom";

function App() {
  const theme = createTheme({
    /** Put your mantine theme override here */
  });

  const pages = [
    { label: "Home", href: "/" },
    { label: "Past Work", href: "past-work" },
    { label: "About Me", href: "about-me" },
  ].map((items) => {
    return <Anchor size="lg" href={items.href}>{items.label}</Anchor>;
  });

  return (
    <MantineProvider theme={theme}>
      <AppShell header={{ height: 80 }} padding="md">
        <AppShell.Header p="xl">

          <Group justify="center">{pages}</Group>
          
        </AppShell.Header>

        <AppShell.Main>
          <Container p={20} bg="var(--mantine-color-blue-light)">
            <Outlet />
          </Container>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
