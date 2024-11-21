import { MantineSize, Badge, useMatches } from "@mantine/core";

const MyBadge = ({ ...props }) => {
  const badgeSize = useMatches<MantineSize>({
    base: "xs",
    md: "md",
  });
  return <Badge size={badgeSize} {...props} />;
};

export default MyBadge;
