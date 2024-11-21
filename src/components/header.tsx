import { Group, Button, Flex } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import ColorSchemeSwitch from "./colorSchemeSwitch";

const MyHeader = ({ ...props }) => {
  const { scrollToAboutMe, scrollToExperience, scrollToProjects } = props;
  const [_, scrollTo] = useWindowScroll();

  return (
    <>
      <Flex
        ml={0}
        pt={16}
        px={{ base: 20, md: 32, lg: 64 }}
        justify="space-between"
        align="center"
        visibleFrom="sm"
      >
        <Group>
          <Button
            size="compact-lg"
            onClick={() => scrollTo({ y: 0 })}
            variant="transparent"
          >
            Home
          </Button>
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

        <ColorSchemeSwitch/>

      </Flex>
    </>
  );
};

export default MyHeader;
