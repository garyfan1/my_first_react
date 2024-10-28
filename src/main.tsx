import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import AboutMe from "./components/aboutMe.tsx";
import Experience from "./components/experience.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Content from "./content.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Content />,
      },
      {
        path: "about-me",
        element: <AboutMe />,
      },
      {
        path: "experience",
        element: <Experience />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
