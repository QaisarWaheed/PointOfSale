import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ThemeProvider from "./theme/ThemeProvider";
import RouterProvider from "./router/Router";
import { AuthProvider } from "./auth/context/AuthContext";
import { InventoryContextProvider } from "./Dashboard/DashboardLayout/context/InentoryContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <InventoryContextProvider>
          <RouterProvider />
        </InventoryContextProvider>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);
