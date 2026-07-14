import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Paper,
  Title,
  TextInput,
  NumberInput,
  Select,
  Button,
  Stack,
  Breadcrumbs,
  Anchor,
} from "@mantine/core";

import Layout from "../components/Layout";
import { addProduct } from "../api/product";

export default function Add() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    price: 0,
    category: "",
    image: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await addProduct(form);

      alert("Product Added Successfully");

      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Failed to add product");
    }
  }

  const items = [
    { title: "Home", href: "/" },
    { title: "Add Product", href: "#" },
  ].map((item, index) => (
    <Anchor
      key={index}
      href={item.href}
      underline="never"
      c={index === 1 ? "green" : "dimmed"}
    >
      {item.title}
    </Anchor>
  ));

  return (
    <Layout>
      <Container size="sm">

        <Breadcrumbs mb="md">
          {items}
        </Breadcrumbs>

        <Paper
          p="xl"
          radius="lg"
          shadow="xs"
          withBorder
        >
          <Title order={2} mb="xl">
            Add Product
          </Title>

          <form onSubmit={handleSubmit}>
            <Stack>

              <TextInput
                label="Product Title"
                name="title"
                placeholder="Enter product title"
                value={form.title}
                onChange={handleChange}
                required
              />

              <NumberInput
                label="Price"
                value={form.price}
                onChange={(value) =>
                  setForm({
                    ...form,
                    price: value || 0,
                  })
                }
                min={0}
              />

              <Select
                label="Category"
                placeholder="Choose category"
                data={[
                  "Electronics",
                  "Jewelery",
                  "Men's Clothing",
                  "Women's Clothing",
                ]}
                value={form.category}
                onChange={(value) =>
                  setForm({
                    ...form,
                    category: value || "",
                  })
                }
                clearable
              />

              <TextInput
                label="Image URL"
                name="image"
                placeholder="https://example.com/image.jpg"
                value={form.image}
                onChange={handleChange}
              />

              <Button
                type="submit"
                color="green"
                size="md"
                mt="md"
              >
                Add Product
              </Button>

            </Stack>
          </form>

        </Paper>

      </Container>
    </Layout>
  );
}