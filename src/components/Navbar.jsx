import {
  AppShell,
  Group,
  Image,
  Text,
  Menu,
  ActionIcon,
  Container,
} from "@mantine/core";
import {
  IconChevronDown,
  IconPlus,
  IconBrandLinkedin,
  IconPhone,
  IconShoppingCart,
  IconDownload,
} from "@tabler/icons-react";

export default function Navbar() {
  return (
    <AppShell.Header
      h={80}
      style={{
        background: "#ffffff",
        borderBottom: "1px solid #e9ecef",
      }}
    >
      <Container
        size="xl"
        h="100%"
      >
        <Group
          h="100%"
          justify="space-between"
        >
          {/* Left */}
          <Group gap={45}>

            <Image
 src="https://gfa.aero/theme_golden_aviation/static/src/image%203.0/logo.svg"
  w={110}
/>

            <Group gap={35}>

              <Text fw={500}>Who We Are</Text>

              <Menu shadow="md">
                <Menu.Target>

                  <Group gap={4} style={{ cursor: "pointer" }}>
                    <Text fw={500}>Services</Text>
                    <IconChevronDown size={16} />
                  </Group>

                </Menu.Target>

                <Menu.Dropdown>

                  <Menu.Item>Repair</Menu.Item>

                  <Menu.Item>Maintenance</Menu.Item>

                  <Menu.Item>Support</Menu.Item>

                </Menu.Dropdown>

              </Menu>

              <Text fw={500}>Quality</Text>

              <Text fw={500}>Events</Text>

                 <Menu shadow="md">
                <Menu.Target>

                  <Group gap={4} style={{ cursor: "pointer" }}>
                    <IconPlus
                  size={16}
                  color="#0b7d3b"
                />
                    <Text fw={500}>More</Text>
                  </Group>

                </Menu.Target>

                <Menu.Dropdown>

                  <Menu.Item>About</Menu.Item>

                  <Menu.Item>Career</Menu.Item>

                  <Menu.Item>Contact</Menu.Item>

                </Menu.Dropdown>

              </Menu>

            </Group>

          </Group>

          {/* Right */}
          <Group gap="lg">

            <ActionIcon
              variant="filled"
              color="green"
              radius="xl"
            >
              <IconBrandLinkedin size={18} />
            </ActionIcon>

            <ActionIcon
              variant="filled"
              color="green"
              radius="xl"
            >
              <IconPhone size={18} />
            </ActionIcon>

            <Text fw={500}>
              AOG Desk
            </Text>

            <ActionIcon
              variant="subtle"
              color="gray"
            >
              <IconShoppingCart size={22} />
            </ActionIcon>

            <Group gap={6}>

              <ActionIcon
                variant="filled"
                color="green"
                radius="xl"
              >
                <IconDownload size={16} />
              </ActionIcon>

              <Text fw={600}>
                GFA Login
              </Text>

            </Group>

          </Group>

        </Group>
      </Container>
    </AppShell.Header>
  );
}