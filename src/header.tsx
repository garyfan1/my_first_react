import { Container, Group, Button, Flex } from "@mantine/core";

const MyHeader = ({ ...props }) => {
  const { scrollToAboutMe, scrollToExperience, scrollToProjects } = props;
  return (
    <>
        <Group p={20}>
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
    </>
  );
};

export default MyHeader;
