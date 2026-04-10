import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Routes/Routes";
import Bookprovider from "./Context/Bookprovider";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Bookprovider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </Bookprovider>
  </StrictMode>,
);
