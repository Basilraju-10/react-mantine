import { createBrowserRouter } from "react-router-dom";

import Display from "../pages/Display";
import Add from "../pages/Add";
import ProductDetails from "../pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Display />,
  },
  {
    path: "/add",
    element: <Add />,
  },
  {
    path: "/product/:id",
    element: <ProductDetails />,
  },
]);

export default router;