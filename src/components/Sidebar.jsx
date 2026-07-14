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
} from "@mantine/core";
import { IconFilter, IconSearch } from "@tabler/icons-react";

export default function Sidebar() {
  return (
    <Paper
      shadow="xs"
      radius="md"
      withBorder
      p="lg"
      style={{
        width: 260,
        position: "sticky",
        top: 90,
      }}
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

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 10,
              color: "#868E96",
              fontSize: 14,
            }}
          >
            <span>$0</span>
            <span>$10,000+</span>
          </div>
        </div>

        <Button
          variant="light"
          color="gray"
          fullWidth
          radius="md"
        >
          Reset Filters
        </Button>

      </Stack>
    </Paper>
  );
}