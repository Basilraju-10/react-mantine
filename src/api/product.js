import axios from "axios";

const BASE_URL = "https://fakestoreapi.com/products";

// Get all products
export async function getProducts() {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.log("Error fetching products:", error);
    return [];
  }
}

// Get single product
export async function getProduct(id) {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error fetching product:", error);
    return null;
  }
}

// Add product
export async function addProduct(product) {
  try {
    const response = await axios.post(BASE_URL, product);
    return response.data;
  } catch (error) {
    console.log("Error adding product:", error);
    throw error;
  }
}

// Update product
export async function updateProduct(id, product) {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, product);
    return response.data;
  } catch (error) {
    console.log("Error updating product:", error);
    throw error;
  }
}

// Delete product
export async function deleteProduct(id) {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error deleting product:", error);
    throw error;
  }
}