import { Container, Group, Button } from "@mantine/core";

const MyHeader = ({ ...props }) => {
  const { scrollToAboutMe, scrollToExperience, scrollToProjects } = props;
  return (
    <>
      <Container visibleFrom="xs" size="sm">
        <Group px={20} justify="space-between">
          <Button
            size="compact-lg"
            onClick={scrollToAboutMe}
            variant="transparent"
          >
            About Me
          </Button>
          <Button
            size="compact-lg"
            onClick={scrollToExperience}
            variant="transparent"
          >
            Experience
          </Button>
          <Button
            size="compact-lg"
            onClick={scrollToProjects}
            variant="transparent"
          >
            Projects
          </Button>
        </Group>
      </Container>

      <Container hiddenFrom="xs" size="xs">
        <Group gap="xs" px={10} justify="space-between">
          <Button
            size="compact-sm"
            onClick={scrollToAboutMe}
            variant="transparent"
          >
            About Me
          </Button>
          <Button
            size="compact-sm"
            onClick={scrollToExperience}
            variant="transparent"
          >
            Experience
          </Button>
          <Button
            size="compact-sm"
            onClick={scrollToProjects}
            variant="transparent"
          >
            Projects
          </Button>
        </Group>
      </Container>
    </>
  );
};

export default MyHeader;
