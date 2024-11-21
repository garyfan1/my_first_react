import {
  Switch,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";

const ColorSchemeSwitch = ({...props}) => {
  const { toggleColorScheme } = useMantineColorScheme();
  const curColorScheme = useComputedColorScheme();

  return (
    <Switch
      defaultChecked={curColorScheme === "light" ? true : false}
      size="md"
      onLabel={<IconSun size="18px" />}
      offLabel={<IconMoon size="18px" />}
      onChange={toggleColorScheme}
      {...props}
    />
  );
};

export default ColorSchemeSwitch;
