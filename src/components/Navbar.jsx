import {
  Group,
  Button,
  Menu,
  Text,
  Image,
  ActionIcon,
} from "@mantine/core";
import {
  IconChevronDown,
  IconPhone,
  IconShoppingCart,
  IconBrandLinkedin,
} from "@tabler/icons-react";

export default function Navbar() {
  return (
    <Group
      justify="space-between"
      h="100%"
      px="xl"
      wrap="nowrap"
    >
      {/* Logo */}
      <Group gap="xs">
        {/* Replace with your own logo */}
        <Image
          src="https://placehold.co/45x45"
          w={45}
          h={45}
          radius="md"
        />

        <Text
          fw={700}
          size="xl"
          c="green"
        >
          GFA
        </Text>
      </Group>

      {/* Navigation */}
      <Group gap={30}>

        <Text
          component="a"
          href="#"
          fw={500}
        >
          Who We Are
        </Text>

        <Menu shadow="md" width={220}>
          <Menu.Target>
            <Button
              variant="subtle"
              rightSection={<IconChevronDown size={16} />}
            >
              Services
            </Button>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item>Aircraft Parts</Menu.Item>
            <Menu.Item>Repair</Menu.Item>
            <Menu.Item>Maintenance</Menu.Item>
            <Menu.Item>Technical Support</Menu.Item>
          </Menu.Dropdown>
        </Menu>

        <Text component="a" href="#" fw={500}>
          Quality
        </Text>

        <Text component="a" href="#" fw={500}>
          Events
        </Text>

        <Text component="a" href="#" fw={500}>
          More
        </Text>

      </Group>

      {/* Right Section */}
      <Group gap="sm">

        <ActionIcon
          variant="light"
          color="green"
          radius="xl"
          size="lg"
        >
          <IconBrandLinkedin size={18} />
        </ActionIcon>

        <ActionIcon
          variant="light"
          color="green"
          radius="xl"
          size="lg"
        >
          <IconPhone size={18} />
        </ActionIcon>

        <ActionIcon
          variant="light"
          color="green"
          radius="xl"
          size="lg"
        >
          <IconShoppingCart size={18} />
        </ActionIcon>

        <Button
          variant="outline"
          color="green"
        >
          Login
        </Button>

      </Group>
    </Group>
  );
}