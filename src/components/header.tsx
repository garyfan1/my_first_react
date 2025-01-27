import { Group, Button, Flex } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import ColorSchemeSwitch from "./colorSchemeSwitch";
import classes from "./myHeader.module.css";

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
            classNames={{
              root: classes.buttonRoot,
              inner: classes.buttonInner,
            }}
          >
            Home
          </Button>
          <Button
            size="compact-lg"
            onClick={scrollToAboutMe}
            variant="transparent"
            classNames={{
              root: classes.buttonRoot,
              inner: classes.buttonInner,
            }}
          >
            About Me
          </Button>
          <Button
            size="compact-lg"
            onClick={scrollToExperience}
            variant="transparent"
            classNames={{
              root: classes.buttonRoot,
              inner: classes.buttonInner,
            }}
          >
            Experience
          </Button>
          <Button
            size="compact-lg"
            onClick={scrollToProjects}
            variant="transparent"
            classNames={{
              root: classes.buttonRoot,
              inner: classes.buttonInner,
            }}
          >
            Projects
          </Button>
        </Group>

        {/* <ColorSchemeSwitch /> */}
      </Flex>
    </>
  );
};

export default MyHeader;
