import { Flex, Center, Text } from "@mantine/core";

interface TimelineProps {
  start_date: String;
  end_date: String;
}

const Timeline = ({ start_date, end_date }: TimelineProps) => {
  return (
    <>
      <Flex
        py={5}
        mx={10}
        miw={70}
        align="center"
        justify="space-between"
        direction="column"
      >
        <Text mb={5} size="sm">
          {start_date}
        </Text>
        <Center style={{ height: "100%" }}>
          <div
            style={{ border: "1px solid black", height: "100%", width: "1px" }}
          ></div>
        </Center>
        <Text mt={5} size="sm">
          {end_date}
        </Text>
      </Flex>
    </>
  );
};

export default Timeline;
