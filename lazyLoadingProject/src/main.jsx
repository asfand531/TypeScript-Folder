import React, { Suspense } from "react";
const App = React.lazy(() => import("./App.jsx"));
import Navbar from "./components/Navbar.jsx";
const Contact = React.lazy(() => import("./components/Contact.jsx"));
const ErrorComponent = React.lazy(() =>
  import("./components/ErrorComponent.jsx")
);
const About = React.lazy(() => import("./components/About.jsx"));
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<p>Loading App...</p>}>
        <App />
      </Suspense>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Suspense fallback={<p>Loading...</p>}>
          <Navbar />
          <About />
        </Suspense>
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Suspense fallback={<p>Loading...</p>}>
          <Navbar />
          <Contact />
        </Suspense>
      </>
    ),
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <ErrorComponent />
      </Suspense>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
