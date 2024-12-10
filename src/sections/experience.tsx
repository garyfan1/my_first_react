import {
  Title,
  Text,
  Stack,
  List,
  ActionIcon,
  Group,
  Container,
  Grid,
  Flex,
  useMatches,
  TitleOrder,
  MantineSize,
  Transition,
} from "@mantine/core";
import { forwardRef, useEffect, useState } from "react";
import { IconExternalLink, IconBrandGithub } from "@tabler/icons-react";
import MyPaper from "../components/myPaper";
import Timeline from "../components/timeline";
import MyBadge from "../components/myBadge";
import { useInViewport, useMergedRef } from "@mantine/hooks";

const Experience = forwardRef<HTMLDivElement>((_, experienceRef) => {
  const containerSize = useMatches({
    base: "100%",
    md: "80%",
  });
  const textSize = useMatches<MantineSize>({
    base: "sm",
    md: "md",
  });
  const titleOrder = useMatches<TitleOrder>({
    base: 5,
    md: 3,
  });
  const iconSize = useMatches({
    base: "xs",
    md: "md",
  });

  const { ref, inViewport } = useInViewport();
  const myMergedRef = useMergedRef(experienceRef, ref);

  const [mount, setMount] = useState(false);
  const [placeHolder, setPlaceHolder] = useState(true);

  useEffect(() => {
    if (inViewport && !mount) {
      setMount(true);
      setTimeout(() => {
        setPlaceHolder(false);
      }, 400);
    }
  }, [inViewport]);

  return (
    <>
      <Container mih={placeHolder? 800:0} size={containerSize} ref={myMergedRef}>
        <Grid>
          <Grid.Col pl={{ base: 30, md: 8 }} span={{ base: 12, md: 2 }}>
            <Transition
              mounted={mount}
              transition="fade-right"
              duration={1000}
            >
              {(styles) => {
                return (
                  <Title order={3} style={styles}>
                    Experience
                  </Title>
                );
              }}
            </Transition>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 10 }}>
            <Stack>
              <Transition
                mounted={mount}
                transition="fade-left"
                duration={1000}
              >
                {(styles) => {
                  return (
                    <Flex style={styles}>
                      <Timeline start_date="Oct. 2023" end_date="Sep. 2022" />
                      <MyPaper>
                        <Flex justify="space-between">
                          <Title order={titleOrder}>Back-End Developer</Title>

                          <ActionIcon
                            variant="transparent"
                            component="a"
                            href="https://app.g7star.net/"
                            target="_blank"
                            size={iconSize}
                          >
                            <IconExternalLink></IconExternalLink>
                          </ActionIcon>
                        </Flex>
                        <Text fs="italic" size={textSize}>
                          Lychee Technology
                        </Text>
                        <Container p="0 16 0 0">
                          <List size={textSize}>
                            <List.Item>
                              Responsible for backend development using Django
                              Rest Framework for a high-traffic e-commerce
                              website, utilizing MySQL to store user and product
                              information.
                            </List.Item>
                            <List.Item>
                              Enhanced financial capabilities by integrating
                              payment and e-invoice systems via external APIs.
                            </List.Item>
                            <List.Item>
                              Significantly improved user shopping experience,
                              reducing transaction time by 80%.
                            </List.Item>
                            <List.Item>
                              Proficiently conducted testing and documentation
                              using Postman for RESTful APIs to ensure
                              functionality and facilitate team collaboration.
                            </List.Item>
                          </List>
                        </Container>
                        <Group my={10} gap={10}>
                          <MyBadge>Django</MyBadge>{" "}
                          <MyBadge>Django Rest Framework</MyBadge>
                          <MyBadge>MySQL</MyBadge> <MyBadge>Postman</MyBadge>
                        </Group>
                      </MyPaper>
                    </Flex>
                  );
                }}
              </Transition>

              <Transition
                mounted={mount}
                transition="fade-left"
                duration={1000}
                enterDelay={200}
              >
                {(styles) => {
                  return (
                    <Flex style={styles}>
                      <Timeline start_date="May 2022" end_date="Aug. 2022" />
                      <MyPaper>
                        <Group justify="space-between">
                          <Title order={titleOrder}>
                            Application Developer
                          </Title>
                          <Group gap="xs">
                            <ActionIcon
                              variant="transparent"
                              component="a"
                              href="https://github.com/garyfan1/ppr"
                              target="_blank"
                              size={iconSize}
                            >
                              <IconBrandGithub></IconBrandGithub>
                            </ActionIcon>
                            <ActionIcon
                              variant="transparent"
                              component="a"
                              href="https://www.bcregistry.gov.bc.ca/ppr-marketing/"
                              target="_blank"
                              size={iconSize}
                            >
                              <IconExternalLink></IconExternalLink>
                            </ActionIcon>
                          </Group>
                        </Group>
                        <Text fs="italic" size={textSize}>
                          Government of British Columbia
                        </Text>
                        <Container p="0 16 0 0">
                          <List size={textSize}>
                            <List.Item>
                              Developed responsive and interactive user
                              interfaces using Vue.js and Vuetify within an
                              Agile team, contributing to the timely delivery of
                              web applications.
                            </List.Item>
                            <List.Item>
                              Partnered with cross-functional team members to
                              gather requirements, provide technical insights,
                              and ensure smooth integration of frontend
                              components.
                            </List.Item>
                            <List.Item>
                              Utilized Git for version control, ensuring
                              efficient cooperation, code management, and
                              seamless code deployments.
                            </List.Item>
                          </List>
                        </Container>
                        <Group my={10} gap={10}>
                          <MyBadge>Vue.js</MyBadge> <MyBadge>Vuetify</MyBadge>
                        </Group>
                      </MyPaper>
                    </Flex>
                  );
                }}
              </Transition>

              <Transition
                mounted={mount}
                transition="fade-left"
                duration={1000}
                enterDelay={400}
              >
                {(styles) => {
                  return (
                    <Flex style={styles}>
                      <Timeline start_date="Jan. 2022" end_date="Apr. 2022" />
                      <MyPaper>
                        <Title order={titleOrder}>Software Designer</Title>
                        <Text size={textSize}>Schneider Electric</Text>
                        <Container p="0 16 0 0">
                          <List size={textSize}>
                            <List.Item>
                              Migrated an AngularJS codebase to latest the
                              Angular, optimizing performance, enhancing
                              security, and ensuring code scalability for a
                              large-scale application.
                            </List.Item>
                          </List>
                        </Container>
                        <MyBadge my={10}>Angular</MyBadge>
                      </MyPaper>
                    </Flex>
                  );
                }}
              </Transition>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
});

export default Experience;
