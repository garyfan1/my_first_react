import { ReactNode } from "react";
import TopBanner from "./topBanner";
import { Box } from "@mantine/core";

interface terminalProps {
    children: ReactNode;
}

const Terminal = ({children}: terminalProps) => {
  return (
    <div
      style={{
        border: "2px solid var(--mantine-color-gray-5)",
        height: "100%",
        borderRadius: "var(--mantine-radius-md)",
        backgroundColor: "var(--mantine-color-gray-9)",
      }}
    >
      <TopBanner></TopBanner>
      <Box pl={12} pt={12}>
      {children}
      </Box>
    </div>
  );
};

export default Terminal;
