import {
  Paper,
  Stack,
  Title,
  Text,
  TextInput,
  Select,
  Slider,
  Button,
  Divider,
  Box,
  Group
} from "@mantine/core";
import { IconFilter, IconSearch } from "@tabler/icons-react";

export default function Sidebar() {
  return (
    <Box
      w={{ base: "100%", md: 260 }}
      pos={{ base: "static", md: "sticky" }}
      top={90}
    >
      <Paper
        shadow="xs"
        radius="md"
        withBorder
        p="lg"
      >
        <Stack gap="lg">

          {/* Filter Heading */}
          <Title
            order={3}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <IconFilter size={20} />
            Filters
          </Title>

          <Divider />

          {/* Product Number */}
          <div>
            <Text fw={600} mb={8}>
              Product Number
            </Text>

            <TextInput
              placeholder="Search part number..."
              leftSection={<IconSearch size={16} />}
              radius="md"
            />
          </div>

          {/* Condition */}
          <div>
            <Text fw={600} mb={8}>
              Condition
            </Text>

            <Select
              radius="md"
              data={[
                "All",
                "New",
                "Used",
                "Refurbished",
              ]}
              defaultValue="All"
            />
          </div>

          {/* Price */}
          <div>
            <Text fw={600} mb={15}>
              Price Range
            </Text>

            <Slider
              color="green"
              defaultValue={70}
            />

            <Group justify="space-between" mt="sm">
              <Text size="sm" c="dimmed">
                $0
              </Text>

              <Text size="sm" c="dimmed">
                $10,000+
              </Text>
            </Group>
          </div>

          <Button
            fullWidth
            radius="md"
            variant="light"
            color="gray"
          >
            Reset Filters
          </Button>

        </Stack>
      </Paper>
    </Box>
  );
}