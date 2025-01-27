import { Grid, GridCol, Image, MantineStyleProp, Paper } from "@mantine/core";
import { useHover, useInViewport, useMergedRef } from "@mantine/hooks";
import { ReactNode } from "react";
import classes from "./fadeIn.module.css";

interface MyPaperProps {
  children: ReactNode;
  bgImg?: String;
}

function MyPaper({ children, bgImg, ...props }: MyPaperProps) {
  const { ref: hoverRef, hovered } = useHover();
  const { ref: inViewportRef, inViewport } = useInViewport();

  const myMergedRef = useMergedRef(hoverRef, inViewportRef);

  const paperContent = () => {
    if (bgImg) {
      return (
        <>
          <Grid>
            <GridCol px={0} py={10} span={3}>
              <Image
                h={"100%"}
                src={bgImg}
                radius={"lg"}
                fit="cover"
                style={{ objectPosition: "top left" }}
              ></Image>
            </GridCol>
            <GridCol pl={20} span={"auto"}>
              {children}
            </GridCol>
          </Grid>
        </>
      );
    }
    return <>{children}</>;
  };

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
      <div className="mantine-hidden-from-sm">{children}</div>
      <div className="mantine-visible-from-sm">{paperContent()}</div>
    </Paper>
  );
}

export default MyPaper;
