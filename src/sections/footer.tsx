import { Button, Grid, Group } from "@mantine/core";
import info from "../assets/info.json";

const Footer = () => {
  return (
    <>
      <Grid justify="flex-end">
        <Grid.Col span="content">
          <Group>
            <Button
              variant="transparent"
              size="compact-lg"
              component="a"
              href={info.linkedin}
              target="_blank"
            >
              LinkedIn
            </Button>
            <Button
              variant="transparent"
              size="compact-lg"
              component="a"
              href={info.github}
              target="_blank"
            >
              GitHub
            </Button>
            <Button
              variant="transparent"
              size="compact-lg"
              component="a"
              href={"mailto: "+info.linkedin}
            >
              Email
            </Button>
          </Group>
        </Grid.Col>
      </Grid>
    </>
  );
};

export default Footer;
