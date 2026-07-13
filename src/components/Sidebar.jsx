import {
  Paper,
  Stack,
  Text,
  TextInput,
  Select,
  RangeSlider,
  Button,
  Divider,
} from "@mantine/core";

export default function Sidebar() {
  return (
    <Paper
      shadow="sm"
      radius="md"
      p="md"
      withBorder
    >
      <Stack>

        <Text fw={700} size="lg">
          Filters
        </Text>

        <Divider />

        <TextInput
          label="Product Name"
          placeholder="Search..."
        />

        <Select
          label="Category"
          placeholder="Select Category"
          data={[
            "Electronics",
            "Jewelery",
            "Men's Clothing",
            "Women's Clothing",
          ]}
          clearable
        />

        <div>
          <Text mb="xs">
            Price Range
          </Text>

          <RangeSlider
            min={0}
            max={1000}
            defaultValue={[100, 800]}
          />
        </div>

        <Button
          color="red"
          variant="light"
        >
          Clear Filters
        </Button>

      </Stack>
    </Paper>
  );
}