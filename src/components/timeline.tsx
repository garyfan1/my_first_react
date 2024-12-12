import { Flex, Center, Text, useMatches } from "@mantine/core";
import classes from "./fadeIn.module.css";
import { useInViewport } from "@mantine/hooks";

interface TimelineProps {
  start_date: String;
  end_date: String;
}

const Timeline = ({ start_date, end_date }: TimelineProps) => {
  const timelineMinWidth = useMatches({
    base: 60,
    md: 70,
  });
  const textSize = useMatches({
    base: "xs",
    md: "sm",
  });
  const { ref, inViewport } = useInViewport();

  return (
    <>
      <Flex
        py={5}
        mx={10}
        miw={timelineMinWidth}
        align="center"
        justify="space-between"
        direction="column"
        ref={ref}
        className={inViewport ? classes.fadeIn : classes.hidden}
      >
        <Text mb={5} size={textSize}>
          {start_date}
        </Text>
        <Center style={{ height: "100%" }}>
          <span
            style={{
              height: "100%",
              width: "2px",
              backgroundColor: "var(--mantine-color-dark-text)",
              borderRadius: "10px",
            }}
          ></span>
        </Center>
        <Text mt={5} size={textSize}>
          {end_date}
        </Text>
      </Flex>
    </>
  );
};

export default Timeline;
