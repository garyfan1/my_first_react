import {
  Title,
  Text,
  Stack,
  List,
  Badge,
  ActionIcon,
  Group,
  Container,
  Grid,
  Flex,
} from "@mantine/core";
import { forwardRef } from "react";
import { IconExternalLink, IconBrandGithub } from "@tabler/icons-react";
import MyPaper from "../components/myPaper";
import Timeline from "../components/timeline";

const Experience = forwardRef<HTMLHeadingElement>((_, experienceRef) => {
  return (
    <>
      <Container size="80%">
        <Grid>
          <Grid.Col span={2}>
            <Title order={3} ref={experienceRef}>
              Experience
            </Title>
          </Grid.Col>
          <Grid.Col span={10}>
            <Stack>
              <Flex>
                <Timeline start_date="Oct. 2023" end_date="Sep. 2022" />
                <MyPaper>
                  <Group justify="space-between">
                    <Title order={3}>Back-End Developer</Title>

                    <ActionIcon
                      variant="transparent"
                      component="a"
                      href="https://app.g7star.net/"
                      target="_blank"
                    >
                      <IconExternalLink></IconExternalLink>
                    </ActionIcon>
                  </Group>
                  <Text>Lychee Technology</Text>
                  <Container p="0 16 0 0">
                    <List>
                      <List.Item>
                        Responsible for backend development using Django Rest
                        Framework for a high-traffic e-commerce website,
                        utilizing MySQL to store user and product information.
                      </List.Item>
                      <List.Item>
                        Enhanced financial capabilities by integrating payment
                        and e-invoice systems via external APIs.
                      </List.Item>
                      <List.Item>
                        Significantly improved user shopping experience,
                        reducing transaction time by 80%.
                      </List.Item>
                      <List.Item>
                        Proficiently conducted testing and documentation using
                        Postman for RESTful APIs to ensure functionality and
                        facilitate team collaboration.
                      </List.Item>
                    </List>
                  </Container>
                  <Group my={10} gap={10}>
                    <Badge>Django</Badge> <Badge>Django Rest Framework</Badge>
                    <Badge>MySQL</Badge> <Badge>Postman</Badge>
                  </Group>
                </MyPaper>
              </Flex>

              <Flex>
                <Timeline start_date="May 2022" end_date="Aug. 2022" />
                <MyPaper>
                  <Group justify="space-between">
                    <Title order={3}>Application Developer</Title>
                    <Group>
                      <ActionIcon
                        variant="transparent"
                        component="a"
                        href="https://github.com/garyfan1/ppr"
                        target="_blank"
                      >
                        <IconBrandGithub></IconBrandGithub>
                      </ActionIcon>
                      <ActionIcon
                        variant="transparent"
                        component="a"
                        href="https://www.bcregistry.gov.bc.ca/ppr-marketing/"
                        target="_blank"
                      >
                        <IconExternalLink></IconExternalLink>
                      </ActionIcon>
                    </Group>
                  </Group>
                  <Text>Government of British Columbia</Text>
                  <Container p="0 16 0 0">
                    <List>
                      <List.Item>
                        Developed responsive and interactive user interfaces
                        using Vue.js and Vuetify within an Agile team,
                        contributing to the timely delivery of web applications.
                      </List.Item>
                      <List.Item>
                        Partnered with cross-functional team members to gather
                        requirements, provide technical insights, and ensure
                        smooth integration of frontend components.
                      </List.Item>
                      <List.Item>
                        Utilized Git for version control, ensuring efficient
                        cooperation, code management, and seamless code
                        deployments.
                      </List.Item>
                    </List>
                  </Container>
                  <Group my={10} gap={10}>
                    <Badge>Vue.js</Badge> <Badge>Vuetify</Badge>
                  </Group>
                </MyPaper>
              </Flex>

              <Flex>
                <Timeline start_date="Jan. 2022" end_date="Apr. 2022" />
                <MyPaper>
                  <Title order={3}>Software Designer</Title>
                  <Text>Schneider Electric</Text>
                  <Container p="0 16 0 0">
                    <List>
                      <List.Item>
                        Migrated an AngularJS codebase to latest the Angular,
                        optimizing performance, enhancing security, and ensuring
                        code scalability for a large-scale application.
                      </List.Item>
                    </List>
                  </Container>
                  <Badge my={10}>Angular</Badge>
                </MyPaper>
              </Flex>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
});

export default Experience;
