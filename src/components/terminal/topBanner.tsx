import WindowButton from "./windowButton";
import { Flex } from "@mantine/core";

const TopBanner = () => {
  return (
    <Flex
      style={{
        height: "20px",
        width: "100%",
        backgroundColor: "var(--mantine-color-dark-4)",
        borderRadius: "var(--mantine-radius-md) var(--mantine-radius-md) 0 0 ",
      }}
      align="center"
      columnGap={8}
      pl={12}
    >
      <WindowButton color="var(--mantine-color-red-5)"></WindowButton>
      <WindowButton color="var(--mantine-color-yellow-5)"></WindowButton>
      <WindowButton color="var(--mantine-color-green-5)"></WindowButton>
    </Flex>
  );
};

export default TopBanner;
