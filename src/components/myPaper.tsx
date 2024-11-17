import { Paper } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { ReactNode } from "react";

interface MyPaperProps {
  children: ReactNode;
}

function MyPaper({ children, ...props }: MyPaperProps) {
  const { ref, hovered } = useHover();

  return (
    <Paper
      ref={ref}
      py={10}
      px={30}
      radius="lg"
      style={{ transition: "box-shadow 0.5s", borderWidth: "3px"}}
      withBorder
      shadow={hovered ? "xl" : ""}
      {...props}
    >
      {children}
    </Paper>
  );
}

export default MyPaper;
