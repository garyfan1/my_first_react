import { AppShell, NavLink } from "@mantine/core";
import { Burger } from "@mantine/core";

import "@mantine/core/styles.css"; // needed at the root of App to use Mantine

import { MantineProvider, createTheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Outlet } from "react-router-dom";

function App() {
  const theme = createTheme({
    /** Put your mantine theme override here */
  });

  const [opened, { toggle }] = useDisclosure();

  return (
    <MantineProvider theme={theme}>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 250,
          breakpoint: "sm",
        }}
        padding="md"
      >
        <AppShell.Header p="lg">Header</AppShell.Header>

        <AppShell.Navbar p="md">
          <AppShell.Section>
            <Burger p="sm" opened={opened} onClick={toggle} />

            <NavLink href="/" label="Content" />
            <NavLink href="about-me" label="About Me" />
            <NavLink href="past-work" label="Past Work" />
          </AppShell.Section>
        </AppShell.Navbar>

        <AppShell.Main>
          <Outlet />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
