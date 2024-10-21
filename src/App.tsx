import { AppShell } from "@mantine/core";
import { Burger } from "@mantine/core";

import Content from "./content";

import "@mantine/core/styles.css"; // needed at the root of App to use Mantine

import { MantineProvider, createTheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

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
        <AppShell.Header>this is the header</AppShell.Header>

        <AppShell.Navbar p="md">
          <Burger opened={opened} onClick={toggle} />
        </AppShell.Navbar>

        <AppShell.Main>
          <Content />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
