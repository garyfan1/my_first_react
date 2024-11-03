import { Container, Group, Button } from "@mantine/core";

const MyHeader = ({ ...props }) => {
  const { scrollToAboutMe, scrollToExperience, scrollToProjects } = props;
  return (
    <Container size="sm">
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
  );
};

export default MyHeader;
