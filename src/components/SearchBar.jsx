import { Link } from "react-router-dom";
import {
  Paper,
  Group,
  TextInput,
  ActionIcon,
  Button,
  Text,
} from "@mantine/core";
import {
  IconSearch,
  IconLayoutGrid,
  IconList,
  IconFileText,
} from "@tabler/icons-react";

export default function SearchBar({ totalProducts }) {
  return (
    <Paper
      shadow="xs"
      radius="lg"
      withBorder
      p="md"
      mb="lg"
    >
      <Group justify="space-between">

        {/* Left Section */}
        <Group>

          <TextInput
            placeholder="Search catalog..."
            leftSection={<IconSearch size={18} />}
            w={250}
            radius="md"
          />

          <Group gap={6}>

            <ActionIcon
              variant="filled"
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

        </Group>

        {/* Right Section */}
        <Group>

          <Text fw={500}>
            Showing {totalProducts} results
          </Text>

          <Button
            leftSection={<IconFileText size={18} />}
            variant="light"
            color="gray"
            radius="md"
            size='sm'
          >
            Raise Bulk RFQ
          </Button>

          <Button
            component={Link}
            to="/add"
            color="green"
            radius="md"
            size='sm'
          >
            Add Product
          </Button>

        </Group>

      </Group>
    </Paper>
  );
}