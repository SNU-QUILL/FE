import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import AppRouter from "./router/AppRouter.tsx";
import "./index.css";
import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

if (import.meta.env.MODE === "development" || import.meta.env.MODE === "build") {
  const { worker } = await import("@/mocks/browser");
  await worker.start();
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  </StrictMode>,
);
