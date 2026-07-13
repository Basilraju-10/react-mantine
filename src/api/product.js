import axios from "axios";

const BASE_URL = "https://fakestoreapi.com/products";

// Get all products
export async function getProducts() {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

// Get single product
export async function getProduct(id) {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// Add product
export async function addProduct(product) {
  try {
    const response = await axios.post(BASE_URL, product);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}