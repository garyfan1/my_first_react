import { Paper } from "@mantine/core";
import { useHover, useInViewport, useMergedRef } from "@mantine/hooks";
import { ReactNode } from "react";
import classes from "./fadeIn.module.css";

interface MyPaperProps {
  children: ReactNode;
}

function MyPaper({ children, ...props }: MyPaperProps) {
  const { ref: hoverRef, hovered } = useHover();
  const { ref: inViewportRef, inViewport } = useInViewport();

  const myMergedRef = useMergedRef(hoverRef, inViewportRef);

  return (
    <Paper
      ref={myMergedRef}
      py={10}
      px={{ base: 10, md: 30 }}
      radius="lg"
      withBorder
      shadow={hovered ? "xl" : ""}
      className={inViewport ? classes.fadeInPaper : classes.hiddenRight}
      {...props}
    >
      {children}
    </Paper>
  );
}

export default MyPaper;
