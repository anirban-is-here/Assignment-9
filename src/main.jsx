import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router/dom";
import { router } from "./Routes/Router.jsx";
import SkillsProvider from "./contexts/SkillsContext.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <SkillsProvider>
        <RouterProvider router={router} />,
      </SkillsProvider>
    </AuthProvider>
  </StrictMode>
);
