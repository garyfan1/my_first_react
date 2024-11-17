import { Group, Button, Flex, Switch, useMantineColorScheme } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { flushSync } from "react-dom";

const MyHeader = ({ ...props }) => {
  const { scrollToAboutMe, scrollToExperience, scrollToProjects } = props;
  const [_, scrollTo] = useWindowScroll();
  const {toggleColorScheme} = useMantineColorScheme();

  return (
    <>
      <Flex
        ml={0}
        pt={16}
        px={{ base: 32, lg: 64 }}
        justify="space-between"
        align="center"
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

        <Switch
          defaultChecked={false}
          size="md"
          onLabel={<IconSun size="18px" />}
          offLabel={<IconMoon size="18px" />}
          onChange={toggleColorScheme}
        />
      </Flex>
    </>
  );
};

export default MyHeader;
