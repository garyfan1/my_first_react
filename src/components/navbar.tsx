import { Button, Stack } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";

const MyNavbar = ({ ...props }) => {
  const { scrollToAboutMe, scrollToExperience, scrollToProjects, toggle } =
    props;
  const [_, scrollTo] = useWindowScroll();
  return (
    <>
      <Stack>
        <Button
          size="compact-lg"
          onClick={() => {
            scrollTo({ y: 0 });
            toggle();
          }}
          variant="transparent"
        >
          Home
        </Button>
        <Button
          size="compact-lg"
          onClick={() => {
            scrollToAboutMe();
            toggle();
          }}
          variant="transparent"
        >
          About Me
        </Button>
        <Button
          size="compact-lg"
          onClick={() => {
            scrollToExperience();
            toggle();
          }}
          variant="transparent"
        >
          Experience
        </Button>
        <Button
          size="compact-lg"
          onClick={() => {
            scrollToProjects();
            toggle();
          }}
          variant="transparent"
        >
          Projects
        </Button>
      </Stack>
    </>
  );
};

export default MyNavbar;
