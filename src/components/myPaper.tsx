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
      px={10}
      radius="sm"
      style={{ transition: "box-shadow 0.5s" }}
      withBorder
      shadow={hovered ? "xl" : ""}
      {...props}
    >
      {children}
    </Paper>
  );
}

export default MyPaper;
