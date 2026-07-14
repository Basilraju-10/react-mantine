import {
  Paper,
  Stack,
  Title,
  Divider,
  TextInput,
  Select,
  RangeSlider,
  Text,
  Button,
  Checkbox,
  Group,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

export default function Sidebar() {
  return (
    <Paper
      p="lg"
      radius="lg"
      shadow="xs"
      withBorder
    >
      <Stack gap="lg">

        <Title order={4}>
          Filters
        </Title>

        <Divider />

        {/* Product Search */}
        <TextInput
          label="Search"
          placeholder="Search products..."
          leftSection={<IconSearch size={16} />}
        />

        {/* Category */}
        <Select
          label="Category"
          placeholder="Select category"
          data={[
            "Electronics",
            "Jewelery",
            "Men's Clothing",
            "Women's Clothing",
          ]}
          clearable
        />

        {/* Availability */}
        <div>
          <Text fw={500} mb="xs">
            Availability
          </Text>

          <Stack gap={6}>
            <Checkbox
              label="In Stock"
              defaultChecked
            />

            <Checkbox
              label="Out of Stock"
            />
          </Stack>
        </div>

        {/* Price */}
        <div>
          <Text fw={500} mb="xs">
            Price Range
          </Text>

          <RangeSlider
            color="green"
            min={0}
            max={1000}
            defaultValue={[100, 800]}
          />

          <Group justify="space-between" mt="xs">
            <Text size="sm">$100</Text>
            <Text size="sm">$800</Text>
          </Group>
        </div>

        <Divider />

        <Button
          variant="outline"
          color="gray"
          fullWidth
        >
          Reset Filters
        </Button>

      </Stack>
    </Paper>
  );
}