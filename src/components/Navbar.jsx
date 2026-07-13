import { Link } from "react-router-dom";
import {
  Container,
  Group,
  Button,
  Menu,
  Text,
} from "@mantine/core";

export default function Navbar() {
  return (
    <Container fluid py="md" px="xl">
      <Group justify="space-between">

        {/* Logo */}
        <Text
          size="xl"
          fw={700}
          c="green"
        >
          LOGO
        </Text>

        {/* Navigation Links */}
        <Group gap="xl">

          <Text
            component="a"
            href="#"
            style={{ textDecoration: "none", color: "black" }}
          >
            Who We Are
          </Text>

          <Menu shadow="md" width={220}>
            <Menu.Target>
              <Button
                variant="subtle"
                color="dark"
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

          <Text
            component="a"
            href="#"
            style={{ textDecoration: "none", color: "black" }}
          >
            Quality
          </Text>

          <Text
            component="a"
            href="#"
            style={{ textDecoration: "none", color: "black" }}
          >
            Events
          </Text>

          <Text
            component="a"
            href="#"
            style={{ textDecoration: "none", color: "black" }}
          >
            More
          </Text>

        </Group>

        {/* Right Side */}
        <Group>

          <Link
            to="/add"
            style={{ textDecoration: "none" }}
          >
            <Button color="green">
              Add Product
            </Button>
          </Link>

          <Button color="dark">
            Login
          </Button>

        </Group>

      </Group>
    </Container>
  );
}