import { Link } from "react-router-dom";
import {
  Group,
  TextInput,
  Button,
  Text,
} from "@mantine/core";

export default function SearchBar({ totalProducts }) {
  return (
    <Group
      justify="space-between"
      align="center"
      mb="lg"
    >
      {/* Search Input */}
      <TextInput
        placeholder="Search products..."
        w={350}
      />

      {/* Total Products */}
      <Text fw={500}>
        Showing {totalProducts} Products
      </Text>

      {/* Add Product Button */}
      <Link
        to="/add"
        style={{ textDecoration: "none" }}
      >
        <Button color="green">
          Add Product
        </Button>
      </Link>
    </Group>
  );
}