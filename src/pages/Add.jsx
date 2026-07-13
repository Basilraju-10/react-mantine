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
} from "@mantine/core";

import Navbar from "../components/Navbar";
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

      setForm({
        title: "",
        price: 0,
        category: "",
        image: "",
      });

      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Failed to add product");
    }
  }

  return (
    <>
      <Navbar />

      <Container size="sm" mt="xl">
        <Paper
          shadow="md"
          radius="md"
          p="xl"
          withBorder
        >
          <Title order={2} mb="lg">
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
                placeholder="Enter price"
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
                placeholder="Select category"
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
              />

              <TextInput
                label="Image URL"
                name="image"
                placeholder="Enter image URL"
                value={form.image}
                onChange={handleChange}
              />

              <Button
                type="submit"
                color="green"
                fullWidth
              >
                Add Product
              </Button>

            </Stack>
          </form>
        </Paper>
      </Container>
    </>
  );
}