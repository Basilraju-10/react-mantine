import { Link } from "react-router-dom";
import {
  Group,
  TextInput,
  Button,
  Text,
  ActionIcon,
  Paper,
} from "@mantine/core";
import {
  IconSearch,
  IconLayoutGrid,
  IconList,
  IconPlus,
} from "@tabler/icons-react";

export default function SearchBar({ totalProducts }) {
  return (
    <Paper
      p="md"
      radius="lg"
      shadow="xs"
      withBorder
      mb="lg"
    >
      <Group justify="space-between" align="center">

        {/* Left Side */}
        <Group>

          <TextInput
            placeholder="Search catalog..."
            leftSection={<IconSearch size={18} />}
            w={350}
          />

          <ActionIcon
            variant="light"
            color="green"
            size="lg"
            radius="md"
          >
            <IconLayoutGrid size={18} />
          </ActionIcon>

          <ActionIcon
            variant="light"
            color="gray"
            size="lg"
            radius="md"
          >
            <IconList size={18} />
          </ActionIcon>

        </Group>

        {/* Right Side */}
        <Group>

          <Text
            size="sm"
            c="dimmed"
            fw={500}
          >
            Showing {totalProducts} Results
          </Text>

          <Link
            to="/add"
            style={{ textDecoration: "none" }}
          >
            <Button
              color="green"
              leftSection={<IconPlus size={18} />}
            >
              Add Product
            </Button>
          </Link>

        </Group>

      </Group>
    </Paper>
  );
}