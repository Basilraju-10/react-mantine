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
      radius="md"
      withBorder
      p="md"
      mb="lg"
    >
      <Group
        justify="space-between"
        align="center"
        wrap="wrap"
      >
        {/* Left */}
        <Group wrap="wrap">
          <TextInput
            placeholder="Search catalog..."
            leftSection={<IconSearch size={18} />}
            radius="md"
            flex={1}
            miw={220}
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

        {/* Right */}
        <Group wrap="wrap" justify="flex-end">
          <Text fw={500}>
            Showing {totalProducts} results
          </Text>

          <Button
            leftSection={<IconFileText size={18} />}
            variant="light"
            color="gray"
            radius="md"
            size="sm"
          >
            Raise Bulk RFQ
          </Button>

          <Button
            component={Link}
            to="/add"
            color="green"
            radius="md"
            size="sm"
          >
            Add Product
          </Button>
        </Group>
      </Group>
    </Paper>
  );
}