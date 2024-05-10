import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import VehicleModels from "./Pages/VehicleModels.jsx";
import Testimonials from "./Pages/Testimonials.jsx";
import ScrollToTop from "./Utility/ScrollToTop.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "models",
        element: <VehicleModels />,
      },
      {
        path: "testimonials",
        element: <Testimonials />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <ScrollToTop />
      <App />
    </RouterProvider>
  </React.StrictMode>
);
